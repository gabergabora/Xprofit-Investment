const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const depositSchema = new Schema({
    userId: String,
    amount: String,
    plan: String,
    status: String,
    startDate: Date,
    endDate: Date
});

const Deposit = new mongoose.model("Deposit", depositSchema);

module.exports = Deposit;