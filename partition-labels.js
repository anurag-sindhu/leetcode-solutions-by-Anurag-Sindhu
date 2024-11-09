var partitionLabels = function (str) {
  const output = [];
  const obj = {};
  for (let index = 0; index < str.length; index++) {
    obj[str[index]] = index;
  }
  let tempStr = ``;
  let lastPointingIndex = 0;
  for (let index = 0; index < str.length; index++) {
    if (obj[str[index]] > lastPointingIndex) {
      lastPointingIndex = obj[str[index]];
    }
    tempStr += str[index];
    if (lastPointingIndex === index) {
      output.push(tempStr.length);
      tempStr = ``;
    }
  }
  return output;
};

console.log(partitionLabels((s = 'eccbbbbdec')));
console.log(partitionLabels((s = 'ababcbacadefegdehijhklij')));
