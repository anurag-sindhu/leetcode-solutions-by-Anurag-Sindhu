var generate = function (generate) {
  const arr = [];
  let tempIndex;
  for (let index = 0; index < generate; index++) {
    arr[index] = [1];
    if (generate > 2) {
      tempIndex = 0;
      while (index - tempIndex++ >= 2) {
        arr[index].push(arr[index - 1][tempIndex - 1] + arr[index - 1][tempIndex]);
      }
    }

    if (index) {
      arr[index].push(1);
    }
  }
  return arr;
};

console.log(generate(5));
console.log(generate(4));
console.log(generate(3));
console.log(generate(1));
