const _ = require("lodash");
const appUtils = require("../../..//appUtils");
const constant = require("../../../constant");
const customException = require("../../../customException");

var signupValidator = function (req, res, next) {
  var { email, password, confrmPassword } = req.body;
  var {} = req.headers;
  var errors = [];
  email = req.body.email = _.toLower(email);
  if (_.isEmpty(email)) {
    errors.push({
      fieldName: "email",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id"),
    });
  } else if (!appUtils.isValidEmail(email)) {
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
  } else if (!appUtils.isValidPassword(password)) {
    errors.push({
      fieldName: "password",
      message: constant.MESSAGES.INVALID_PASSWORD,
    });
  }

  if (_.isEmpty(confrmPassword)) {
    errors.push({
      fieldName: "confrmPassword",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace(
        "{{key}}",
        "confrmPassword"
      ),
    });
  } else if (!appUtils.isPasswordMatch(password, confrmPassword)) {
    errors.push({
      fieldName: "confrmPassword",
      message: constant.MESSAGES.INVALID_CONFRMPASSWORD,
    });
  }

  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

var loginValidator = function (req, res, next) {
  let { email, password } = req.body;
  var errors = [];
  email = req.body.email = _.toLower(email);
  if (_.isEmpty(email)) {
    errors.push({
      fieldName: "email",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id"),
    });
  } else if (!appUtils.isValidEmail(email)) {
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
  } else if (!appUtils.isValidPassword(password)) {
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

var editValidator = function (req, res, next) {
  //   console.log("rq.body@", req.body, "!!", typeof req.body);
  var errors = [];
  if (_.isEmpty(req.body)) {
    errors.push({
      fieldName: "req.body",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "request body"),
    });
  }
  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

var chgePaswrdValidator = function(req, res, next) {
  let {oldPassword, newPassword, confrmPassword} = req.body
  let errors = [];

  if (_.isEmpty(oldPassword)) {
    errors.push({
      fieldName: "oldPassword",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "oldPassword"),
    });
  }

  if (_.isEmpty(newPassword)) {
    errors.push({
      fieldName: "newPassword",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "newPassword"),
    });
  } else if (!appUtils.isValidPassword(newPassword)) {
    errors.push({
      fieldName: "newPassword",
      message: constant.MESSAGES.INVALID_PASSWORD,
    });
  }

  if (_.isEmpty(confrmPassword)) {
    errors.push({
      fieldName: "confrmPassword",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace(
        "{{key}}",
        "confrmPassword"
      ),
    });
  } else if (!appUtils.isPasswordMatch(newPassword, confrmPassword)) {
    errors.push({
      fieldName: "confrmPassword",
      message: constant.MESSAGES.INVALID_CONFRMPASSWORD,
    });
  } if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

// var deleteValidation = function (req, res, next) {
//   console.log("inside validate")
//   let { userId } = req.body;
//   let errors = [];
//   if (_.isEmpty(userId)) {
//     errors.push({
//       fieldName: "userId",
//       message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "userId"),
//     });
//   }if (errors && errors.length > 0) {
//     validationError(errors, next);
//   }
//   next();
// };

var resetValidator = function (req, res, next) {
  let { password } = req.body;
  let errors = [];

  if (_.isEmpty(password)) {
    errors.push({
      fieldName: "password",
      message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "password"),
    });
  }
  if (errors && errors.length > 0) {
    validationError(errors, next);
  }
  next();
};

var validationError = function (errors, next) {
  if (errors && errors.length > 0) {
    return next(
      customException.getCustomErrorException(
        constant.MESSAGES.validationError,
        errors
      )
    );
  }
  next();
};


module.exports = {
  signupValidator,
  loginValidator,
  editValidator,
  chgePaswrdValidator,
  resetValidator

};
