const db = require('./index.js');
const AvailableDogs = require('./availability.js');
const generateDogs = require('./data-seed-generation/generateDogs.js');

async function connectDatabase() {
  var database = await db;

  var sampleDogs = generateDogs();

  var seedSampleDogs = function() {
    AvailableDogs.insertMany(sampleDogs)
      .then(() => database.disconnect())
      .catch((err) => {
        console.log('err:', err)
      })
  }
  seedSampleDogs();
}

connectDatabase()