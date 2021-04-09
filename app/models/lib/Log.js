const mongoose = require('mongoose');

const OperationLog = new mongoose.Schema({
    iUserId: mongoose.Schema.Types.ObjectId,
    sOperation: { type: String, default: '' },
    sRemoteAddress: { type: String, default: '' },
    oDeviceInfo: {},
    dCreatedDate: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('operationLog', OperationLog);
