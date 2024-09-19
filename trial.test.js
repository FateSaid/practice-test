import {
  capital,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./trial";

test("the word is capitalized", () => {
  expect(capital("word")).toMatch("Word");
});

test("print out string in reverse", () => {
  expect(reverseString("word")).toMatch("drow");
});

test("calculating operators", () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.sub(2, 1)).toEqual(1);
  expect(calculator.multi(2, 2)).toEqual(4);
  expect(calculator.div(2, 1)).toEqual(2);
});

test("print out ceasar cipher", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
  expect(caesarCipher("heLLo", 3)).toMatch("khOOr");
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("return object with following properties", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
