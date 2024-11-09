var addBinary = function (a, b) {
  let lengthA = a.length - 1;
  let lengthB = b.length - 1;
  let sum = '';
  let tempSum = 0;
  let carry = 0;
  while (lengthA >= 0 || lengthB >= 0) {
    tempSum = 0;
    if (carry) {
      tempSum += carry;
      carry = 0;
    }
    if (lengthA >= 0) {
      tempSum += parseInt(a[lengthA]);
    }
    if (lengthB >= 0) {
      tempSum += parseInt(b[lengthB]);
    }
    if (tempSum > 2) {
      tempSum = 1;
      carry = 1;
    } else if (tempSum > 1) {
      tempSum = 0;
      carry = 1;
    }
    sum += String(tempSum);
    lengthA--;
    lengthB--;
  }
  if (carry) {
    sum += String(carry);
  }
  return sum.split('').reverse().join('');
};
console.log(addBinary('1111', '1111'));
console.log(addBinary('11', '1'));
console.log(addBinary((a = '1010'), (b = '1011')));
console.log(
  '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000' ===
    addBinary(
      '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
      '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
    )
);
