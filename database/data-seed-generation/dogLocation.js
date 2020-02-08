//the first digit of zip codes cluster a few states so for now we can just use that first digit to judge distance. 5 digits
        //attempt to get a fair distribution from 0-9 for the first digit

var dogLocation = function() {

  var dogLocations = [];

  for (var i = 0; i < 300; i++) {

    //latitude 37 to 39.99999
    var SFlatitude = `${Math.floor(Math.random() * 2)+3}${Math.floor(Math.random() * 3)+7}.${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    //longitude -121 to -123
    var SFlongitude = `-12${Math.floor(Math.random() * 3)+1}.${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

    //latitude 40 to 42
    var NJlatitude = `4${Math.floor(Math.random() * 3)}.${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    //longitude -74 to -77
    var NJlongitude = `-7${Math.floor(Math.random() * 4)+4}.${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

    if (i % 2 === 0) {
      dogLocations.push(SFlatitude + '/' + SFlongitude);
    } else {
      dogLocations.push(NJlatitude + '/' + NJlongitude);
    }
  }

  return dogLocations;
}

module.exports = dogLocation;