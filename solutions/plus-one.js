var plusOne = function (array) {
  const addInteger = (arr) => {
    let reminder = 0;
    const lastIndex = arr.length - 1;
    for (let index = lastIndex; index >= 0; index--) {
      arr[index] += reminder;
      reminder = 0;
      if (index === lastIndex) {
        arr[index] += 1;
      }
      if (arr[index] === 10) {
        arr[index] = 0;
        reminder = 1;
      }
      if (!reminder) {
        break;
      }
    }
    if (reminder) {
      arr.unshift(1);
    }
    return arr;
  };
  return addInteger(array);
};

console.log(plusOne([9, 9]));
console.log(plusOne([4, 3, 2, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([1, 2, 3]));
