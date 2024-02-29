var express = require("express");
var router = express.Router();
const validator = require("../middleware/accountValidation");
const accountFacade = require("../facade/accountFacade");

/*POST the account info */
router.post("/addAccount", [validator.validateAccount], function (req, res) {
  let { accountNumber, balance, ownerName } = req.body;
  accountFacade
    .addAccount({ accountNumber, balance, ownerName })
    .then(function () {
      res.status(200).send("account details saved successfully...");
    })
    .catch(function (err) {
      res
        .status(400)
        .send({ error: err.message || "Failed to add account deatils ..." });
    });
});

/*GET the account listing */
router.get("/getAccount", function (req, res) {
  accountFacade
    .getAccount()
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(function (err) {
      res
        .status(400)
        .send({ error: err.message || "Failed to get account details..." });
    });
});

module.exports = router;
