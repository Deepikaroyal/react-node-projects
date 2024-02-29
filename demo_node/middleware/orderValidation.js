const _ = require("lodash");
const constant = require('../constants')


let validateOrder = function (req,res,next) {
    let {orderId, customerId, products, totalAmount, orderDate} = req.body;
    let errors = [];
        if (_.isEmpty(orderId)) {
        errors.push({ fieldName: "orderId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "orderId") });
        }
        
        if (_.isEmpty(customerId)) {
            errors.push({ fieldName: "customerId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "customerId") });
        }
    
        if (_.isEmpty(products)) {
            errors.push({ fieldName: "products", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Products") });
        }
        if (_.isEmpty(totalAmount)) {
            errors.push({ fieldName: "totalAmount", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "totalAmount") });
        }
        if (_.isEmpty(orderDate)) {
            errors.push({ fieldName: "orderDate", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "orderDate") });
        }
        if (errors && errors.length > 0) {
            validationError(errors, next);
        } else {
        next();
        }
    };

    var validationError = function (errors, next) {
        if (errors && errors.length > 0) {
            return next(errors)
        }
    
    }

    module.exports = {
        validateOrder
    }

    