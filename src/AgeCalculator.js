export class AgeCalculator {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  calculateAge() {
    let factor;
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
    return Math.round((this.age / factor * 100))/100;
  }
}