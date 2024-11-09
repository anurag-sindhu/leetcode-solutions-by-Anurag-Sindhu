function countOnesInDecimal(num) {
  let count = 0;
  let binary = num.toString(2);
  const splitted = binary.split('');
  for (const iterator of splitted) {
    if (iterator === `1`) {
      count += 1;
    }
  }

  return count;
}

var countBits = function (n) {
  const output = [];
  let index = 0;
  while (index < n + 1) {
    output.push(countOnesInDecimal(index));
    index++;
  }
  return output;
};

console.log(countBits((n = 2)));
console.log(countBits((n = 5)));
