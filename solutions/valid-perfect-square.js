var isPerfectSquare = function (num) {
  let toBeDecreased = 1;
  while (num > 0) {
    num = num - toBeDecreased;
    toBeDecreased += 2;
    if (num === 0) {
      return true;
    } else if (num < 0) {
      return false;
    }
  }
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(17));
