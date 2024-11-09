function resolveDivisionAndMultiplication() {}
var calculate = function (s) {
  s = s.trim();
  return s;
};

console.log(calculate((s = ' 3/2 ')));
console.log(calculate((s = '3+2*2')));
console.log(calculate((s = ' 3+5 / 2 ')));
