var longestValidParentheses = function (s) {
  let open = 0;
  let count = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '(') {
      open++;
    } else {
      if (open) {
        count++;
        open--;
      }
    }
  }
  return count * 2;
};

console.log(longestValidParentheses((s = '()(()')) === 2);
console.log(longestValidParentheses((s = '(()')) === 2);
console.log(longestValidParentheses((s = ')()())')) === 4);
console.log(longestValidParentheses((s = '')) === 0);
