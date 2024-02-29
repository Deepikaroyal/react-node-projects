var mongoose = require('mongoose');
var constants = require('../../../constant');

var Schema = mongoose.Schema;
var newUser;
var NewUserSchema = ({

name: {
       type: String,
},
email: {
    type: String,
    index: true,
},
password: {
    type: String
},
// userType:{
//     type: Number,
//     default: 1, //1-user, 2-company,3-admin
// },
phoneNo: {
    type: String,
},

});

//Export user module
newUser = module.exports = mongoose.model(constants.DB_MODEL_REF.NEWUSER, NewUserSchema);

