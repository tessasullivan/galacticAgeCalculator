export class Planet {
  constructor(birthdate, lifeExpectancy) {
    this.birthdate = birthdate;
    this.lifeExpectancy = lifeExpectancy;
    // this.planet = planet;

    const ratio = {
      Mercury: .24, 
      Venus: .62,
      Earth: 1,
      Mars: 1.88,
      Jupiter: 11.86
    };
  }

  calculateAge() {
    let today = new Date();

    let age = today.getFullYear() - this.birthdate.getFullYear();
    if (today.getMonth() < this.birthdate.getMonth() || 
        today.getMonth() == this.birthdate.getMonth() && today.getDate() < this.birthdate.getDate()) {
          age --;
    }
    return age;
  }

  determineLifeExpectancy() {
    let lifeExpectancyStatement;

    let age = this.calculateAge();

    if (this.lifeExpectancy > age) {
      return true;
    } else {
      return false;
    }
    //   lifeExpectancyStatement = `Your life expectancy on ${this.planet} is ${calculatedLifeExpectancy} years.`;
    // } else {
    //   let extraLife = Math.floor((this.age - this.lifeExpectancy) / ratio[this.planet]);
    //   let plural = '';
      
    //   if (extraLife === 0)
    //   {
    //     lifeExpectancyStatement = `You are the same age as your life expectancy on ${this.planet}.`;
    //   } else {
    //     if (extraLife !== 1){
    //       plural = 's';
    //     }
    //     lifeExpectancyStatement = `You have lived ${extraLife} year${plural} past life expectancy on ${this.planet}.`;
    //   }    
    // }
    // return lifeExpectancyStatement;
  }
}

export class Earth extends Planet {
    constructor (birthdate, lifeExpectancy) {
      super(birthdate, lifeExpectancy);
    }
}