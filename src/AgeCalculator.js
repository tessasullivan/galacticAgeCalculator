export const ratio = {
  Mercury: .24, 
  Venus: .62,
  Earth: 1,
  Mars: 1.88,
  Jupiter: 11.86
};

export class AgeCalculator {
  constructor(birthdate, lifeExpectancy, planet) {
    this.birthdate = birthdate;
    this.lifeExpectancy = lifeExpectancy;
    this.planet = planet;
  }
  calculateAge() {
    let today = new Date();

    let age = today.getFullYear() - this.birthdate.getFullYear();
    if (today.getMonth() < this.birthdate.getMonth() || 
        today.getMonth() == this.birthdate.getMonth() && today.getDate() < this.birthdate.getDate()) {
          age --;
    }
    return parseFloat((age/ratio[this.planet]).toFixed(2));
  }

  calculateLifeExpectancy() {
    return parseFloat((this.lifeExpectancy / ratio[this.planet]).toFixed(2));

  }
  determineLifeExpectancy() {
    let lifeExpectancyStatement;
    let age = this.calculateAge();
    let calculatedLifeExpectancy = this.calculateLifeExpectancy();

    if (calculatedLifeExpectancy > age) {
      lifeExpectancyStatement = `Your life expectancy on ${this.planet} is ${calculatedLifeExpectancy} years.`;
    } else {
      let extraLife = parseFloat(((age - calculatedLifeExpectancy)).toFixed(2));
      let plural = '';
      if (extraLife === 0)
      {
        lifeExpectancyStatement = `You are the same age as your life expectancy on ${this.planet}.`;
      } else {
          if (extraLife !== 1) {
            plural = 's';
          }
        lifeExpectancyStatement = `You have lived ${extraLife} year${plural} past life expectancy on ${this.planet}.`;
      }
    }
    return lifeExpectancyStatement;
  }
}