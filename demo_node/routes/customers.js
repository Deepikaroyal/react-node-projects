var express  = require('express');
var router  =  express.Router();
const customerFacade = require('../facade/customerFacade')
const validator =  require('../middleware/customerValidation')


/*POST the order listing */
router.post('/addCustomer',[validator.validateCustomer], function(req, res) {
    let {customerId,name, email, address, createdAt} = req.body;
    customerFacade.addCustomer({customerId,name, email, address, createdAt})
    .then(function(){
        res.status(200).send('customer details saved successfully...')
    })
    .catch(function(){
        res.status(400).send({error: err.message || 'Failed to add customer deatils ...'})
    })
    })



/*GET the customer listing */
router.get('/getCustomer', function (req,res) {
    customerFacade.getCustomer()
    .then(function(result){
     res.status(200).send(result)
    })
    .catch(function(err){
       res.status(400).send({error: err.message || 'Failed to get customer details...'})
    })
})


/*GET the customer listing group my same address */
router.get("/customer-group-by-address", function(req, res) {
    customerFacade.groupCustomer()
    .then(function(result) {
     res.status(200).send(result)
    })
    .catch(function(err) {
        res.status(400).send({error: err.message || 'Failed to group and  get customer details...'})
    })
})


/*GET the customer listing group my same orderDate */
router.get("/customer-group-by-Orderdate",function(req,res) {
    customerFacade.groupCustomerByOrderDate()
    .then(function(result) {
        res.status(200).send(result)
       })
       .catch(function(err) {
           res.status(400).send({error: err.message || 'Failed to group and  get customer details...'})
       })
})

module.exports = router