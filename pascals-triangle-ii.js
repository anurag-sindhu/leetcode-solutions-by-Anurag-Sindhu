var getRow = function (generate) {
  generate = generate + 1;
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
  return arr[generate - 1];
};

console.log(getRow(6));
console.log(getRow(6));
console.log(getRow(5));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(5));
console.log(getRow(4));
console.log(getRow(3));
console.log(getRow(1));
console.log(getRow(0));
