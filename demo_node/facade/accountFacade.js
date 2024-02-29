const _ = require("lodash");
const Account = require('../model/accountModel')

async function addAccount(params) {
    let account = new Account(
        _.pick(params, ["accountNumber", "balance", "ownerName"])
      );
      await account.save();
      return true;
}

async function getAccount() {
    try {
      let result = Account.find();
      return result;
    } catch (error) {
      return false;
    }
  }

module.exports = {
    addAccount,
    getAccount
}
