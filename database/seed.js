const db = require('./index.js');
const AvailableDogs = require('./availability.js');


//create array of Available Dogs
//there are up to 4 spots for dogs available on pets.com so I will generage 300 records


  //function to create array of breed keys
    //there are 100 records needed for breeds so the test so if making 300 every three will go up by 1 in their first breed
    //I will add two potential secondary breeds in this array to each dog (most will be multiple breeds) so they will randomly draw   from an array with numbers 1 - 120 where the last 20 spots are null so it is technically possible to get a pure-breed.
  
  //function to randomly create locations -- work with 
      //the first digit of zip codes cluster a few states so for now we can just use that first digit to judge distance. 5 digits
        //attempt to get a fair distribution from 0-9 for the first digit

  //url function
    //when AWS is set up have a base URL and change one of the last numbers on the URL
    //for now they will all use the same image url

  //


const seedSampleDogs = function() {
  AvailableDogs.create(sampleDogs)
    .then(() => db.dosconnect());
}

// seedSampleDogs();