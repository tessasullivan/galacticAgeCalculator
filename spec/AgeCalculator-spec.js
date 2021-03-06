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

  it('should calculate life expectancy on Mercury', function() {
    let planet = 'Mercury';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateLifeExpectancy()).toEqual(329.17);
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

  it('should calculate age on Earth when age 1 year more than life expectancy', function() {
    let today = new Date();
    let thisYear = today.getFullYear();
    birthdate.setFullYear(thisYear - lifeExpectancy - 1);
    let planet = 'Earth';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateAge()).toEqual(80);
  });

  it('should make a statement on life expectancy on Earth when age 1 year more than life expectancy', function() {
    let today = new Date();
    let thisYear = today.getFullYear();
    birthdate.setFullYear(thisYear - lifeExpectancy - 1);
    let planet = 'Earth';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`You have lived 1 year past life expectancy on ${planet}.`);
  });

  it('should calculate age on Venus', function() {
    let planet = 'Venus';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateAge()).toEqual(112.90);
  });

  it('should calculate life expectancy on Venus', function() {
    let planet = 'Venus';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateLifeExpectancy()).toEqual(127.42);
  });

  it('should make a statement on life expectancy on Venus when age is less than life expectancy', function() {
    let planet = 'Venus';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`Your life expectancy on ${planet} is 127.42 years.`);
  });

  it('should make a statement on life expectancy on Venus when age is more than life expectancy', function() {
    birthdate.setFullYear(1939);
    let planet = 'Venus';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`You have lived 1.61 years past life expectancy on ${planet}.`);
  });

  it('should make a statement on life expectancy on Venus when age same as life expectancy', function() {
    birthdate.setFullYear(1940);
    let planet = 'Venus';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`You are the same age as your life expectancy on ${planet}.`);
  });

  it('should calculate age on Mars', function() {
    let planet = 'Mars';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateAge()).toEqual(37.23);
  });

  it('should make a statement on life expectancy on Mars when age is less than life expectancy', function() {
    let planet = 'Mars';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`Your life expectancy on ${planet} is 42.02 years.`);
  });

  it('should calculate age on Jupiter', function() {
    let planet = 'Jupiter';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateAge()).toEqual(5.90);
  });

  it('should calculate life expectancy on Jupiter', function() {
    let planet = 'Jupiter';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.calculateLifeExpectancy()).toEqual(6.66);
  });

  it('should make a statement on life expectancy on Jupiter when age is less than life expectancy', function() {
    let planet = 'Jupiter';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`Your life expectancy on ${planet} is 6.66 years.`);
  });

  it('should make a statement on life expectancy on Jupiter when age is more than life expectancy', function() {
    birthdate.setFullYear(1939);
    let planet = 'Jupiter';
    let calculator = new AgeCalculator(birthdate, lifeExpectancy, planet);
    expect(calculator.determineLifeExpectancy()).toEqual(`You have lived 0.09 years past life expectancy on ${planet}.`);
  });
})