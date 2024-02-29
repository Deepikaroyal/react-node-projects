var express =  require('express');
var router =  express.Router();
const validator = require('../middleware/transcationValidation');
const transcationFacade = require('../facade/transcationFacade')


/*POST the account info */
router.post('/addTranscation',[validator.validateTranscation], function(req, res) {
 let {senderAccount,receiverAccount,amount} =req.body
 transcationFacade.addTranscation({senderAccount,receiverAccount,amount})
.then( function() {
    res.status(200).send('account details saved successfully...')

}).catch( function (err) {
    res.status(400).send({error: err.message || 'Failed to add transcation deatils ...'})
})
})

/*GET the account listing */
router.get('/getTranscation', function (req,res) {
    transcationFacade.getTranscation()
    .then(function(result){
     res.status(200).send(result)
    })
    .catch(function(err){
       res.status(400).send({error: err.message || 'Failed to get transcation details...'})
    })
})


module.exports = router