"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");

var _ = require("lodash");
//========================== Load internal modules ====================
const newUserModel = require('./newUserModel');

// init newUser dao
let BaseDao = require('../../../dao/baseDao');
const newUserDao = new BaseDao(newUserModel );


//========================== Load Modules End ==============================================

function createUser(params) {
    var newUser =  new newUserModel(params);
    return newUserDao.save(newUser);
}
function updateUser(query,update) {
    console.log("&&&&&inside userdao")
    update.updated = new Date();   
    let option = {};
    option.new = true;
    return newUserDao.findOneAndUpdate(query, update, option);
}

function getByKey(query) {
    return newUserDao.findOne(query);
}

function isEmailExist(params) {
    let query ={}
        query.email = params.email;
        return newUserDao.findOne(query)
}

 //========================== Export Module Start ==============================


 module.exports = {
    isEmailExist,
    createUser,
    getByKey,
    updateUser
 }

 //========================== Export Module End ===============================