/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  n = String(n);
  const getReversalString = n.split('').reverse().join('');
  return `${parseInt(getReversalString, 2)} ${getReversalString}`;
};

console.log(reverseBits('00000010100101000001111010011100'));
console.log(reverseBits("11111111111111111111111111111101"));
