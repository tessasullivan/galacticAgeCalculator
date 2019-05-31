import { AgeCalculator } from './../src/AgeCalculator.js';

describe('AgeCalculator', function() {
  it('should construct AgeCalculator based on age and planet', function() {
    let age = 34;
    let planet = 'Mercury';
    let calculator = new AgeCalculator(age, planet);
    expect(calculator.age).toEqual(34);
    expect(calculator.planet).toEqual('Mercury');
  });

  it('should calculate age on Mercury', function() {
    let age = 34;
    let planet = 'Mercury';
    let calculator = new AgeCalculator(age, planet);
    expect(calculator.calculateAge()).toEqual(141.67);
  });
  it('should calculate age on Venus', function() {
    let age = 34;
    let planet = 'Venus';
    let calculator = new AgeCalculator(age, planet);
    expect(calculator.calculateAge()).toEqual(54.84);
  });
  it('should calculate age on Mars', function() {
    let age = 34;
    let planet = 'Mars';
    let calculator = new AgeCalculator(age, planet);
    expect(calculator.calculateAge()).toEqual(18.09);
  });
  it('should calculate age on Jupiter', function() {
    let age = 34;
    let planet = 'Jupiter';
    let calculator = new AgeCalculator(age, planet);
    expect(calculator.calculateAge()).toEqual(2.87);
  });
})