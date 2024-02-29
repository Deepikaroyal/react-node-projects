const mongoose = require('mongoose');
var User
const  userSchema = new mongoose.Schema ({
    name: {
       type: String,
    },
    email: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    age: {
        type: String,
    },
    password: {
        type: String
    }
});

 User =module.exports =  mongoose.model('user',userSchema);
// exports.User = User