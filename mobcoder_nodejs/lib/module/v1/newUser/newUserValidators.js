//========================== Load Modules Start ===========================

//========================== Load external Module =========================
var _ = require("lodash");

//========================== Load Internal Module =========================
var appUtils = require("../../../appUtils");
var constant = require("../../../constant");
var exceptions = require("../../../customException");

//========================== Load Modules End =============================



//========================== Export Module Start ===========================

var validateLogin = function (req, res, next) {
// console.log("----------inside validate")
    var { deviceToken, deviceID, deviceTypeID,email,password } = req.body;
    var { } = req.headers;
    var errors = [];
    // if (_.isEmpty(deviceToken)) {
    //     errors.push({ fieldName: "deviceToken", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "deviceToken") });
    // }
    // if (_.isEmpty(deviceID)) {
    //     errors.push({ fieldName: "deviceID", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "deviceID") });
    // }
    // if (_.isEmpty(deviceTypeID)) {
    //     errors.push({ fieldName: "deviceTypeID", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "deviceTypeID") });
    // }
    email = req.body.email = _.toLower(email);
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id") });
    }else if(!appUtils.isValidEmail(email)){
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (_.isEmpty(password)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Password") });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

module.exports = {
    validateLogin
}