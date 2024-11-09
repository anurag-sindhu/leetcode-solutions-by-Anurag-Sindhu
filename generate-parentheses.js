var generateParenthesis = function (n, open = 0, close = 0, str = '', output = []) {
  if (str.length === 2 * n) {
    output.push(str);
    return;
  }
  if (open === close) {
    generateParenthesis(n, open + 1, close, str + `(`, output);
  } else if (open === n) {
    generateParenthesis(n, open, close + 1, str + `)`, output);
  } else {
    generateParenthesis(n, open + 1, close, str + `(`, output);
    generateParenthesis(n, open, close + 1, str + `)`, output);
  }
  return output;
};
let res = generateParenthesis((n = 3));
console.log(res);
res = generateParenthesis((n = 1));
console.log(res);
