let arr = [1, 2, 3, 4];

console.time("1");
arr.forEach(function (value, index, array) {
  console.log(value * value);
});
console.timeEnd("1");


console.time("11");
function asyncArray(array, cb) {
  array.forEach(function () {
        setTimeout(cb, 0);
      }
  )
}

asyncArray(arr, function (value, index, array) {
  console.log(value * value);
});
console.timeEnd("11");
