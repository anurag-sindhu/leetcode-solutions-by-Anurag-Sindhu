var checkPowersOfThree = function (n) {
  if (n == 1) {
    return true;
  }
  if (n % 3 == 2) {
    return false;
  }
  return checkPowersOfThree(parseInt(n / 3));
};

console.log(checkPowersOfThree(15));
console.log(checkPowersOfThree(14));
console.log(checkPowersOfThree(13));
console.log(checkPowersOfThree(12));
