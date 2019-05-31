import { AgeCalculator } from './../src/AgeCalculator.js';

describe('AgeCalculator', function() {
  let age = 34;
  let lifeExpectancy = 79;

  it('should construct AgeCalculator based on age, life expectancy, and planet', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.age).toEqual(34);
    expect(calculator.lifeExpectancy).toEqual(79);
    expect(calculator.planet).toEqual('Mercury');
  });

  it('should calculate age on Mercury', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[0]).toEqual(141);
  });

  it('should calculate life expectancy on Mercury', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[1]).toEqual(329);
  });

  it('should make a statement on life expectancy on Mercury when age is less than life expectancy', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 329 years.`);
  });

  it('should make a statement on life expectancy on Mercury when age is more than life expectancy', function() {
    let planet = 'Mercury';
    let age = 82;
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[2]).toEqual(`You have lived 12 years past life expectancy on ${planet}.`);
  });

  it('should calculate age on Venus', function() {
    let planet = 'Venus';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[0]).toEqual(54);
  });

  it('should calculate life expectancy on Venus', function() {
    let planet = 'Venus';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[1]).toEqual(127);
  });

  it('should make a statement on life expectancy on Venus when age is less than life expectancy', function() {
    let planet = 'Venus';
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[2]).toEqual(`Your life expectancy on ${planet} is 127 years.`);
  });

  it('should make a statement on life expectancy on Venus when age is more than life expectancy', function() {
    let planet = 'Venus';
    let age = 82;
    let calculator = new AgeCalculator(age, lifeExpectancy, planet);
    expect(calculator.calculateAge()[2]).toEqual(`You have lived 4 years past life expectancy on ${planet}.`);
  });
})