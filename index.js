require('./env'); // environment variables
require('./globals'); //  use full global variables and functions.

const { mongodb } = require('./app/utils');
const socket = require('./app/sockets');

/** initialization process for mongodb and socket */
mongodb.initialize();
socket.initialize();
