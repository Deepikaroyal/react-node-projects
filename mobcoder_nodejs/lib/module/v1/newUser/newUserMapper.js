/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const constant = require("../../../constant");
const config = require("../../../config");
const { use } = require("./newUserRoute");

function loginMapping(params) {
  console.log(params, "-----------params in mapper");
  let userInfo = params.user;
  // console.log(userInfo, "--------------------uuuu");
  delete userInfo.password;
  var respObj = {
    message: "Successfully Login",
    accessToken: params.accessToken,
    result: userInfo,
  };
  // console.log(respObj, "------respObj");
  return respObj;
}

function createMapping(params) {
  var respObj = {
    message: "User Created Successfully",
    result: params,
  };
  return respObj;
}

function editMapping(params) {
  let userInfo = params.newUser;
  if (userInfo.password) {
    delete userInfo.password;
  }
  if (userInfo.deviceToken) {
    delete userInfo.deviceToken;
  }
  if (userInfo.deviceID) {
    delete userInfo.deviceID;
  }
  if (userInfo.deviceTypeId) {
    delete userInfo.deviceTypeId;
  }
  if (userInfo.status) {
    delete userInfo.status;
  }
  if (userInfo.updated) {
    delete userInfo.updated;
  }

  var respObj = {
    message: "User Updated Successfully",
    mediaPath: config.cfg.s3.mediaPath,
    result: userInfo,
  };
  return respObj;
}

module.exports = {
  createMapping,
  loginMapping,
  editMapping,
};
