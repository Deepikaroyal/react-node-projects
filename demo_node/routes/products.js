var express = require("express");
var router = express.Router();
const productFacade = require("../facade/productFacade");
const validator = require("../middleware/productValidation");

/*POST the product listing */
router.post("/addProduct", [validator.validateProduct], function (req, res) {
  let { name, category, price, quantity, createdAt } = req.body;

  productFacade
    .addProduct({ name, category, price, quantity, createdAt })
    .then(function () {
      res.status(200).send("product details saved successfully...");
    })
    .catch(function (err) {
      res
        .status(400)
        .send({ error: err.message || "Failed to add product..." });
    });
});

/*GET the product listing */
router.get("/getProduct", function (req, res) {
  productFacade
    .getProduct()
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(function (err) {
      res
        .status(400)
        .send({ error: err.message || "Failed to get product..." });
    });
});


/*GET the product listing group by category */
router.get("/average-price-by-category", function (req, res) {
  productFacade
    .categoryGrouping()
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(function (err) {
      res
        .status(400)
        .send({ error: err.message || "Failed to get product..." });
    });
});


/*GET the product listing sort n decending order respective their price */
router.get("/sort-product-by-price", function(req, res) {
  productFacade.sortProductByPrice()
  .then(function(result){
  res.status(200).send(result);
  })
  .catch(function(err){
   res.status(400).send({ error: err.message || "Failed to sort and get product..." })
  })
})


module.exports = router;
