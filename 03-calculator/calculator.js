const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const multi = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, multi, div };
})();
