const mongoose = require('mongoose');
var Product
const  productSchema = new mongoose.Schema ({
    name: {
       type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: String,
    },
    quantity: {
        type: String,
    },
    createdAt: {
        type: String
    }
});

 Product =module.exports =  mongoose.model('product',productSchema);