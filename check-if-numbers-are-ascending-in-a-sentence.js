var areNumbersAscending = function (s) {
  const nums = [];
  let temp = ``;
  for (let index = 0; index < s.length; index++) {
    if (s.charCodeAt(index) >= 48 && s.charCodeAt(index) <= 57) {
      temp += s[index];
    } else {
      if (temp.length) {
        nums.push(Number(temp));
      }
      temp = ``;
    }
  }
  if (temp.length) {
    nums.push(Number(temp));
  }
  for (let index = 1; index < nums.length; index++) {
    if (!(nums[index] > nums[index - 1])) {
      return false;
    }
  }
  return true;
};

console.log(areNumbersAscending((s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles')));
console.log(areNumbersAscending((s = 'hello world 5 x 5')));
