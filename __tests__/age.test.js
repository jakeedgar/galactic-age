import { exportAllDeclaration } from "@babel/types";
import Age from "../src/js/age";

describe('Age', () => {
  let reusableUser;
  let otherUser;
  let noPlanetUser;

  beforeEach(() => {
    reusableUser = new Age("Sam", 25, 75);
    otherUser = new Age("Nathan", 100, 75);
    noPlanetUser = new Age("baby", 0, 0)
  });

  test('should return the name and age of the user based on input', () => {
    expect(reusableUser.name).toEqual("Sam");
    expect(reusableUser.age).toEqual(25);
    expect(reusableUser.lifeExp).toEqual(75);
  });

  test("should return and modify the age of user on mercury based on user age input", () => {
    reusableUser.planetAge("mercury");
    expect(reusableUser.age).toEqual(104);
    expect(reusableUser.lifeExp).toEqual(312);
    expect(reusableUser.lifeLeft).toEqual(208);
  });

  test("should return and modify the age of user on venus based on user age input", () => {
    reusableUser.planetAge("venus");
    expect(reusableUser.age).toEqual(40);
    expect(reusableUser.lifeExp).toEqual(122);
    expect(reusableUser.lifeLeft).toEqual(82);
  });

  test("should return and modify the age of user on mars based on user age input", () => {
    reusableUser.planetAge("mars");
    expect(reusableUser.age).toEqual(13);
    expect(reusableUser.lifeExp).toEqual(39);
    expect(reusableUser.lifeLeft).toEqual(26);
  });

  test("should return and modify the age of user on jupiter based on user age input", () => {
    reusableUser.planetAge("jupiter");
    expect(reusableUser.age).toEqual(2);
    expect(reusableUser.lifeExp).toEqual(6);
    expect(reusableUser.lifeLeft).toEqual(4);
  });

  test("should return the amount of years the user has lived passed their life expectancy for mercury", () => {
    otherUser.planetAge("mercury");
    expect(otherUser.age).toEqual(416);
    expect(otherUser.lifeExp).toEqual(312);
    expect(otherUser.lifePassed).toEqual(104)
  });

  test("should return the amount of years the user has lived passed their life expectancy for venus", () => {
    otherUser.planetAge("venus");
    expect(otherUser.age).toEqual(163);
    expect(otherUser.lifeExp).toEqual(122);
    expect(otherUser.lifePassed).toEqual(41)
  });

  test("should return the amount of years the user has lived passed their life expectancy for mars", () => {
    otherUser.planetAge("mars");
    expect(otherUser.age).toEqual(53);
    expect(otherUser.lifeExp).toEqual(39);
    expect(otherUser.lifePassed).toEqual(14)
  });

  test("should return the amount of years the user has lived passed their life expectancy for jupiter", () => {
    otherUser.planetAge("jupiter");
    expect(otherUser.age).toEqual(8);
    expect(otherUser.lifeExp).toEqual(6);
    expect(otherUser.lifePassed).toEqual(2)
  });

  test("should return a string notifying the user to enter a planet if the user does not input a planet", () => {
    let example = noPlanetUser.planetAge("");
    expect(example).toEqual("Please enter a planet");
  });
});