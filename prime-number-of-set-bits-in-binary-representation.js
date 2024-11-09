const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};
const countBits = (num) => {
  const numInBits = num.toString(2);
  let count = 0;
  for (let index = 0; index < numInBits.length; index++) {
    if (Number(numInBits[index])) {
      count += 1;
    }
  }
  return isPrime(count);
};
var countPrimeSetBits = function (left, right) {
  let count = 0;
  for (let index = left; index <= right; index++) {
    if (countBits(index)) {
      count += 1;
    }
  }
  return count;
};

console.log(countPrimeSetBits((left = 10), (right = 15)));
console.log(countPrimeSetBits((left = 6), (right = 10)));
