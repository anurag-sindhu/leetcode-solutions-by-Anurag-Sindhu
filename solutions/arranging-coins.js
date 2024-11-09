var arrangeCoins1 = function (n) {
  let sum = 0;
  let requiredStair = 0;
  while (n >= sum) {
    requiredStair += 1;
    sum += requiredStair;
    if (n < sum) {
      return requiredStair - 1;
    }
  }
  return requiredStair;
};

var arrangeCoins = function (n) {
  let sum = 0;
  let requiredStair = 0;
  while (n >= sum) {
    requiredStair += 1;
    sum += requiredStair;
    if (n < sum) {
      return requiredStair - 1;
    }
  }
  return requiredStair;
};
console.log(arrangeCoins(6));
console.log(arrangeCoins(10));
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
