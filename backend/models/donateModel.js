const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const DonateSchema = new Schema({
  name: String,
  address: String,
  contact: Number,
  foodDesc: String,
  quantity: Number,
  foodTime: String
});

module.exports = DonateData = mongoose.model('donateDetails', DonateSchema);
