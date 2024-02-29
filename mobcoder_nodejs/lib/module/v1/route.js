var express     = require('express');
var router      = express.Router();
const userRoute     = require('./user/userRoute');
const newUserRoute  = require('./newUser/newUserRoute');

//========================== Export Module Start ==========================

//API version 1
router.use('/user', userRoute);
router.use('/newUser',newUserRoute);
module.exports = router;
//========================== Export Module End ============================