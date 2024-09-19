function caesarCipher(string, num) {
  let alphabet = createAlphabet();

  let cipher = shift(num);

  string = string.split("");

  function convert() {
    let encrypted = [];
    for (let i = 0; i < string.length; i++) {
      if (/\W/.test(string[i])) {
        encrypted.push(string[i]);
      }
      if (/[A-Z]/.test(string[i])) {
        let index = alphabet.indexOf(string[i].toLowerCase());
        encrypted.push(cipher[index].toUpperCase());
      } else {
        let index = alphabet.indexOf(string[i]);
        encrypted.push(cipher[index]);
      }
    }
    return encrypted.join("");
  }

  function createAlphabet() {
    let array = [];
    for (let i = 97; i < 123; i++) {
      array.push(String.fromCharCode(i));
    }
    return array;
  }

  function shift(num) {
    let cipher = [];
    for (let i = num; i < alphabet.length; i++) {
      cipher.push(alphabet[i]);
    }

    for (let i = 0; i < num; i++) {
      cipher.push(alphabet[i]);
    }
    return cipher;
  }

  return convert();
}
