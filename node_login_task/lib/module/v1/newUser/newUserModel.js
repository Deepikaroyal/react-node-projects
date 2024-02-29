const mongoose  = require('mongoose');
const constants = require('../../../constant');
const Schema = mongoose.Schema;
var  newUser;
const newUserSchema = ({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        
    },
    email: {
        type: String,
        index: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confrmPassword: {
        type: String,
        required: true
    },
    dob: {
        type: String
    }

});

newUser = module.exports = mongoose.model(constants.DB_MODEL_REF.NEWUSER, newUserSchema)
