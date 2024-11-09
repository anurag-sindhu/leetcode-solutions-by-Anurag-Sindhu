var letterCombinations = function (
  digits,
  digitsConfig = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
) {
  if (!digits.length) {
    return [];
  }
  if (digits.length === 1) {
    return digitsConfig[digits[0]];
  }

  const getCurrentCombinations = digitsConfig[digits[0]];
  const getSplicedCombinations = letterCombinations(digits.substring(1));
  let output = [];
  if (!getSplicedCombinations) {
    output = getCurrentCombinations;
  }
  for (const getCurrentIterator of getCurrentCombinations) {
    for (const getSplicedIterator of getSplicedCombinations) {
      output.push(`${getCurrentIterator}${getSplicedIterator}`);
    }
  }
  return output;
};

console.log(letterCombinations('234'));
console.log(letterCombinations('2'));
console.log(letterCombinations(''));
console.log(letterCombinations('23'));
