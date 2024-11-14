function myFunc(total, num, index, arr) {
  console.log(total, num, index, arr);
  return total - num;
}

console.log([175, 50, 25, 50].reduce(myFunc, 250));
