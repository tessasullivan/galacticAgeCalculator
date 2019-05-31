import { AgeCalculator } from './../src/AgeCalculator.js';

describe('AgeCalculator', function() {
  it('should construct AgeCalculator based on time and planet', function() {
    let time = 1900;
    let planet = 'Mercury';
    let calculator = new AgeCalculator(time, planet);
    expect(calculator.time).toEqual(1900);
    expect(calculator.planet).toEqual('Mercury');
  });
})