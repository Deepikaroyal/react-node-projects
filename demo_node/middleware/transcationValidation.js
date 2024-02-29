const mongoose = require('mongoose');
const { Types} = mongoose;
const _ = require("lodash");
const constant = require('../constants');

let validateTranscation = function (req,res,next) {
    let {senderAccount,receiverAccount,amount} = req.body;
    let errors = [];
    
        if (!Types.ObjectId.isValid(senderAccount)) {
        errors.push({ fieldName: "senderAccount", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "senderAccount") });
        }
        
        if (!Types.ObjectId.isValid(receiverAccount)) {
            errors.push({ fieldName: "receiverAccount", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "receiverAccount") });
        }
    
        if (_.isNil(amount)) {
            errors.push({ fieldName: "amount", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "amount") });
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
        validateTranscation,
    }