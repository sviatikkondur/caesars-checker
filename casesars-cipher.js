function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let decrypted = '';

  for (let i = 0; i < str.length; i++) {
    if(alphabet.indexOf(str[i]) !== -1) {
      let toReplace = alphabet.indexOf(str[i]) + 13;
      if(toReplace >= 26) {
        toReplace -= 26;
      }
      decrypted += alphabet[toReplace];
      continue;
    }
    decrypted += str[i];
  }
  return decrypted;
}