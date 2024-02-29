const _ = require("lodash");
const constant = require('../constants')


let validateProduct = function (req,res,next) {
    let {name, category, price, quantity, createdAt} = req.body;
    let errors = [];
    
        if (_.isEmpty(name)) {
        errors.push({ fieldName: "name", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "name") });
        }
        
        if (_.isEmpty(category)) {
            errors.push({ fieldName: "category", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Category") });
        }
    
        if (_.isEmpty(price)) {
            errors.push({ fieldName: "price", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Price") });
        }
        if (_.isEmpty(quantity)) {
            errors.push({ fieldName: "quantity", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Quantity") });
        }
        if (_.isEmpty(createdAt)) {
            errors.push({ fieldName: "createdAt", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Created Date") });
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
        validateProduct
    }

    