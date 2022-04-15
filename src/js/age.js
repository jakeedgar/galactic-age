export default class Age {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.planet = {};
  }


  mercuryAge(planet) {
    if (planet === "mercury") {
      this.age = (Math.floor((this.age/.24)));
      this.planet = "mercury"
    } else {
      return this.age;
    }
  }
}