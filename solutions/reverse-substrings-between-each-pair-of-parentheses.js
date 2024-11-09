var reverseParentheses = function (str) {
  let arr = [];
  let parenthesisCount = false;
  let newString = ``;
  let lastParenthesesStartIndex = null;
  let tempStr = ``;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === '(') {
      parenthesisCount = true;
      lastParenthesesStartIndex = index;
      tempStr = ``;
    } else if (str[index] === ')') {
      newString = str.slice(0, lastParenthesesStartIndex) + tempStr + str.slice(index + 1);
      break;
    } else {
      tempStr = str[index] + tempStr;
    }
  }
  if (parenthesisCount) {
    return reverseParentheses(newString);
  }
  return str;
};

console.log(reverseParentheses((s = 'ta()usw((((a))))')));
console.log(reverseParentheses((s = '(ed((et)(oc))el)')));
console.log(reverseParentheses((s = '(ed(et(oc))el)')));
console.log(reverseParentheses((s = '(u(love)i)')));
console.log(reverseParentheses((s = '(abcd)')));
