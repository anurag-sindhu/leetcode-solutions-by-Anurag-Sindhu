var rangeBitwiseAnd = function (left, right) {
  if (!left || !right) {
    return 0;
  }
  const findRangeStartNumber = (first, second) => {
    let forFirst = null;
    let forSecond = null;
    let n = 0;
    while (forFirst === null && forSecond === null) {
      const startRange = 2 ** n;
      const endRange = 2 ** (n + 1);
      if (first >= startRange && first < endRange && forFirst === null) {
        forFirst = n;
      }
      if (second >= startRange && second < endRange && forSecond === null) {
        forSecond = n;
      }
      if (forFirst !== null && forSecond !== null) {
        if (forFirst === 2 ** n || forSecond === 2 ** n) {
          throw startRange;
        }
        return startRange;
      } else if (forFirst !== null || forSecond !== null) {
        throw 0;
      } else {
        n++;
      }
    }
  };
  try {
    const getRange = findRangeStartNumber(left, right);
    if (right - left >= getRange / 2) {
      return getRange;
    }
    let prod = left;
    for (let index = left + 1; index <= right; index++) {
      prod = prod & index;
      if (prod === getRange) {
        return getRange;
      }
    }
    return prod;
  } catch (e) {
    return e;
  }
};

console.log(rangeBitwiseAnd(1, 2147483647));
console.log(rangeBitwiseAnd(2, 12));
console.log(rangeBitwiseAnd(11, 12));
console.log(rangeBitwiseAnd(10, 11));
console.log(rangeBitwiseAnd(8, 12));
console.log(rangeBitwiseAnd(5, 7));
