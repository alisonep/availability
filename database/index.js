const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/breedAvailability', {}, (err) => {
  if (err) { throw err; };
  console.log('Availability Database connection was successful.')
});

module.exports = db;