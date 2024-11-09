var fizzBuzz = function (n) {
  const arr = [];
  for (let index = 1; index <= n; index++) {
    if (!(index % 3) && !(index % 5)) {
      arr.push('FizzBuzz');
    } else if (!(index % 3)) {
      arr.push('Fizz');
    } else if (!(index % 5)) {
      arr.push('Buzz');
    } else {
      arr.push(String(index));
    }
  }
  return arr;
};
console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
