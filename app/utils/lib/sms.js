function SMS() {
}

SMS.prototype.send = function(type, body) {
    if (process.env.NODE_ENV !== 'prod') return false;
    const headers = {};
    const data = {};
    return _.axios('POST', ``, headers, data);
};

module.exports = new SMS();
