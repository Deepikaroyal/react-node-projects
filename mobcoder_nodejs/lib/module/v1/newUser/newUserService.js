"use strict";

//========================== Load Modules Start =======================
const appUtils      = require("../../../appUtils");
const customException = require("../../../customException");
//========================== Load internal modules ====================
const newUserDao = require('./newUserDao');

//========================== Load Modules End ==============================================

function login(params) {
  let query = {};
  query.email = params.email;
  return newUserDao.getByKey(query)
  .then(function (result) {
    if (result) {
      return result;
    } else {
      return false;
    }
  });
}

function createUser(params) {
    return newUserDao.createUser(params)
}

function isEmailExist(params) {
    return newUserDao.isEmailExist(params)
}

function updateUser(params) {
  console.log("inside service",params)
    let update={};
    let query={_id:params.user.userId};
    if(params.name){
        update.name=params.name;
    }
    if(params.email){
        update.email=params.email;
    }
    if(params.password){
        update.password=params.password;
    }
    if(params.phoneNo){
    update.phoneNo=params.phoneNo;
    }
    console.log("88888",query)
    return newUserDao.updateUser(query,update)
}

//========================== Export Module Start ==============================

module.exports = {
    isEmailExist,
    createUser,
    login,
    updateUser
}

//========================== Export Module End ===============================