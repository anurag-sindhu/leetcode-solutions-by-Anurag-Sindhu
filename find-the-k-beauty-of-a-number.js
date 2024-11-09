var divisorSubstrings = function (num, k) {
  num = num.toString();
  let count = 0;
  let tempString = num.substring(0, k - 1);
  for (let index = k - 1; index < num.length; index++) {
    tempString += num[index];
    if (Number(tempString)) {
      if (num % Number(tempString) === 0) {
        count++;
      }
    }
    tempString = tempString.substring(1);
  }
  return count;
};

console.log(divisorSubstrings(30003, 3));
console.log(divisorSubstrings((num = 430043), (k = 2)));
console.log(divisorSubstrings((num = 240), (k = 2)));
