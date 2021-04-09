/* eslint-disable no-shadow */
const io = require("socket.io");
const httpServer = require("http").createServer();
const User = require('./lib/User');

function Socket() {
    this.clients = {};
    this.counter = 0;
    this.options = {
        pingInterval: 30000,
        pingTimeout: 15000,
        cookie: false,
        maxHttpBufferSize: 1024,
        serveClient: true,
        transports: ['polling', 'websocket'],
        allowUpgrades: true,
    }
}

/** initializing socket and storing io instance as globally available */
Socket.prototype.initialize = function () {
    global.io = io(httpServer, this.options);
    this.setEventListeners();
};

/** connection listeners and middleware for authentication purpose */
Socket.prototype.setEventListeners = function () {
    global.io.use((socket, next) => this.middleware(global.io, socket, next));
    global.io.on('connection', socket => new User(global.io, socket)); // on each connection n new user instance will be created.
    global.io.on('error', log.red); // error handling
};

Socket.middleware = function(io, socket, next) {
    log.yellow('Connection attempt by', socket.id);
    next();
};

module.exports = new Socket();
