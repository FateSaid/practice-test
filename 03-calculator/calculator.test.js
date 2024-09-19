import { calculator } from "./calculator";

test("calculating operators", () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.sub(2, 1)).toEqual(1);
  expect(calculator.multi(2, 2)).toEqual(4);
  expect(calculator.div(2, 1)).toEqual(2);
});
