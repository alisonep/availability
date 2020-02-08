const mongoose = require('mongoose');
const db = require('./index.js');

const availableDogsSchema = new mongoose.Schema({
  breedKeys: [Number],
  location: String,
  imageURL: String,
  name: {
    type: String,
    unique: true
  }
})

const AvailableDogs = mongoose.model('Dogs', availableDogsSchema);

module.exports = AvailableDogs;