/**
 * Z-Algorithm
 */

var strStr = function (haystack, needle) {
    if (haystack.length === needle.length && haystack.length === needle.length) {
        if (haystack === needle) {
            return 0;
        }
        return -1;
    }
    const newString = `${needle}$${haystack}`;
    let newStringIndex = 0;
    let index;
    for (index = needle.length + 1; index < newString.length; index++) {
        if (newString[newStringIndex] === `$`) {
            return index - needle.length - needle.length - 1;
        } else if (newString[newStringIndex] === newString[index]) {
            newStringIndex++;
        } else {
            index -= newStringIndex;
            newStringIndex = 0;
        }
    }
    if (newString[newStringIndex] === `$`) {
        return index - needle.length - needle.length - 1;
    }
    return -1;
};

console.log(strStr((haystack = 'leetcode'), (needle = 'leeto')));
console.log(strStr((haystack = 'sadbutsad'), (needle = 'sad')));
console.log(strStr('aaaa', 'baaa'));
console.log(strStr('abc', 'c'));
console.log(strStr((haystack = 'a'), (needle = 'a')));
console.log(strStr((haystack = 'butsadbutsad'), (needle = 'but')));
console.log(strStr((haystack = 'butsadbutsad'), (needle = 'sad')));
