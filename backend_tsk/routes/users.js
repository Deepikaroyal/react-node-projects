var express = require('express');
var router = express.Router();
const bnbFacade = require('../facade/bnbFacade')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// First Task:
router.get('/getBnbCount', function(req,res) {
  let {download} = req.body
  // let {country_code} = req.query;
 bnbFacade.getBnbCount({download},res)
 .then(function (result){ 
  res.status(200).send(result)
 }).catch(function(err){
  res.status(400).send({ error: err.message || "Unable to get data" });
 })
})

//Secound Task:
router.get('/listingsWithinRange', function(req, res) {
  let { latitude, longitude, range } = req.query;
  bnbFacade.listWithRange({ latitude, longitude, range })
  .then(function(result){
    res.status(200).send(result)
  }).catch(function(err) {
    res.status(400).send({ error: err.message || "Unable to get data" });
  })
})

// Third Task :
router.get('/getTopBnb', function(req,res) {
  // let {country_code} = req.query;
 bnbFacade.getTopBnb()
 .then(function (result){
  console.log("***************")
  res.status(200).send(result)
 }).catch(function(err){
  res.status(400).send({ error: err.message || "Unable to get data" });
 })
})
module.exports = router;
