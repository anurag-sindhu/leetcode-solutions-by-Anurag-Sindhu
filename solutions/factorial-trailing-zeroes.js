var trailingZeroes = function (n) {
  return n === 0 ? 0 : parseInt(n / 5) + trailingZeroes(parseInt(n / 5));
};

console.log(trailingZeroes((n = 10)));
console.log(trailingZeroes((n = 15)));
console.log(trailingZeroes((n = 20)));
console.log(trailingZeroes((n = 25)));
console.log(trailingZeroes((n = 3)));
console.log(trailingZeroes((n = 5)));
