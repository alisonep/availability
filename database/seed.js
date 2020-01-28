const db = require('./index.js');
const AvailableDogs = require('./availability.js');

const dogBreed = require('./data-seed-generation/dogBreed');
const dogLocation = require('./data-seed-generation/dogLocation');


//create array of Available Dogs
//there are up to 4 spots for dogs available on pets.com so I will generage 300 records


  //function to create array of breed keys
  var pedigrees = dogBreed();  

  //function to randomly create locations -- work with 
  var locations = dogLocation(); 

  //url function
    

  //name function
    


const seedSampleDogs = function() {
  AvailableDogs.create(sampleDogs)
    .then(() => db.dosconnect());
}

// seedSampleDogs();