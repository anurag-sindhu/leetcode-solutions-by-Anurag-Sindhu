var intToRoman = function (num) {
  let output = ``;
  const sequenceToFollow = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const sequencePotential = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  while (num > 0) {
    for (let index = 0; index < sequenceToFollow.length; index++) {
      const element = sequenceToFollow[index];
      while (num >= element) {
        num -= element;
        output += sequencePotential[index];
      }
    }
  }
  return output;
};

console.log(intToRoman(20) === 'XX');
console.log(intToRoman(58) === 'LVIII');
console.log(intToRoman(1994));
console.log(intToRoman(3));
console.log(intToRoman(59));
