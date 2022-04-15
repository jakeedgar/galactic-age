export default class Age {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.planet = {};
  }


  planetAge(planet) {
    if (planet === "mercury") {
      this.age = (Math.floor((this.age/.24)));
      this.planet = "mercury"
    } else if (planet === "venus") {
      this.age = (Math.floor((this.age/.61)));
      this.planet = "venus"
    } else {
      return this.age;
    }
  }
}