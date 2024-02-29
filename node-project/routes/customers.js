const { Customer, handleValidation } = require("../models/customer");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//handling get:

router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});
  
//handling post:
router.post("/", async (req, res) => {
  const { error } = handleValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
   await customer.save();
  res.send();
});

//handling put :
router.put("/:id", async (req, res) => {
  const { error } = handleValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      phone: req.body.phone,
      isGold: req.body.isGold,
    },
    { new: true }
  );
  if (!customer)
    return res.status(404).send("The customer with the given ID was not found");
  res.send(customer);
});

//handling Delete:
router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer)
    return res.status(404).send("The customer with the given ID was not found");
  res.send(customer);
});

//Get for given id:
router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer)
    return res.status(404).send("The customer with the given ID was not found");
  res.send(customer);
});

module.exports = router;
