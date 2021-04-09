function User(io, socket) {
    this.io = io;
    this.socket = socket;
    this.setEventListeners();
    log.green(`${this.socket.id} connected`);
}

User.prototype.setEventListeners = function() {
    this.socket.on('ping', this.ping.bind(this));
    this.socket.on('disconnect', this.disconnect.bind(this));
    this.socket.on('error', error => log.red('socket error', error));
};

User.prototype.ping = function(body, callback) {
    callback(null, {});
};

User.prototype.disconnect = async function() {
    if (process.env.NODE_ENV !== 'prod') log.red(`${this.socket.id} disconnected`);
};

module.exports = User;
