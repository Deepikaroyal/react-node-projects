const _ = require("lodash");
const Order = require("../model/orderModel");
const Customer = require("../model/customerModel");
const Product = require("../model/productModel");



async function addOrder(params) {
  let order = new Order(
    _.pick(params, [
      "orderId",
      "customerId",
      "products",
      "totalAmount",
      "orderDate",
    ])
  );
  await order.save();
  return true;
}

async function getOrder() {
  try {
    let result = Order.find().explain("executionStats")
    return result
  } catch (error) {
    return false;
  }
}

async function getOrderWithCustomer() {
  try {
    let orders = await Order.find();
    let customerId = orders.map((item) => item.customerId);
    let customers = await Customer.find({ customerId: { $in: customerId } })

    let ordersWithCustomerInfo = orders.map((order) => {
      let customerInfo = customers.find(
        (customer) => customer.customerId === order.customerId
      );
      if (customerInfo) {
        return {
          ...order.toObject(),
          customerInfo: _.omit(customerInfo.toObject(), ["_id", "customerId"]),
        };
      } else {
        return order.toObject();
      }
    });

    return ordersWithCustomerInfo;
  } catch (error) {
    throw error;
  }
}

async function filterOrderByDate() {
  try {
    let filteredOrder = await Order.aggregate([
      {
        $unwind: "$products",
      },
      {
        $group: {
          _id: "$orderDate",
          products: {
            $addToSet: "$products",
          },
        },
      },
    ]);
    return filteredOrder;
  } catch (error) {
    return error;
  }
}

async function totalRevenue() {
  try {
    let result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: { $toDouble: { $substr: ["$totalAmount", 1, -1] } },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);
    return result[0];
  } catch (error) {
    throw error;
  }
}

async function orderCount() {
  try {
    let result = await Order.aggregate([
      {
        $group: {
          _id: "$orderDate",
          totalOrder: {
            $count: {},
          },
        },
      },
      {
        $sort: {
          totalOrder: -1,
        },
      },
    ]);
    return result;
  } catch (error) {
    throw error;
  }
}

async function minMaxorder() {
  try {
    let result = await Order.aggregate([
      {
        $group: {
          _id: "$orderDate",
          totalOrderCount: { $count: {} },
        },
      },
      {
        $sort: {
          totalOrderCount: -1,
        },
      },
      {
        $group: {
          _id: null,
          maxOrder: {
            $first: {
              date: "$_id",
              orderCount: "$totalOrderCount",
            },
          },
          minOrder: {
            $last: {
              date: "$_id",
              orderCount: "$totalOrderCount",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          maxOrder: 1,
          minOrder: 1,
        },
      },
    ]);

    return result;
  } catch (error) {
    throw error;
  }
}

async function secoundMinorder() {
  try {
    let result = await Order.aggregate([
      {
        $group: {
          _id: "$orderDate",
          totalOrderCount: { $count: {} },
        },
      },
      {
        $sort: {
          totalOrderCount: 1,
        },
      },
      {
        $skip:1
      },
     {
      $limit:1
     },
      {
        $project: {
          _id: 0,
          orderDate: "$_id",
          totalOrderCount: 1,
        },
      },
    ]);

    return result;
  } catch (error) {
    throw error;
  }
}

async function getAllCollectionInfo(){
  console.time('Pipeline Execution Time');
  try{
   let result =  await Order.aggregate([
    {
    $lookup: {
      from: 'products',
      localField: 'products',
      foreignField:'name',
      as: 'orderProducts'  
    }
    },
    {
      $lookup:{
        from:'customers',
        localField: 'customerId',
        foreignField: 'customerId',
        as:'customer'
      }
    }
   ])
   console.timeEnd('Pipeline Execution Time');
   return result;
  }catch(error){
   throw error 
  }
}

async function getProductOrderInfo(){
  const start = performance.now();
  try{
   let result = await Order.aggregate([
    {
      $lookup: {
        from: 'products',
        let: { productIds: '$products' },
        pipeline: [
          {
            $match: {
              $expr: { $in: ['$name', '$$productIds'] },
            },
          },
          {
            $project: {
              _id: 1,
              name: 1,
              category: 1,
              price: 1,
            },
          },
        ],
        as: 'orderedProducts',
      },
    },
  ]).exec();  
  const end = performance.now();
  const executionTime = end - start;
  console.log(`@@@Execution time: ${executionTime} milliseconds`)
  return result
  } catch(error){
    throw error
  }
}

module.exports = {
  addOrder,
  getOrder,
  getOrderWithCustomer,
  filterOrderByDate,
  totalRevenue,
  orderCount,
  minMaxorder,
  secoundMinorder,
  getAllCollectionInfo,
  getProductOrderInfo
};
