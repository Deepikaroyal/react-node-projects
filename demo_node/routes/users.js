var express = require('express');
var router = express.Router();
const userFacade = require('../facade/userFacade');
const validators = require('../middleware/userValidation');
const authToken =  require ('../middleware/authenticate');
// Temporary directory to store uploaded files
const multer = require('multer');
const upload = multer({ dest: 'temp/' }); 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/getUser', function (req, res) {
  userFacade.getAllUser()
  .then(function (result){
    res.status(200).send(result)
  })
  .catch(function(){
    res.status(400).send("unable to find any user")
  })
})


/* CREATE new  users. */
router.route('/createUser')
.post([validators.validateUserSignup], function (req, res){
  let { name,email, phoneNo, password,age} = req.body;
 userFacade.create({name, email,phoneNo,password,age})
 .then( function (result) {
  res.status(200).send("user created successfully...")
 })
.catch( function(err) {
  res.status(400).send({ error: err.message || "Unable to create new user" });
})
})


/* Login user. */
router.route('/login')
.post([validators.loginValidator], function (req,res) {
  let {email, password} = req. body;
  userFacade.login({email, password})
  .then(function(result) {
    res.status(200).send(result)
  })
  .catch(function(err) {
    res.status(400).send(err)
  })
})


/* EDIT user listing. */
router.route('/editUser').put([validators.editValidator,authToken.verifyToken], function (req, res) {
  let { _id } = req.body;
  let id = { _id };
  let { name, email, phoneNo } = req.body;
  userFacade
    .edit({ id, name, email, phoneNo })
    .then(function (result) {
      res.status(200).send("user detail edited successfully...");
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
});


/* UPLOAD user profile image. */
router.route('/upload/:_id')
.post([authToken.verifyToken, upload.single('profile')], function(req, res) {
  const userId = req.params._id;
  const profileImage = req.file
  userFacade.upload(userId,profileImage)
  .then(function(){
    res.status(200).send("user profile image uploaded  successfully...")
    return;
  })
  .catch(function(error){
    res.status(400).send("unable to upload user profile image..")
  })
})


/* UPLOAD user compress profile can be used as thumbnail.(pipeline practice) */
router.route('/uploadThumbnail/:_id')
.post([authToken.verifyToken, upload.single('thumbnail')], function(req, res) {
  const userId = req.params._id;
  const profileImage = req.file
  userFacade.uploadThumbnail(userId,profileImage)
  .then(function(){
    res.status(200).send("user thumbnail image uploaded  successfully...")
    return;
  })
  .catch(function(error){
    res.status(400).send("unable to upload user thumbnail image..")
  })
})


/* get UPLOADED profile image of  user. */
router.route('/getProfile/:_id')
.get([authToken.verifyToken], function(req, res) {
  const userId = req.params._id;
  userFacade.getProfile(userId)
  .then(function(result){
    res.status(200).send(result)
    return;
  })
 .catch(function(){
  res.status(400).send("unable to get  user profile image..")
 })
})


/* UPLOAD user multiple  posts . */
router.route('/uploadPosts/:_id')
.post([authToken.verifyToken, upload.array('posts',4)], function(req, res) {
  const userId = req.params._id;
  const profileImages = req.files
  userFacade.uploadPosts(userId,profileImages)
  .then(function(){
    res.status(200).send("user posts  uploaded  successfully...")
    return;
  })
  .catch(function(error){
    res.status(400).send("unable to upload user posts.."+ error.message)
  })
})


/* UPLOAD userInfo csv file in db  . */
router.post('/uploadCSV', function(req, res) {
  const file = req.body.file
  userFacade.fileConvert(file)
  .then(function(){
    res.status(200).send("user deatils store in DB  successfully...")
    return;
  })
  .catch(function(error){
    res.status(400).send("Failed to store in DB  successfully.."+ error)
  })
})


/* DELETE exits user. */
router.route('/deleteUser')
.delete([authToken.verifyToken], function (req, res) {
  let {_id} = req.body;
  let id = {_id}
  userFacade.deleteUser(id)
  .then (function(){
    res.status(200).send("user deleted successfully...")
    return;
  })
  .catch (function(error) {
    res.status(400).send("unable to find and delete user..")
  });
})

module.exports = router;
