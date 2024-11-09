var minSwaps = function (orgString) {
  const str = orgString.split('');
  let balance = 0,
    swap = 0,
    lastPointer = str.length - 1;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === `[`) {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) {
      while (str[lastPointer] !== `[` && index < lastPointer) {
        lastPointer--;
      }
      const store = str[lastPointer];
      str[lastPointer] = str[index];
      str[index] = store;
      swap++;
      balance = 1;
    }
  }
  return swap;
};

console.log(minSwaps((s = '][][')));
console.log(minSwaps((s = ']]][[[')));
console.log(minSwaps((s = '[]')));
