export class AgeCalculator {
  constructor(age, lifeExpectancy, planet) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planet = planet;
  }

  calculateAge() {
    let factor;
    let lifeExpectancyStatement;
    switch (this.planet) {
      case "Mercury":
        factor = .24;
        break;
      case "Venus":
        factor = .62;
        break;
      case "Mars":
        factor = 1.88;
        break;
      case "Jupiter":
        factor = 11.86;
        break;
    }
    let calculatedAge = Math.round((this.age / factor * 100))/100;
    let calculatedLifeExpectancy = Math.round((this.lifeExpectancy / factor * 100))/100;

    if (this.lifeExpectancy > this.age) {
      lifeExpectancyStatement = `Your life expectancy on ${this.planet} is ${calculatedLifeExpectancy} years.`;
    } else {
      lifeExpectancyStatement = `You have lived ${calculatedAge - calculatedLifeExpectancy} years past life expectancy on ${this.planet}.`;
    }

    return [calculatedAge, calculatedLifeExpectancy, lifeExpectancyStatement];
  }
}