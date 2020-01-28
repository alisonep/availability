const mongoose = require('mongoose');
const db = require('./index.js');

const availableDogsSchema = new mongoose.Schema({
  breedKeys: Array,
  location: Number,
  imageURL: String,
  name: String
})

const AvailableDogs = mongoose.model('Dogs', availableDogsSchema);

module.exports = AvailableDogs;