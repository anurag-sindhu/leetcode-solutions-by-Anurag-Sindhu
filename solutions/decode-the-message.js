var decodeMessage = function (key, message) {
  let count = 0;
  const start = 97;
  const mapping = {};
  for (let index = 0; index < key.length; index++) {
    const charCode = key.charCodeAt(index);
    if (charCode >= 97 && charCode <= 122) {
      if (!mapping[key[index]]) {
        mapping[key[index]] = String.fromCharCode(start + count++);
      }
    }
  }
  let output = ``;
  for (let index = 0; index < message.length; index++) {
    const charCode = message.charCodeAt(index);
    if (charCode >= 97 && charCode <= 122) {
      output += mapping[message[index]];
    } else {
      output += message[index];
    }
  }
  return output;
};

console.log(
  decodeMessage(
    (key = 'the quick brown fox jumps over the lazy dog'),
    (message = 'vkbs bs t suepuv')
  )
);
console.log(
  decodeMessage(
    (key = 'eljuxhpwnyrdgtqkviszcfmabo'),
    (message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')
  )
);
