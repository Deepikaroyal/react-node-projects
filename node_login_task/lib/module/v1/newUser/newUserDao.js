const newUserModel = require("./newUserModel");
const baseDao = require("../../../dao/baseDao");
const newUserDao = new baseDao(newUserModel);

function isEmailExist(params) {
  let query = {};
  query.email = params.email;
  return newUserDao.findOne(query);
}

function userSignup(params) {
  let newUser = new newUserModel(params);
  return newUserDao.save(newUser);
}

function getByKey(query) {
  return newUserDao.findOne(query);
}

function getAllUser() {
  return newUserDao.find();
}

function updateUser(query, update) {
  update.updated = new Date();
  let option = {};
  option.new = true;
  return newUserDao.findOneAndUpdate(query, update, option);
}

function deleteUser(_id) {
  let option = {};
  option.new = true;
return newUserDao.remove(_id,option);
}

module.exports = {
  isEmailExist,
  userSignup,
  getByKey,
  getAllUser,
  updateUser,
  deleteUser
};
