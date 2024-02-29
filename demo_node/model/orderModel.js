const mongoose = require('mongoose');
var Order
const  orderSchema = new mongoose.Schema ({
    orderId: {
       type: String,
    },
    customerId: {
        type: String,
    },
    products: {
        type: Array,
    },
    totalAmount: {
        type: String,
    },
    orderDate: {
        type: String
    },
    
});
orderSchema.index({ customerId: 1 });


 Order =module.exports =  mongoose.model('order',orderSchema);