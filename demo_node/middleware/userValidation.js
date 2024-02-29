const _ = require("lodash");
const util = require('../utils');
const constant = require('../constants');
//console.log("***",_)

let validateUserSignup = function (req,res,next) {
let {name,email,password,phoneNo} = req.body;
let errors = [];
email = req.body.email = _.toLower(email);

    if (_.isEmpty(name)) {
    errors.push({ fieldName: "name", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "name") });
    }
    
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id") });
    }else if(!util.isValidEmail(email)){
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (_.isEmpty(password)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Password") });
    }

    // if(!util.isValidPhone(phoneNo)){
    //     errors.push({fieldName: "phoneNo", message:constant.MESSAGES.INVALID_PHONE });
    // } 

    if (errors && errors.length > 0) {
        validationError(errors, next);
    } else {
    next();
    }
};

/////////////////////////
let editValidator = function(req,res,next) {
    var errors = [];
    if (_.isEmpty(req.body)) {
      errors.push({
        fieldName: "req.body",
        message: constant.MESSAGES.KEY_CANT_EMPTY.replace(
          "{{key}}",
          "request body"
        ),
      });
    }
    if (errors && errors.length > 0) {
      validationError(errors, next);
    }
    next(); 
}

////////////////////////
var loginValidator = function (req, res, next) {
    let { email, password } = req.body;
    var errors = [];
    email = req.body.email = _.toLower(email);
    if (_.isEmpty(email)) {
      errors.push({
        fieldName: "email",
        message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id"),
      });
    } else if (!util.isValidEmail(email)) {
      errors.push({
        fieldName: "email",
        message: constant.MESSAGES.INVALID_EMAIL,
      });
    }
  
    if (_.isEmpty(password)) {
      errors.push({
        fieldName: "password",
        message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Password"),
      });
    } else if (!util.isValidPassword(password)) {
      errors.push({
        fieldName: "password",
        message: constant.MESSAGES.INVALID_PASSWORD,
      });
    }
    if (errors && errors.length > 0) {
      validationError(errors, next);
    }
    next();
  };

////////////////////////
var validationError = function (errors, next) {
    if (errors && errors.length > 0) {
        return next(errors)
    }
    // next();

}




module.exports = {
    validateUserSignup,
    editValidator,
    loginValidator 
}