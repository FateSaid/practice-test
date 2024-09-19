export function analyzeArray(array) {
  const obj = Object(array[3], array[0], array[1], array[5]);

  function Object(average, min, max, length) {
    return { average, min, max, length };
  }
  return obj;
}
