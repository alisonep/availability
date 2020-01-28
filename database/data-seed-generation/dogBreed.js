//there are 100 records needed for breeds so the test so if making 300 every three will go up by 1 in their first breed
    //I will add two potential secondary breeds in this array to each dog (most will be multiple breeds) so they will randomly draw   from an array with numbers 1 - 120 where the last 20 spots are null so it is technically possible to get a pure-breed.
    //(ie: [1, null, 45], [1, 33, 65], [1, null, null], [2, 4, 98]...etc)



//generates an array of up to 3 breeds for each of the dogs #s 0-299
var dogBreed = function() {

  var possibleBreeds = [];

    for (var i = 1; i < 121; i++) {
      if (i < 101) {
        possibleBreeds.push(i)
      } else {
        possibleBreeds.push(null);
      }
    }

  var dogbreeds = []

  for (var k = 0; k < 100; k++) {
    dogbreeds.push([possibleBreeds[k], possibleBreeds[Math.floor(Math.random() * 120)], possibleBreeds[Math.floor(Math.random() * 120)]]);
    dogbreeds.push([possibleBreeds[k], possibleBreeds[Math.floor(Math.random() * 120)], possibleBreeds[Math.floor(Math.random() * 120)]]);
    dogbreeds.push([possibleBreeds[k], possibleBreeds[Math.floor(Math.random() * 120)], possibleBreeds[Math.floor(Math.random() * 120)]]);
  }

  return dogbreeds;
}

module.exports = dogBreed;