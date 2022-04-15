export default class Age {
  constructor(name, age, lifeExp) {
    this.name = name;
    this.age = age;
    this.lifeExp = lifeExp;
    this.lifeLeft = 0;
    this.planet = {};

  }


  planetAge(planet) {
    if (planet === "mercury") {
      this.age = (Math.floor((this.age/.24)));
      this.lifeExp = (Math.floor((this.lifeExp/.24)));
      this.planet = "mercury"
      this.lifeLeft += (this.lifeExp - this.age);
    } else if (planet === "venus") {
      this.age = (Math.floor((this.age/.61)));
      this.lifeExp = (Math.floor((this.lifeExp/.61)));
      this.planet = "venus"
    } else if (planet === "mars") {
      this.age = (Math.floor((this.age/1.88)));
      this.lifeExp = (Math.floor((this.lifeExp/1.88)));
      this.planet = "mars"
    } else if (planet === "jupiter") {
      this.age = (Math.floor((this.age/11.86)));
      this.lifeExp = (Math.floor((this.lifeExp/11.86)));
      this.planet = "jupiter"
    } else {
      return this.age;
    }
  }
}