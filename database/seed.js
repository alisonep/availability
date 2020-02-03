const db = require('./index.js');
const AvailableDogs = require('./availability.js');
const generateDogs = require('./data-seed-generation/generateDogs.js');

var sampleDogs = generateDogs();
// console.log(sampleDogs);

const seedSampleDogs = function() {
  AvailableDogs.insertMany(sampleDogs)
    .then(() => db.disconnect());
}

seedSampleDogs();