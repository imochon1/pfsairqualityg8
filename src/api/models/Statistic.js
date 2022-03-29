const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatisticSchema = new Schema({
});


const Statistic = mongoose.model("Statistic", StatisticSchema); // Statistic

module.exports = Statistic;
