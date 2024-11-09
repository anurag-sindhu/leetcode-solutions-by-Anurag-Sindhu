var thousandSeparator = function (n) {
  n = String(n);
  if (n.length <= 3) {
    return n;
  }
  let output = [];
  let tempCount = 0;
  for (let index = n.length - 1; index >= 0; index--) {
    if (tempCount === 3) {
      output.push(`.`);
      tempCount = 0;
    }
    output.push(n[index]);
    tempCount++;
  }
  return output.reverse().join('');
};
console.log(thousandSeparator(987));
console.log(thousandSeparator(1234));
