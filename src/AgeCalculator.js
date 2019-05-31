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
    let calculatedAge = Math.floor(this.age / factor);
    let calculatedLifeExpectancy = Math.floor(this.lifeExpectancy / factor);

    if (this.lifeExpectancy > this.age) {
      lifeExpectancyStatement = `Your life expectancy on ${this.planet} is ${calculatedLifeExpectancy} years.`;
    } else {
      let extraLife = Math.floor((this.age - this.lifeExpectancy) / factor);
      let plural = '';
      if (extraLife !== 1){
        plural = 's';
      }
      lifeExpectancyStatement = `You have lived ${extraLife} year${plural} past life expectancy on ${this.planet}.`;
    }

    return [calculatedAge, calculatedLifeExpectancy, lifeExpectancyStatement];
  }
}