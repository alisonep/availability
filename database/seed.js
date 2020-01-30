const db = require('./index.js');
const AvailableDogs = require('./availability.js');

const dogBreed = require('./data-seed-generation/dogBreed.js');
const dogLocation = require('./data-seed-generation/dogLocation.js');
const dogImage = require('./data-seed-generation/dogImage.js')
const dogName = require('./data-seed-generation/dogName.js')


//create array of Available Dogs
//there are up to 4 spots for dogs available on pets.com so I will generage 300 records


  //function to create array of breed keys
  var pedigrees = dogBreed();  

  //function to randomly create locations -- work with 
  var locations = dogLocation(); 

  //url function
  var dogURLs = dogImage();

  //name function
  var names = dogName();
    
//sampleDogs should be an array of 300 dog objects
var generateDogs = function() {
  var dogs = [];

  for (var i = 0; i < 300; i++) {
    var dog = {
      breedKeys: pedigrees[i],
      location: locations[i],
      imageURL: dogURLs[i],
      name: names[i]
    }
    dogs.push(dog);
  }
  return dogs;
}

var sampleDogs = generateDogs();
// console.log(sampleDogs);

const seedSampleDogs = function() {
  AvailableDogs.insertMany(sampleDogs)
    .then(() => db.dosconnect());
}

seedSampleDogs();