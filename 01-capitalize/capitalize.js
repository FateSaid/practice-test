export function capital(string) {
  let word = string.split("");
  word[0] = word[0].toUpperCase();
  return word.join("");
}
