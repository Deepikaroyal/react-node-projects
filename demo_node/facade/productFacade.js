const _ = require("lodash");
const Product = require('../model/productModel');

const { json } = require("express");

async function addProduct(params) {
    let product = new Product(
        _.pick(params, ["name", "category", "price", "quantity", "createdAt"])
      );
      await product.save();
      return true;
}

async function getProduct(){
    try{
      let result =  Product.find();
      return result
    } catch(error) {
      return false 
    }
}

async function categoryGrouping(){
  try{
    let result  =  await Product.aggregate( [ 
      {
      $group: {
       _id: "$category",
       averagePrice: {
        $avg: { $toDouble: { $substr: ["$price", 1, -1] } }
       }
      }
    }
  ])
     return result
  } catch(error) {
    throw error
  }
}

async function sortProductByPrice(){
 try{
  let sortedProductList =  await Product.find().sort({price:-1})
  return sortedProductList
 } catch(error) {
  throw error
 }
}



module.exports = {
    addProduct,
    getProduct,
    categoryGrouping,
    sortProductByPrice
}