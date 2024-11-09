var trap = function (array) {
  const left = [array[0]];
  const right = [array[array.length - 1]];
  for (let index = 1; index < array.length; index++) {
    left.push(Math.max(array[index], left[index - 1]));
  }
  for (let index = array.length - 1 - 1; index >= 0; index--) {
    right.push(Math.max(array[index], right[array.length - 1 - 1 - index]));
  }
  right.reverse();
  let collect = 0;
  for (let index = 0; index < array.length; index++) {
    collect += Math.min(left[index], right[index]) - array[index];
  }
  return collect;
};
console.log(trap([3, 1, 2, 4, 0, 1, 3, 2]));
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
