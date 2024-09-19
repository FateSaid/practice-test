import { capital } from "./capitalize.js";

test("the word is capitalized", () => {
  expect(capital("word")).toMatch("Word");
});
