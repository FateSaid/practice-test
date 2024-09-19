import { caesarCipher } from "./caesarCipher";

test("print out ceasar cipher", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
  expect(caesarCipher("heLLo", 3)).toMatch("khOOr");
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});
