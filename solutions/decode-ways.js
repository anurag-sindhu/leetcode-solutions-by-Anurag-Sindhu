var numDecodings = function (str, count = 0) {
  if (!str || (str.length === 1 && str[0] === '0')) {
    return 0;
  }
  if (str.length === 2) {
    if (Number(str) >= 10 && Number(str) <= 10) {
      return 2;
    }
    return 1;
  } else {
    count += numDecodings(str.substr(1), count);
    console.log('object');
  }
  return count;
};

console.log(numDecodings('11106'));
console.log(numDecodings('12'));
console.log(numDecodings('06'));
console.log(numDecodings('123'));
console.log(numDecodings('1'));
console.log(numDecodings('12'));
