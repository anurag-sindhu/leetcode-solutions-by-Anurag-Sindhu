var isValid = function (s) {
  let array = [];
  const map = { '(': ')', '{': '}', '[': ']' };
  for (let index = 0; index < s.length; index++) {
    if (map[s[index]]) {
      array.push(s[index]);
    } else {
      if (map[array[array.length - 1]] !== s[index]) {
        return false;
      } else {
        array.pop();
      }
    }
  }
  if (array.length) {
    return false;
  }
  return true;
};

console.log(isValid('()'));
console.log(isValid('([)]'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
