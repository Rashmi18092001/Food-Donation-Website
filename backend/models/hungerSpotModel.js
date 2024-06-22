const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// hunger spot schema
const HungerSpotSchema = new Schema({
  name : String,
  address : String,
  contact : Number
});

module.exports = HungerSpot = mongoose.model('HungerSpotDetails', HUngerSpotSchema)