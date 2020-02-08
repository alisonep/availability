const dogBreed = require('./dogBreed.js');
const dogLocation = require('./dogLocation.js');
const dogImage = require('./dogImage.js')
const dogName = require('./dogName.js')


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

module.exports = generateDogs;