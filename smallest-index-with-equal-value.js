var smallestEqual = function (array) {
  let output = -1;
  for (let index = 0; index < array.length; index++) {
    if (index % 10 === array[index]) {
      return index;
    }
  }
  return output;
};

console.log(smallestEqual((nums = [0, 1, 2])));
console.log(smallestEqual((nums = [4, 3, 2, 1])));
console.log(smallestEqual((nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])));
