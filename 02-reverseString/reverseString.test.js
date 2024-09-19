import { reverseString } from "./reverseString";

test("print out string in reverse", () => {
  expect(reverseString("word")).toMatch("drow");
});
