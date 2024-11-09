var isLongPressedName = function (name, typed) {
  if (name[0] !== typed[0]) {
    return false;
  }
  let nameIndex = 1;
  for (let index = 1; index < typed.length; index++) {
    if (typed[index] === name[nameIndex]) {
      nameIndex++;
    } else if (typed[index] !== typed[index - 1]) {
      return false;
    } else if (nameIndex === name.length) {
      if (typed[index] !== typed[index - 1]) {
        return false;
      }
    }
  }
  if (nameIndex === name.length) {
    return true;
  }
  return false;
};

console.log(isLongPressedName('pyplrz', 'ppyypllr') === false);
console.log(isLongPressedName('alexd', 'ale') === false);
console.log(isLongPressedName('alex', 'aaleelx') === false);
console.log(isLongPressedName('vtkgn', 'vttkgnn') === true);
console.log(isLongPressedName('alex', 'aaleexa') === false);
console.log(isLongPressedName((name = 'saeed'), (typed = 'ssaaedd')) === false);
console.log(isLongPressedName((name = 'alex'), (typed = 'aaleex')) === true);
