var _ = require("lodash");
const config = require("../../../config");

function createMapping(params) {
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
    message: "User Created Successfully",
    mediaPath: config.cfg.s3.mediaPath,
    result: userInfo,
  };
  return respObj;
}

function loginMapping(params) {
  let userInfo = params.user;
  delete userInfo.password;
  var respObj = {
    message: "Successfully Login",
    accessToken: params.accessToken,
    mediaPath: config.cfg.s3.mediaPath,
    result: userInfo,
  };
  return respObj;
}

function editMapping(params) {
  let userInfo = params.newUser;
  var respObj = {
    message: "User Updated Successfully",
    result: userInfo,
  };
  return respObj;
}

function changePasswordMapper(result) {
  var respObj = {
    message: "Password has been changed successfully",
  };
  return respObj;
}

function deleteUserMapper(result) {
  var respObj = {
    message: "User delete Successfully",
  };
  return respObj;
}

function resetMapper(params) {
  var respObj = {
    message: "Password has been reset successfully",
  };
  return respObj;
}
module.exports = {
  createMapping,
  loginMapping,
  editMapping,
  changePasswordMapper,
  deleteUserMapper,
  resetMapper
};
