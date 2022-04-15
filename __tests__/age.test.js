import { exportAllDeclaration } from "@babel/types";
import Age from "../src/js/age";

describe('Age', () => {
  let reusableUser;

  beforeEach(() => {
    reusableUser = new Age("Sam", 25);
  });

  test('should return the name and age of the user based on input', () => {
    expect(reusableUser.name).toEqual("Sam");
    expect(reusableUser.age).toEqual(25);
  });
});