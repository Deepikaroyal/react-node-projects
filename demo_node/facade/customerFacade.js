const _ = require("lodash");
const Customer = require('../model/customerModel')


async function addCustomer(params) {
    let customer = new Customer(
        _.pick(params, ["customerId", "name", "email", "address", "createdAt"])
      );
      await customer.save();
      return true;
}

async function getCustomer() {
    try {
      let result = Customer.find();
      return result;
    } catch (error) {
      return false;
    }
  }

async function groupCustomer(){
  try{
  let result = await Customer.aggregate([
    {
      $group: {
        _id:"$address",
         name: {$push:"$name"},
        customerId: {$push:"$customerId"}      }
    }
  ])
  return result;
  } catch(error){
    throw error;
  }
}

async function groupCustomerByOrderDate(){
try{
 let result  = await Customer.aggregate([
  {
    $group:{
      _id: "$createdAt",
      customerId: {$push:"$customerId"},
      name: {$push: "$name"}
      
    }
  }
 ])
 return result;
} catch(error){
  throw error;
}
}

module.exports = {
    addCustomer,
    getCustomer,
    groupCustomer,
    groupCustomerByOrderDate
}
