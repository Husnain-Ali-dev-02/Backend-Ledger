const accountModel = require("../models/account.model");
const mongoose = require("mongoose");

async function createAccountController(req, res) {
  try {
    const { currency } = req.body;
    const account = await accountModel.create({
      user: req.user._id,
      ...(currency && { currency }),
    });
    res.status(201).json({ account });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create account", error: err.message });
  }
}

async function getUserAccountsController(req, res) {
  try {
    const accounts = await accountModel.find({ user: req.user._id });
    res.status(200).json({ accounts });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch accounts", error: err.message });
  }
}

async function getAccountBalanceController(req, res) {
 try {
        const { accountId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(accountId)) {
            return res.status(400).json({ message: "Invalid account ID" });
        }

        const account = await accountModel.findOne({
           _id: accountId,
            user: req.user._id
        });

        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

       // TODO: Uncomment getBalance in account.model.js or implement balance logic here
        const balance = await account.getBalance();

        res.status(200).json({
            accountId: account._id,
            balance
        });
    } catch (err) {
        res.status(500).json({ message: "Failed to get balance", error: err.message });
}
}

module.exports = {
  createAccountController,
  getUserAccountsController,
  getAccountBalanceController,
};
