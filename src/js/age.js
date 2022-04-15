export default class Age {
  constructor(name, age, lifeExp) {
    this.name = name;
    this.age = age;
    this.lifeExp = lifeExp;
    this.lifeLeft = 0;
    this.lifePassed = 0;
    this.planet = {};
  }
  planetAge(planet) {
      if (planet === "mercury") {
        if (this.age > this.lifeExp) {
          this.age = (Math.floor((this.age/.24)));
          this.lifeExp = (Math.floor((this.lifeExp/.24)));
          this.lifePassed = (this.age - this.lifeExp);
        } else {
          this.age = (Math.floor((this.age/.24)));
          this.lifeExp = (Math.floor((this.lifeExp/.24)));
          this.lifeLeft += (this.lifeExp - this.age);
        }
    } else if (planet === "venus") {
        if (this.age > this.lifeExp) {
          this.age = (Math.floor((this.age/.61)));
          this.lifeExp = (Math.floor((this.lifeExp/.61)));
          this.lifePassed = (this.age - this.lifeExp);
        } else {
          this.age = (Math.floor((this.age/.61)));
          this.lifeExp = (Math.floor((this.lifeExp/.61)));
          this.lifeLeft += (this.lifeExp - this.age);
        }
    } else if (planet === "mars") {
        if (this.age > this.lifeExp) {
          this.age = (Math.floor((this.age/1.88)));
          this.lifeExp = (Math.floor((this.lifeExp/1.88)));
          this.lifePassed = (this.age - this.lifeExp);
        } else {
          this.age = (Math.floor((this.age/1.88)));
          this.lifeExp = (Math.floor((this.lifeExp/1.88)));
          this.lifeLeft += (this.lifeExp - this.age);
        }
    } else if (planet === "jupiter") {
        if (this.age > this.lifeExp) {
          this.age = (Math.floor((this.age/11.86)));
          this.lifeExp = (Math.floor((this.lifeExp/11.86)));
          this.lifePassed = (this.age - this.lifeExp);
        }
        else {
          this.age = (Math.floor((this.age/11.86)));
          this.lifeExp = (Math.floor((this.lifeExp/11.86)));
          this.lifeLeft += (this.lifeExp - this.age);
        }
    } else {
      return alert("please enter a planet");
    }
  }
}