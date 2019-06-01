export const ratio = {
  Mercury: .24, 
  Venus: .62,
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

  determineLifeExpectancy() {
    let lifeExpectancyStatement;
    let age = this.calculateAge();
    let calculatedLifeExpectancy = parseFloat((this.lifeExpectancy / ratio[this.planet]).toFixed(2));

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

  // calculateAge() {

  //   let lifeExpectancyStatement;

  //   let calculatedAge = Math.floor(this.age / ratio[this.planet]);
  //   let calculatedLifeExpectancy = Math.floor(this.lifeExpectancy / ratio[this.planet]);

  //   if (this.lifeExpectancy > this.age) {
  //     lifeExpectancyStatement = `Your life expectancy on ${this.planet} is ${calculatedLifeExpectancy} years.`;
  //   } else {
  //     let extraLife = Math.floor((this.age - this.lifeExpectancy) / ratio[this.planet]);
  //     let plural = '';
      
  //     if (extraLife === 0)
  //     {
  //       lifeExpectancyStatement = `You are the same age as your life expectancy on ${this.planet}.`;
  //     } else {
  //       if (extraLife !== 1){
  //         plural = 's';
  //       }
  //       lifeExpectancyStatement = `You have lived ${extraLife} year${plural} past life expectancy on ${this.planet}.`;
  //     }    
  //   }

  //   return [calculatedAge, calculatedLifeExpectancy, lifeExpectancyStatement];
  // }
}