//the first digit of zip codes cluster a few states so for now we can just use that first digit to judge distance. 5 digits
        //attempt to get a fair distribution from 0-9 for the first digit

var dogLocation = function() {

  var dogLocations = [];

  for (var i = 0; i < 300; i++) {
    dogLocations.push(Math.floor(Math.random() * 10) + '1111');
  }

  return dogLocations;
}

module.exports = dogLocation;