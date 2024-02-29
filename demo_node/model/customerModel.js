const mongoose = require('mongoose');
var Customer
const  customerSchema = new mongoose.Schema ({
    customerId: {
        type: String,
    },
    name: {
       type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    createdAt: {
        type: String
    }
});
customerSchema.index({ customerId: 1 });
Customer =module.exports =  mongoose.model('customer',customerSchema);