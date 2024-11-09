var mergeAlternately = function (word1, word2) {
  let word1Index = 0;
  let word2Index = 0;
  let output = '';
  while (word1[word1Index] && word2[word2Index]) {
    output += word1[word1Index++] + word2[word2Index++];
  }
  if (word1[word1Index]) {
    output += word1.slice(word1Index);
  }
  if (word2[word2Index]) {
    output += word2.slice(word2Index);
  }
  return output;
};

console.log(mergeAlternately((word1 = 'abcd'), (word2 = 'pq')));
console.log(mergeAlternately((word1 = 'ab'), (word2 = 'pqrs')));
console.log(mergeAlternately((word1 = 'abc'), (word2 = 'pqr')));
