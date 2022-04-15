export default class Age {
  constructor(name, age, lifeExp) {
    this.name = name;
    this.age = age;
    this.lifeExp = lifeExp;
    this.planet = {};
  }


  planetAge(planet) {
    if (planet === "mercury") {
      this.age = (Math.floor((this.age/.24)));
      this.lifeExp = (Math.floor((this.lifeExp/.24)));
      this.planet = "mercury"
    } else if (planet === "venus") {
      this.age = (Math.floor((this.age/.61)));
      this.lifeExp = (Math.floor((this.lifeExp/.61)));
      this.planet = "venus"
    } else {
      return this.age;
    }
  }
}