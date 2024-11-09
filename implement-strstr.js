var strStr = function (haystack, needle) {
  if (!needle.length) {
    return 0;
  }
  const firstNeedleElement = needle[0];
  for (let index = 0; index < haystack.length; index++) {
    if (
      haystack[index] === firstNeedleElement &&
      haystack.substring(index, index + needle.length) === needle
    ) {
      return index;
    }
  }
  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', 'a'));
console.log(strStr('llbbo', 'll'));
