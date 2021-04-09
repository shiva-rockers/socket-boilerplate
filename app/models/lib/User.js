const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        sMobile: { type: String, default: '' },
        oData: {},
        sDataToken: String,
        sAuthToken: String
    },
    { timestamps: { createdAt: 'dCreatedDate', updatedAt: 'dUpdatedDate' } }
).index({ sMobile: 1 });

module.exports = mongoose.model('user', User);
