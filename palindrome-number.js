var isPalindrome = function (x) {
  const number = String(x);
  const runUptoIndex = Math.floor(number.length / 2);
  for (let index = 0; index < runUptoIndex; index++) {
    if (number[index] !== number[number.length - index - 1]) {
      return false;
    }
  }
  return true;
};

var isPalindrome1 = function (x) {
  const reverseWord = (word) => {
    let str = '';
    for (let index = word.length - 1; index >= 0; index--) {
      str += word[index];
    }
    return str;
  };
  const number = String(x);
  const reverseString = reverseWord(number);
  if (reverseString !== number) {
    return false;
  }
  return true;
};

function getReverse(x, reverse = 0) {
  if (x) {
    const reminder = x % 10;
    let left = Math.round(x / 10);
    let tempLeft = left;
    let tempOutput = reminder;
    while (tempLeft) {
      tempOutput *= 10;
      tempLeft = Math.round(tempLeft / 10);
    }
    reverse += tempOutput;
    return getReverse(left, reverse, 'not');
  }
  return reverse;
}

function isPalindrome2(x) {
  const reverse = getReverse(x);
  if (x - reverse === 0) {
    return true;
  }
  return false;
}

console.log(isPalindrome2(1234));
console.log(isPalindrome2(4224));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
