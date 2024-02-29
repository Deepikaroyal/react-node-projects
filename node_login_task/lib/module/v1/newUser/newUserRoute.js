const router = require("express").Router();
const requestIp = require("request-ip");
const newUserFascade = require("./newUserFacade");
const middleware = require("../../../middleware");
const { sendSuccess, sendError } = require("../../../responseHandler");
const validation = require("./newUserValidators");
const { result } = require("lodash");

router
  .route("/signup")
  .post(
    [
      validation.signupValidator,
      middleware.multer.single("profileImage"),
      middleware.mediaUpload.uploadSingleMediaToS3("profile"),
    ],
    function (req, res) {
      let profileImage;
      let profileImageData;
      let { fName, lName, email, password, confrmPassword, dob, s3ImageData } =
        req.body;
      let { newUser } = req;
      if (s3ImageData) {
        profileImageData = s3ImageData;
        profileImage = s3ImageData.key;
      }
      newUserFascade
        .signup({
          newUser,
          fName,
          lName,
          email,
          password,
          confrmPassword,
          dob,
          s3ImageData,
        })
        .then(function (result) {
          return sendSuccess(res, result, req);
        })
        .catch(function (err) {
          return sendError(res, err, req);
        });
    }
  );

router.route("/login").post([validation.loginValidator], function (req, res) {
  let { email, password } = req.body;
  let clientIp = requestIp.getClientIp(req);
  newUserFascade
    .newUserLogin({ email, password, clientIp })
    .then(function (result) {
      return sendSuccess(res, result, req);
    })
    .catch(function (err) {
      return sendError(res, err, req);
    });
});

router.get("/", function (req, res) {
  newUserFascade
    .getAllUser()
    .then(function (result) {
      return sendSuccess(res, result, req);
    })
    .catch(function (err) {
      return sendError(res, err, req);
    });
});

router
  .route("/edit")
  .post(
    [middleware.authenticate.autntctTkn, validation.editValidator],
    function (req, res) {
      let { fName, lName, email, password, confrmPassword, dob } = req.body;
      let {user} = req;
      //console.log("@@@",req)
      newUserFascade
        .edit({ user, fName, lName, email, password, confrmPassword, dob })
        .then(function (result) {
          console.log("inside sucess", result);
          return sendSuccess(res, result, req);
        })
        .catch(function (err) {
          console.log("inside faliure", err);
          return sendError(res, err, req);
        });
    }
  );


  router.route('/changePassword')
  .post([middleware.authenticate.autntctTkn,validation.chgePaswrdValidator], function (req, res) {
    let {oldPassword, newPassword, confrmPassword,} = req.body;
    let {user}= req;
     newUserFascade.changePassword({oldPassword, newPassword, confrmPassword, user})
     .then(function (result) {
       return sendSuccess(res, result, req)
     })
     .catch( function (err) {
      return  sendError(res, err, req)
     })
  })

  router.route("/deleteUser")
    .delete([middleware.authenticate.autntctTkn], function (req, res) {
       let {user} = req
      let _id = user.userId;
        newUserFascade
          .deleteUser({ _id })
          .then(function (result) {
            return sendSuccess(res, result, req);
          })
          .catch(function (err) {
            return sendError(res, err, req);
          });
      }
    );
  

router.route('/reset')
.post([middleware.authenticate.autntctTkn, validation.resetValidator], function(req, res) {
  let{password} = req.body;
  let {user} = req;
  newUserFascade.resetPassword({password,user})
  .then(function (result) {
     return sendSuccess(res, result, req);
  })
  .catch(function (err) {
    return sendError(req, err, res);
  })
})

module.exports = router;
