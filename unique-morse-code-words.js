const symbolConfig = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..'
];
var uniqueMorseRepresentations = function (words) {
  const config = {};
  for (const iterator of words) {
    let temp = ``;
    for (let index = 0; index < iterator.length; index++) {
      temp += symbolConfig[iterator.charCodeAt(index) - 97];
    }
    config[temp] = temp;
  }
  return Object.keys(config).length;
};

console.log(uniqueMorseRepresentations((words = ['a'])));
console.log(uniqueMorseRepresentations((words = ['gin', 'zen', 'gig', 'msg'])));
