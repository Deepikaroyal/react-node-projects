const router = require('express').Router();
const requestIp = require('request-ip');
const resHndlr  = require('../../../responseHandler');
const middleware = require('../../../middleware');
const newUserFacade = require('./newUserFacade');
const validators = require('./newUserValidators');
const constant = require('../../../constant');

//creating new user:
router.post('/create',function (req, res){
let {name, email, password, phoneNo} = req.body;
let {newUser} = req;

newUserFacade.create({name, newUser,email,password,phoneNo})
.then( function(result){
    resHndlr.sendSuccess(res, result,req)
})
.catch( function(err){
    resHndlr.sendError(res, err, req)
})
})

//login for existing user:
router.route("/login")
    .post([validators.validateLogin], function (req, res) {
        let {email, password } = req.body;
        let clientIp = requestIp.getClientIp(req);
        newUserFacade.userLogin({ email, password,clientIp })
        .then(function (result) {
            resHndlr.sendSuccess(res, result,req);
        })
        .catch(function (err) {
            resHndlr.sendError(res, err,req);
        })
    });

//edit existing user:
router.route('/edit')
.post([middleware.authenticate.autntctTkn],function (req,res){
let {name, email, password, phoneNo} = req.body;
let {newUser} = req;
// console.log("=====",req,"(((((",newUser)
newUserFacade.edit({newUser,name, email, password, phoneNo})
.then(function (result){
    console.log("---inside success")
  resHndlr.sendSuccess(res, result, req);
}).catch(function (err){
    console.log("---inside failure")
   resHndlr.sendError(res, err, req)
})
});

//Delete user:
// router.route('/delete')
// .delete([middleware.authenticate.autntctTkn],function (req,res) {
//     let 
// })

module.exports = router;