import { AgeCalculator } from './../src/AgeCalculator.js';

describe('AgeCalculator', function() {
  let age = 34;
  let lifeExpectancy = 79.4;
  let planet = 'Mercury';

  it('should construct AgeCalculator based on age, life expectancy, and planet', function() {
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.age).toEqual(34);
    expect(calculator.lifeExpectancy).toEqual(79.4);
    expect(calculator.planet).toEqual('Mercury');
  });

  it('should calculate age on Mercury', function() {
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[0]).toEqual(141.67);
  });

  it('should calculate life expectancy on Mercury', function() {
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[1]).toEqual(330.83);
  });
  it('should make a statement on life expectancy on Mercury when age is less than life expectancy', function() {
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 330.83 years.`);
  });
  
  // it('should calculate age on Mercury', function() {
  //   let calculator = new AgeCalculator(age, lifeExpectancy, planet);
  //   expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 330.83 years.`);
  // });

  // it('should calculate age on Venus', function() {

  //   let planet = 'Venus';
  //   let calculator = new AgeCalculator(age, planet);
  //   expect(calculator.calculateAge()).toEqual(54.84);
  // });
  // it('should calculate age on Mars', function() {
  //   let planet = 'Mars';
  //   let calculator = new AgeCalculator(age, planet);
  //   expect(calculator.calculateAge()).toEqual(18.09);
  // });
  // it('should calculate age on Jupiter', function() {
  //   let planet = 'Jupiter';
  //   let calculator = new AgeCalculator(age, planet);
  //   expect(calculator.calculateAge()).toEqual(2.87);
  // });
  // it('should determine life expectancy on Mars when younger than life expectancy on Earth', function() {
  //   let age = 34;
  //   let lifeExpectancyOnEarth = 79.4;
  //   let planet = 'Mercury';
  //   let calculator = new AgeCalculator(age, planet);
  //   expect(calculator.determinelifeExpectancy(lifeExpectancyOnEarth)).toEqual('Your life expectancy on Mercury is 330.83 years.')
  // });
})