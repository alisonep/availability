//use two arrays and put them together (ie: Mister Spot, Prince Spike, etc.)


var dogTitle = ['Mister', 'Miss', 'Sir', 'Lady', 'Doctor', 'Master', 'Lord', 'Professor', 'Prince', 'Princess']

var dogNames = ['Ace', 'Buddy', 'Casey', 'Blue', 'Bear', 'Coco', 'Dexter', 'Jax', 'Jasper', 'Leo', 'Loki', 'Lucky', 'Henry', 'Micky', 'Oliver', 'Oreo', 'Zues', 'Sam', 'Sadie', 'Maggie', 'Daisy', 'Lily', 'Bailey', 'Trixie', 'Winnie', 'Zoey', 'Shelby', 'Sassy', 'Ruby', 'Riley']

var dogName = function() {
  var dogFullNames = [];

  for (var i = 0; i < dogTitle.length; i++) {
    for (var k = 0; k < dogNames.length; k++) {
      dogFullNames.push(dogTitle[i] + ' ' + dogNames[k]);
    }
  }

  return dogFullNames;
}

module.exports = dogName;