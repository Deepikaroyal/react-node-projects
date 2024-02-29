"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
// Load user service
var lodash = require("lodash");
var Promise = require("bluebird");
var vCardsJS = require("vcards-js");
//========================== Load internal modules ====================
const newUserService = require("./newUserService");
const newUserMapper = require("./newUserMapper");

const appUtils = require("../../../appUtils");
const redisSession = require("../../../redisClient/session");
const customException = require("../../../customException");
const emailService = require("../../../service/sendgrid_email");
const constant = require("../../../constant");
const config = require("../../../config");
const { CognitoIdentityServiceProvider } = require("aws-sdk");

//========================== Load Modules End ==============================================

function create(params) {
  return newUserService
    .isEmailExist(params)
    .then((result) => {
      if (result) {
        throw customException.alreadyRegistered();
      } else {
        return newUserService.createUser(params).then((result) => {
          return newUserMapper.createMapping(result);
        });
      }
    })
    .catch(function (err) {
      throw err;
    });
}

// function userLogin(params) {
//   let user;
//   // console.log(params,"-----------------i am inside newuserfascade")
//   return newUserService
//     .isEmailExist(params)
//     .then(function (isExist) {
//       // console.log('i am inside beforeif',isExist);
//       //this.isExist = isExist;
//       if (isExist) {
//         // console.log('i am inside if');
//         return newUserService.login(params);
//       } else {
//         // console.log('i am inside else');
//         throw customException.userNotFound();
//       }
//     })
//     .then(function (response) {
//       if (response) {
//         // console.log(response, "---------response");
//          user = response;
//         let tokenObj = _buildUserTokenGenObj(response);
//         // console.log(tokenObj, "-----------tokenObj");
//         let userObj = {
//           userId: response._id.toString(),
//           userObj: tokenObj,
//           ip: params.clientIp ? params.clientIp : ip.address(),
//           // expTime : 60000
//         };
//         // console.log(userObj, "---------userObj");
//         return redisSession.create(userObj);
//       } else {
//         throw customException.incorrectPass();
//       }
//     })
//     .then(function (response) {
//       // console.log(response, "----------response");
//       // console.log(user, "---------user");
//       return newUserMapper.loginMapping({user : user,accessToken: response.token});
//     });
// }

function userLogin(params) {
  let user;
  return newUserService
    .isEmailExist(params)
    .then((isExist) => {
      if (isExist) {
        return newUserService.login(params);
      } else {
        throw customException.userNotFound;
      }
    })
    .then((result) => {
      if (result) {
        user = result
        let tokenObj = _buildUserTokenGenObj(result);
        let userObj = {
          userId: result._id.toString(),
          userObj: tokenObj,
          ip: params.clientIp ? params.clientIp : ip.address(),
        };
        return redisSession.create(userObj);
      } else {
        throw customException.incorrectPass;
      }
    })
    .then((result) => {
      return newUserMapper.loginMapping({user:user, accessToken : result.token});
    });
}

function edit(params) {
  return newUserService
    .isEmailExist(params)
    .then(function (result) {
      if (result) {
        throw customException.alreadyRegistered();
      }else{
      return newUserService.updateUser(params);
    }
    })
    .bind({})
    .then(function (newUser) {
      return newUserMapper.editMapping({ newUser: newUser });
    })
    .catch(function (err) {
      throw err;
    });
}

function _buildUserTokenGenObj(user) {
  var userObj = {};
  // userObj.deviceToken = user.deviceToken ? user.deviceToken : null;
  // userObj.deviceTypeID = user.deviceTypeID ? user.deviceTypeID : null;
  // userObj.deviceID = user.deviceID ? user.deviceID : null;
  userObj.userId = user._id.toString();
  // userObj.userType = user.userType;
  // userObj.status = user.status;
  return userObj;
}

module.exports = {
  create,
  userLogin,
  edit,
};
