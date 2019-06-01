export class AgeCalculator {
  constructor(age, lifeExpectancy, planet) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planet = planet;
  }

  calculateAge() {
    const ratio = {
      Mercury: .24, 
      Venus: .62,
      Mars: 1.88,
      Jupiter: 11.86
    };
    let lifeExpectancyStatement;

    let calculatedAge = Math.floor(this.age / ratio[this.planet]);
    let calculatedLifeExpectancy = Math.floor(this.lifeExpectancy / ratio[this.planet]);

    if (this.lifeExpectancy > this.age) {
      lifeExpectancyStatement = `Your life expectancy on ${this.planet} is ${calculatedLifeExpectancy} years.`;
    } else {
      let extraLife = Math.floor((this.age - this.lifeExpectancy) / ratio[this.planet]);
      let plural = '';
      
      if (extraLife !== 1){
        plural = 's';
      }
      if (extraLife === 0)
      {
        lifeExpectancyStatement = `You are the same age as your life expectancy on ${this.planet}.`;
      } else {
        lifeExpectancyStatement = `You have lived ${extraLife} year${plural} past life expectancy on ${this.planet}.`;
      }    
    }

    return [calculatedAge, calculatedLifeExpectancy, lifeExpectancyStatement];
  }
}