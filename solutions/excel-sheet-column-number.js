var titleToNumber = function (columnTitle) {
  let sum = 0;
  let columnTitleLength = columnTitle.length;
  const startOfCharCodeForUpperCaseAlphabets = 65 - 1;
  for (let index = columnTitleLength - 1; index >= 0; index--) {
    sum +=
      (columnTitle.charCodeAt(index) - startOfCharCodeForUpperCaseAlphabets) *
      Math.pow(26, columnTitleLength - 1 - index);
  }
  return sum;
};
console.log(titleToNumber('ZY'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('A'));
console.log(titleToNumber('AA'));
console.log(titleToNumber('B'));
console.log(titleToNumber('C'));
