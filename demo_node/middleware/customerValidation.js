const _ = require("lodash");
const constant = require('../constants')
const util =  require('../utils')


let validateCustomer = function (req,res,next) {
    let {customerId,name, email, address, createdAt} = req.body;
    let errors = [];
         
        if (_.isEmpty(customerId)) {
        errors.push({ fieldName: "customerId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "customerId") });
        }

        if (_.isEmpty(name)) {
        errors.push({ fieldName: "name", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "name") });
        }
        
        if (_.isEmpty(email)) {
            errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email") });
        } else if(!util.isValidEmail(email)){
            errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
        }
    
        if (_.isEmpty(address)) {
            errors.push({ fieldName: "address", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Address") });
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
        validateCustomer
    }

    