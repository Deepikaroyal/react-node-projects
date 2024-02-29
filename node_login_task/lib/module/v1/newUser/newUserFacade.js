const customException = require("../../../customException");
const newUserService = require("./newUserService");
const newUserMapper = require("./newUserMapper");
const redisSession = require("../../../redisClient/session");
const appUtils = require("../../../appUtils");
const constant = require("../../../constant");
var ip = require("ip");
const { errorMonitor } = require("bunyan");

function signup(params) {
  return newUserService
    .isEmailExist(params)
    .then((result) => {
      if (result) {
        throw customException.alreadyRegistered();
      } else {
        return newUserService.userSignup(params);
      }
    })
    .then(function (newUser) {
      return newUserMapper.createMapping({ newUser: newUser });
    })
    .catch(function (err) {
      console.log(err);
      throw err;
    });
}

function newUserLogin(params) {
  return newUserService
    .isEmailExist(params)
    .then((result) => {
      if (result) {
        return newUserService.login(params);
      } else {
        throw customException.userNotFound();
      }
    })
    .then(function (response) {
      if (response) {
        this.user = response;
        let tokenObj = _buildUserTokenGenObj(response);
        let userObj = {
          userId: response._id.toString(),
          userObj: tokenObj,
          ip: params.clientIp ? params.clientIp : ip.address(),
        };
        return redisSession.create(userObj);
      } else {
        throw customException.incorrectPass();
      }
    })
    .then(function (response) {
      return newUserMapper.loginMapping({
        user: this.user,
        accessToken: response.token,
      });
    });
}

function getAllUser() {
  return newUserService.getAllUser();
}

function edit(params) {
  return newUserService.updateUser(params).then(function (newUser) {
    if (newUser) {
      return newUserMapper.editMapping({ newUser: newUser });
    } else {
      return false;
    }
  });
}

function changePassword(params) {
  return newUserService .getByKey({
      _id: params.user.userId,
      password: appUtils.createHashSHA256(params.oldPassword),
    })
    .then(function (result) {
      if (!result) {
        throw customException.getCustomErrorException(
          constant.MESSAGES.OLD_PASSWORD_MISMATCH
        )
      }  else{
         return newUserService.updatePassword({ _id: params.user.userId },{ password: appUtils.createHashSHA256(params.newPassword)});
    }
    })
    .then(function (result) {
      return newUserMapper.changePasswordMapper(result);
    })
    .catch(function (err) {
      throw err;
    });
}

function deleteUser(_id){
  return newUserService.removeUser(_id)
  .then(function (result) {
    return newUserMapper.deleteUserMapper(result);
  })
  .catch(function (err) {
    throw err;
  });
}

function resetPassword(params) {
  return newUserService.updatePassword({_id:params.user.userId},{password:appUtils.createHashSHA256(params.password)})
  .then(()=>{
    redisSession.expireByUserId(params.user.userId);
    return newUserMapper.resetMapper(params)
  })
  .catch(function (err){
    throw err;
  })
}

function _buildUserTokenGenObj(user) {
  var userObj = {};
  // userObj.deviceToken = user.deviceToken?user.deviceToken:null;
  // userObj.deviceTypeID = user.deviceTypeID?user.deviceTypeID:null;
  // userObj.deviceID = user.deviceID?user.deviceID:null;
  userObj.userId = user._id.toString();
  return userObj;
}

module.exports = {
  signup,
  newUserLogin,
  getAllUser,
  edit,
  changePassword,
  deleteUser,
  resetPassword
};
