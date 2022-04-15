import { exportAllDeclaration } from "@babel/types";
import Age from "../src/js/age";

describe('Age', () => {
  let reusableAge;

  beforeEach(() => {
    reusableAge = new Age(25);
  });

  test('should return the age of the user based on input', () => {
    expect(reusableAge.age).toEqual(25);
  });
});