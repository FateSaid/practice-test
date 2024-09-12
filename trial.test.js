import { sum, capital } from "./trial";

test("adds 1 and 2 to equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
});

test("the word is capitalized", () => {
  expect(capital("word")).toMatch("Word");
});

test("print out string in reverse", () => {
  expect(reverseString("word")).toMatch("drow");
});
