var repeatedStringMatch = function (a, b) {};

console.log(repeatedStringMatch((a = 'abcd'), (b = 'cdabcdab')));
/**
 * abcdabcdabcd
 */
console.log(repeatedStringMatch((a = 'a'), (b = 'aa')));
