const dogBreed = require('../database/data-seed-generation/dogBreed.js');
const dogLocation= require('../database/data-seed-generation/dogLocation.js');
const dogImage = require('../database/data-seed-generation/dogImage.js');
const dogName = require('../database/data-seed-generation/dogName.js');

//integration test
const generateDogs = require('../database/data-seed-generation/generateDogs.js');

test('dogBreed should output and array of 300 arrays of numbers', () => {
  const breeds = dogBreed();
  expect(breeds).toHaveLength(300);

  breeds.forEach((aDogsBreeds) => {
    expect(aDogsBreeds).toHaveLength(7);
    
    aDogsBreeds.forEach((breed) => {
      expect(typeof breed).toBe('number')
    })
  })

})

test('dogLocation should output and array of 300 strings of latitude and longitude', () => {
  const locations = dogLocation();
  expect(locations).toHaveLength(300);

  locations.forEach((location) => {
    var firstStringValue = location[0];
    var firstNumber = Number(firstStringValue);
    expect(typeof firstNumber).toBe('number');
    expect(location).toHaveLength(5);
    var string = firstNumber+'1111'
    expect(location).toMatch(new RegExp(`${string}`));
  })
})

test('dogImage should output and array of 300 strings of urls that end in a number', () => {
  const images = dogImage();
  expect(images).toHaveLength(300);

  images.forEach((image) => {
    expect(image.includes('http://availabledogphotos.s3.amazonaws.com/')).toBe(true);
    expect(image.includes('.jpg')).toBe(true);
    var num = image.replace('http://availabledogphotos.s3.amazonaws.com/', '');
    num = num.replace('.jpg', '');
    num = Number(num);
    expect(typeof num).toBe('number');
    expect(num).toBeGreaterThan(0);
    expect(num).toBeLessThanOrEqual(300);
  })
})

test('dogName should output and array of 300 strings', () => {
  const names = dogName();
  expect(names).toHaveLength(300);
  names.forEach((name) => {
    expect(typeof name).toBe('string');
  })
})

test('generateDogs should contain an array of 300 objects that have a breedKeys array, location, url, and name', () => {
  const dogs = generateDogs();
  expect(dogs).toHaveLength(300);
  dogs.forEach((dog) => {
    expect(dog).toHaveProperty('breedKeys');
    expect(Array.isArray(dog.breedKeys)).toBe(true)
    expect(dog.breedKeys).toHaveLength(3);
    expect(dog).toHaveProperty('location')
    expect(typeof dog.location).toBe('string');
    expect(dog).toHaveProperty('imageURL')
    expect(typeof dog.imageURL).toBe('string');
    expect(dog).toHaveProperty('name');
    expect(typeof dog.name).toBe('string');
  })
})