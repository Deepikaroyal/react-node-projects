const _ = require("lodash");
const Transcation = require('../model/transcationModel')
const Account = require('../model/accountModel');
const mongoose  = require("mongoose");

async function addTranscation(params) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const {senderAccount, receiverAccount, amount, status} = params;

    // Get sender and receiver accounts
    const senderAccountDoc = await Account.findOne({accountNumber: senderAccount}).session(session);
    const receiverAccountDoc = await Account.findOne({accountNumber: receiverAccount}).session(session);

    // Check sender account balance
    if (senderAccountDoc.balance < amount) {
      throw new Error('Insufficient balance');
    }

    // Perform money transfer
    senderAccountDoc.balance -= amount;
    receiverAccountDoc.balance += amount;

    // Save updated accounts
    await senderAccountDoc.save({session});
    await receiverAccountDoc.save({session});

    // Create transaction record
    const newTransaction = new Transaction({
      senderAccount: senderAccountDoc._id,
      receiverAccount: receiverAccountDoc._id,
      amount: amount,
      status: status,
    });
    await newTransaction.save({session});

    await session.commitTransaction();
    session.endSession();

    console.log('Money transfer successful');
    return true;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log('Money transfer aborted:', error);
    return false;
  }
}

module.exports = {
  addTranscation,
};




module.exports = {
    addTranscation,

}
