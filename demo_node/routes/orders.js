var express = require("express");
var router = express.Router();
var orderFacade = require("../facade/orderFacade");
var validator = require("../middleware/orderValidation");

/*POST the order listing */
router.post("/addOrder", [validator.validateOrder], function (req, res) {
  let { orderId, customerId, products, totalAmount, orderDate } = req.body;
  orderFacade
    .addOrder({ orderId, customerId, products, totalAmount, orderDate })
    .then(function () {
      res.status(200).send("order details saved successfully...");
    })
    .catch(function () {
      res
        .status(400)
        .send({ error: err.message || "Failed to add order deatils ..." });
    });
});

/*GET the order listing */
router.get("/getOrder", function (req, res) {
  orderFacade
    .getOrder()
    .then(function (result) {
      console.log("^^^^^^^^^^^^^^",result)
      res.status(200).send(result);
    })
    .catch(function (err) {
      res
        .status(400)
        .send({ error: err.message || "Failed to get order deatils..." });
    });
});

/*GET the order listing with customer listing */
router.get("/orders-with-customer-info", function (req, res) {
  orderFacade
    .getOrderWithCustomer()
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(function (err) {
      res
        .status(400)
        .send({
          error:
            err.message ||
            "Failed to get order deatils with customer details...",
        });
    });
});


/*GET the order listing filter by date range */
router.get("/orders-filter-by-date-range", function (req, res) {
  orderFacade
    .filterOrderByDate()
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(function (err) {
      res
        .status(400)
        .send({
          error:
            err.message ||
            "Failed to filter order deatils by date range...",
        });
    });
});


/*GET the total order revenue from all orders */
router.get("/total-revenue", function(req,res) {
    orderFacade.totalRevenue()
    .then(function(result){
        res.status(200).send(result);
    })
    .catch(function(err) {
        res.status(400).status({ error: err.message || "Failed to get total revenue..." })
    })
})


/*GET the total order count on same date */
router.get("/orderCount", function(req,res) {
  orderFacade.orderCount()
  .then(function(result){
      res.status(200).send(result);
  })
  .catch(function(err) {
      res.status(400).status({ error: err.message || "Failed to group and get total count of orders..." })
  })
})


/*GET the min and max order with date */
router.get("/min-max-order", function(req,res) {
  orderFacade.minMaxorder()
  .then(function(result){
      res.status(200).send(result);
  })
  .catch(function(err) {
      res.status(400).status({ error: err.message || "Failed to group and get min amd max count of orders..." })
  })
})


/*GET the secound last  min and max order with date */
router.get("/Secoundlast-min-order", function(req,res) {
  orderFacade.secoundMinorder()
  .then(function(result){
      res.status(200).send(result);
  })
  .catch(function(err) {
      res.status(400).status({ error: err.message || "Failed to group and get secound last min order count on a date..." })
  })
})


/*GET the product with orders and customers Info related to order */
router.get("/product-order-customer-info", function(req, res) {
  orderFacade.getAllCollectionInfo()
  .then(function(result){
  res.status(200).send(result);
  })
  .catch(function(err){
   res.status(400).send({ error: err.message || "Failed to relate collection and get Info..." })
  })
})


/*GET the product with orders */
router.get("/product-order-info", function(req, res) {
  orderFacade.getProductOrderInfo()
  .then(function(result){
  res.status(200).send(result);
  })
  .catch(function(err){
   res.status(400).send({ error: err.message || "Failed to relate collection and get Info..." })
  })
})


module.exports = router;
