const mongoose = require('mongoose');
var Account
const accountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        required: true
    },
    ownerName: {
        type: String,
        required: true,
    },
});

Account = module.exports = mongoose.model('Account',accountSchema)
