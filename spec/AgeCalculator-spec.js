import { AgeCalculator } from './../src/AgeCalculator.js';

describe('AgeCalculator', function() {
  let birthdate;
  let lifeExpectancy;

  beforeEach(function() {
    birthdate = new Date('06/01/1949');
    lifeExpectancy = 79;
  });

  it('should construct AgeCalculator based on birthdate, life expectancy, and planet', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.birthdate).toEqual(birthdate);
    expect(calculator.lifeExpectancy).toEqual(79);
    expect(calculator.planet).toEqual('Mercury');
  });

  it('should calculate age on Mercury', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateAge()).toEqual(291.67);
  });

  it('should make a statement on life expectancy on Mercury when age is less than life expectancy', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`Your life expectancy on ${planet} is 329.17 years.`);
  });

  it('should make a statement on life expectancy on Mercury when age is more than life expectancy', function() {
    
    birthdate.setFullYear(1932);
    let planet = 'Mercury';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`You have lived 33.33 years past life expectancy on ${planet}.`);
  });

  it('should make a statement on life expectancy on Mercury when age same as life expectancy', function() {
    birthdate.setFullYear(1940);
    let planet = 'Mercury';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`You are the same age as your life expectancy on ${planet}.`);
  });
  
//   it('should calculate age on Venus', function() {
//     let planet = 'Venus';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[0]).toEqual(54);
//   });

//   it('should calculate life expectancy on Venus', function() {
//     let planet = 'Venus';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[1]).toEqual(127);
//   });

//   it('should make a statement on life expectancy on Venus when age is less than life expectancy', function() {
//     let planet = 'Venus';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 127 years.`);
//   });

//   it('should make a statement on life expectancy on Venus when age is more than life expectancy', function() {
//     let planet = 'Venus';
//     let age = 82;
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[2]).toEqual(`You have lived 4 years past life expectancy on ${planet}.`);
//   });

//   it('should calculate age on Mars', function() {
//     let planet = 'Mars';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[0]).toEqual(18);
//   });

//   it('should calculate life expectancy on Mars', function() {
//     let planet = 'Mars';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[1]).toEqual(42);
//   });

//   it('should make a statement on life expectancy on Mars when age is less than life expectancy', function() {
//     let planet = 'Mars';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 42 years.`);
//   });

//   it('should make a statement on life expectancy on Mars when age is more than life expectancy', function() {
//     let planet = 'Mars';
//     let age = 82;
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[2]).toEqual(`You have lived 1 year past life expectancy on ${planet}.`);
//   });

//   it('should calculate age on Jupiter', function() {
//     let planet = 'Jupiter';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[0]).toEqual(2);
//   });

//   it('should calculate life expectancy on Jupiter', function() {
//     let planet = 'Jupiter';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[1]).toEqual(6);
//   });

//   it('should make a statement on life expectancy on Jupiter when age is less than life expectancy', function() {
//     let planet = 'Jupiter';
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 6 years.`);
//   });

//   it('should make a statement on life expectancy on Jupiter when age is more than life expectancy', function() {
//     let planet = 'Jupiter';
//     let age = 82;
//     let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
//     expect(calculator.calculateAge()[2]).toEqual(`You are the same age as your life expectancy on ${planet}.`);
//   });
})