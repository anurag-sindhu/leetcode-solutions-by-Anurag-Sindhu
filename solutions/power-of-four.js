var isPowerOfFour = function (num, power = 0) {
  const poweredValue = Math.pow(4, power);
  if (num === poweredValue) {
    return true;
  } else if (num < poweredValue) {
    return false;
  } else {
    return isPowerOfFour(num, power + 1);
  }
};
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(2));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(8));
