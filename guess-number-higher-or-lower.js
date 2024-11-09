var guessNumber = function (till, from = 1) {
  if (Math.abs(from - till) === 1) {
    let tempResp = guess(from);
    if (!tempResp) {
      return from;
    }
    return till;
  }
  const sum = till + from;
  const middle = Math.floor(sum / 2);
  let resp = guess(middle);
  if (!resp) {
    return middle;
  } else if (resp === 1) {
    return guessNumber(till, middle);
  } else {
    return guessNumber(middle, from);
  }
};
const pick = 1;
function guess(num) {
  if (pick === num) {
    return 0;
  }
  if (pick > num) {
    return 1;
  }
  return -1;
}
console.log(guessNumber(2));
console.log(guessNumber(1));
console.log(guessNumber(10));
