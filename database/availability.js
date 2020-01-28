const mongoose = require('mongoose');
const db = require('./index.js');

const availableDogsSchema = new mongoose.Schema({
  breedKeys: Array,
  location: String,
  imageURL: String,
  name: String
})

const AvailableDogs = mongoose.model('Dogs', availableDogsSchema);

module.exports = AvailableDogs;