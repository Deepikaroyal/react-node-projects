const _ = require("lodash");
const constant = require('../constants');

let validateAccount = function (req,res,next) {
    let {accountNumber,balance,ownerName} = req.body;
    let errors = [];
    
        if (_.isEmpty(accountNumber)) {
        errors.push({ fieldName: "accountNumber", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "accountNumber") });
        }
        
        if (_.isNil(balance)) {
            errors.push({ fieldName: "balance", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "balance") });
        }
    
        if (_.isEmpty(ownerName)) {
            errors.push({ fieldName: "ownerName", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "ownerName") });
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
        // next();
    
    }

    module.exports = {
        validateAccount,
    }