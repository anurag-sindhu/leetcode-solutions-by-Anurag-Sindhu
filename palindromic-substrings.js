var countSubstrings = function (str) {
  const memoization = {};
  function checkIsPalindrome(strToCheck, startIndex, endIndex) {
    if (strToCheck.length === 2) {
      if (strToCheck[0] === strToCheck[1]) {
        return true;
      }
    } else if (strToCheck.length === 3) {
      if (strToCheck[0] === strToCheck[2]) {
        return true;
      }
    } else {
      if (
        memoization[startIndex] &&
        memoization[startIndex][endIndex] &&
        strToCheck[0] === strToCheck[strToCheck.length - 1]
      ) {
        return true;
      }
    }
  }

  let count = str.length;
  for (let lengthIndex = 2; lengthIndex <= str.length; lengthIndex++) {
    for (let index = 0; index <= str.length - lengthIndex; index++) {
      const startIndex = index;
      const endIndex = lengthIndex + index - 1;
      const stringOperation = str.substring(startIndex, endIndex + 1);
      const isPalindrome = checkIsPalindrome(stringOperation, startIndex + 1, endIndex - 1);
      if (isPalindrome) {
        if (!memoization[startIndex]) {
          memoization[startIndex] = {};
        }
        memoization[startIndex][endIndex] = {};
        count++;
      }
    }
  }
  return count;
};
console.log(countSubstrings((s = 'aaaaaa')));
console.log(countSubstrings((s = 'abcdef')));
console.log(countSubstrings((s = 'aaa')));
console.log(countSubstrings((s = 'abc')));
