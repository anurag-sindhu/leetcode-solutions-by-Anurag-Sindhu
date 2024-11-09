function findNumbersInDescendingOrder(arr) {
  let a = Infinity;
  let b = Infinity;
  let c = Infinity;
  let d = Infinity;
  for (let iterator of arr) {
    iterator = Number(iterator);
    if (iterator <= a) {
      if (d >= c) {
        d = c;
      }
      if (c >= b) {
        c = b;
      }
      if (b >= a) {
        b = a;
      }
      a = iterator;
    }
    if (iterator <= b && iterator !== a) {
      if (d >= c) {
        d = c;
      }
      if (c >= b) {
        c = b;
      }
      b = iterator;
    }
    if (iterator <= c && iterator !== b && iterator !== a) {
      if (d >= c) {
        d = c;
      }
      c = iterator;
    }
    if (iterator <= d && iterator !== a && iterator !== b && iterator !== c) {
      d = iterator;
    }
  }
  return { a, b, c, d };
}

var minimumSum = function (num) {
  num = String(num);
  const { a, b, c, d } = findNumbersInDescendingOrder(num.split(''));
  return a * 10 + c + b * 10 + d;
};

console.log(minimumSum((num = 2932)));
console.log(minimumSum((num = 4009)));
