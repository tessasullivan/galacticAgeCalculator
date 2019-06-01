
/* this approach doesn't work */

// import { Planet, Earth } from './../src/Planet';

// describe('Planet', function() {
//   let birthdate;
//   let lifeExpectancy;

//   beforeEach(function() {
//     birthdate = new Date('06/01/1949');
//     lifeExpectancy = 79;
//   });

//   it('should construct Earth based on birthdate and life expectancy', function() {

//     let planetCalculator = new Earth(birthdate, lifeExpectancy);
//     expect(planetCalculator.birthdate).toEqual(birthdate);
//     expect(planetCalculator.lifeExpectancy).toEqual(79);
//   });

//   it('should calculate age on Earth', function() {
//     let planetCalculator = new Earth(birthdate, lifeExpectancy);
//     expect(planetCalculator.calculateAge()).toEqual(70);
//   });


  // it('should construct Planet based on birthdate, life expectancy, and planet', function() {
  //   let planet = 'Earth';
  //   let planetCalculator = new Earth(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.birthdate).toEqual(birthdate);
  //   expect(planetCalculator.lifeExpectancy).toEqual(79);
  //   expect(planetCalculator.planet).toEqual('Earth');
  // });
  // it('should calculate age on Earth', function() {
  //   let planet = 'Earth';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()).toEqual(70);
  // });

  // it('should calculate life expectancy on Earth', function() {
  //   let planet = 'Earth';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.determineLifeExpectancy()).toEqual(true);
  // });

  // it('should make a statement on life expectancy on Mercury when age is less than life expectancy', function() {
  //   let planet = 'Mercury';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 329 years.`);
  // });

  // it('should make a statement on life expectancy on Mercury when age is more than life expectancy', function() {
  //   let planet = 'Mercury';
  //   let age = 82;
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`You have lived 12 years past life expectancy on ${planet}.`);
  // });
  // it('should calculate life expectancy on Mercury', function() {
  //   let planet = 'Mercury';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[1]).toEqual(329);
  // });

  // it('should make a statement on life expectancy on Mercury when age is less than life expectancy', function() {
  //   let planet = 'Mercury';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 329 years.`);
  // });

  // it('should make a statement on life expectancy on Mercury when age is more than life expectancy', function() {
  //   let planet = 'Mercury';
  //   let age = 82;
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`You have lived 12 years past life expectancy on ${planet}.`);
  // });
  // it('should calculate age on Venus', function() {
  //   let planet = 'Venus';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[0]).toEqual(54);
  // });

  // it('should calculate life expectancy on Venus', function() {
  //   let planet = 'Venus';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[1]).toEqual(127);
  // });

  // it('should make a statement on life expectancy on Venus when age is less than life expectancy', function() {
  //   let planet = 'Venus';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 127 years.`);
  // });

  // it('should make a statement on life expectancy on Venus when age is more than life expectancy', function() {
  //   let planet = 'Venus';
  //   let age = 82;
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`You have lived 4 years past life expectancy on ${planet}.`);
  // });

  // it('should calculate age on Mars', function() {
  //   let planet = 'Mars';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[0]).toEqual(18);
  // });

  // it('should calculate life expectancy on Mars', function() {
  //   let planet = 'Mars';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[1]).toEqual(42);
  // });

  // it('should make a statement on life expectancy on Mars when age is less than life expectancy', function() {
  //   let planet = 'Mars';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 42 years.`);
  // });

  // it('should make a statement on life expectancy on Mars when age is more than life expectancy', function() {
  //   let planet = 'Mars';
  //   let age = 82;
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`You have lived 1 year past life expectancy on ${planet}.`);
  // });

  // it('should calculate age on Jupiter', function() {
  //   let planet = 'Jupiter';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[0]).toEqual(2);
  // });

  // it('should calculate life expectancy on Jupiter', function() {
  //   let planet = 'Jupiter';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[1]).toEqual(6);
  // });

  // it('should make a statement on life expectancy on Jupiter when age is less than life expectancy', function() {
  //   let planet = 'Jupiter';
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 6 years.`);
  // });

  // it('should make a statement on life expectancy on Jupiter when age is more than life expectancy', function() {
  //   let planet = 'Jupiter';
  //   let age = 82;
  //   let planetCalculator = new Planet(birthdate, lifeExpectancy, planet);
  //   expect(planetCalculator.calculateAge()[2]).toEqual(`You are the same age as your life expectancy on ${planet}.`);
  // });
// })