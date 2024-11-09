var closestDivisors = function (num) {
  let acceptedNums = { [num + 1]: true, [num + 2]: true };
  let first = parseInt(Math.sqrt(num + 1));
  let second = parseInt(Math.sqrt(num + 2));
  let prod = null;
  while (!acceptedNums[first * second]) {
    prod = first * second;
    if (prod === num) {
      if (first > second) {
        second++;
      } else {
        first++;
      }
    } else if (prod > num) {
      first--;
    } else {
      second++;
    }
  }
  return [first, second];
};

console.log(closestDivisors((num = 2)));
console.log(closestDivisors((num = 123)));
console.log(closestDivisors((num = 8)));
console.log(closestDivisors((num = 999)));
