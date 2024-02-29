const newUserDao = require("./newUserDao");
const appUtils = require("../../../appUtils");

function isEmailExist(params) {
  return newUserDao.isEmailExist(params);
}

function userSignup(params) {
  let securePassword = appUtils.createHashSHA256(params.password);
  let secureConfrmPassword = appUtils.createHashSHA256(params.confrmPassword);
  params.confrmPassword = secureConfrmPassword;
  params.password = securePassword;
  return newUserDao.userSignup(params);
}

function login(params) {
  let query = {};
  query.email = params.email;
  query.password = appUtils.createHashSHA256(params.password);
  return newUserDao.getByKey(query).then(function (result) {
    if (result) {
      return result;
    } else {
      return false;
    }
  });
}

function getAllUser() {
  return newUserDao.getAllUser().then(function (result) {
    if (result) {
      return result;
    } else {
      return false;
    }
  });
}

function updateUser(params) {
  let update = {};
  let query = { _id: params.user.userId };
  if (params.fName) {
    update.fName = params.fName;
  }
  if (params.lName) {
    update.lName = params.lName;
  }
  if (params.email) {
    update.email = params.email;
  }
  if (params.password) {
    update.password = params.password;
  }
  if (params.dob) {
    update.dob = params.dob;
  }
  return newUserDao.updateUser(query, update);
}

function getByKey (param) {
    return newUserDao.getByKey(param)
}

function updatePassword(query,update) {
 return newUserDao.updateUser(query,update)
}

function removeUser(_id) {
 return newUserDao.deleteUser(_id)
}

module.exports = {
  isEmailExist,
  userSignup,
  login,
  getAllUser,
  updateUser,
  getByKey,
  updatePassword,
  removeUser
};
