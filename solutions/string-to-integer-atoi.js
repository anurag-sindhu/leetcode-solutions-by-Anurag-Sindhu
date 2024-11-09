var myAtoi = function (s) {
  s = s.trimLeft();
  let sign = null;
  let num = ``;
  for (let index = 0; index < s.length; index++) {
    if (sign === null && index === 0 && s[index] === '-') {
      if (index !== 0) {
        num = `0`;
        break;
      }
      if (sign === null) {
        sign = -1;
      } else {
        num = `0`;
        break;
      }
    } else if (sign === null && index === 0 && s[index] === '+') {
      if (index !== 0) {
        num = `0`;
        break;
      }
      if (sign === null) {
        sign = 1;
      } else {
        num = `0`;
        break;
      }
    } else if (s.charCodeAt(index) >= 48 && s.charCodeAt(index) <= 57) {
      num += s[index];
    } else {
      break;
    }
  }
  num = Number(num.trimRight());
  if (sign && sign !== 1) {
    const tempNum = num > Math.pow(2, 31) ? Math.pow(2, 31) : num;
    return sign * tempNum;
  }
  return num > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : num;
};

console.log(myAtoi('123-'));
console.log(myAtoi('-5-'));
console.log(myAtoi('   +0 123'));
console.log(myAtoi('00000-42a1234'));
console.log(myAtoi('42'));
console.log(myAtoi('+-12'));
console.log(myAtoi('-2147483649'));
console.log(myAtoi('1073741824'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
