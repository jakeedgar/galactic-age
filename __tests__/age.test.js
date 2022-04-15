import { exportAllDeclaration } from "@babel/types";
import Age from "../src/js/age";

describe('Age', () => {
  let reusableUser;

  beforeEach(() => {
    reusableUser = new Age("Sam", 25, 75);
  });

  test('should return the name and age of the user based on input', () => {
    expect(reusableUser.name).toEqual("Sam");
    expect(reusableUser.age).toEqual(25);
    expect(reusableUser.lifeExp).toEqual(75);
  });

  test("should return the age of user on mercury based on user age input", () => {
    reusableUser.planetAge("mercury");
    expect(reusableUser.age).toEqual(104);
    expect(reusableUser.lifeExp).toEqual(312);
    expect(reusableUser.lifeLeft).toEqual(208);
  });

  test("should return the age of user on venus based on user age input", () => {
    reusableUser.planetAge("venus");
    expect(reusableUser.age).toEqual(40);
    expect(reusableUser.lifeExp).toEqual(122);
  });

  test("should return the age of user on mars based on user age input", () => {
    reusableUser.planetAge("mars");
    expect(reusableUser.age).toEqual(13);
    expect(reusableUser.lifeExp).toEqual(39);
  });

  test("should return the age of user on jupiter based on user age input", () => {
    reusableUser.planetAge("jupiter");
    expect(reusableUser.age).toEqual(2);
    expect(reusableUser.lifeExp).toEqual(6);
  });
});