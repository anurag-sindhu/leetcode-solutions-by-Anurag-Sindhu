var longestCommonSubsequence1 = function (text1, text2) {
  if (!text1 || !text2) {
    return 0;
  }
  if (text1[text1.length - 1] === text2[text2.length - 1]) {
    return (
      1 +
      longestCommonSubsequence(
        text1.substring(0, text1.length - 1),
        text2.substring(0, text2.length - 1)
      )
    );
  } else {
    return Math.max(
      longestCommonSubsequence(text1, text2.substring(0, text2.length - 1)),
      longestCommonSubsequence(text1.substring(0, text1.length - 1), text2)
    );
  }
};

var longestCommonSubsequence = function (text1, text2) {
  const matrix = [];
  for (let rowIndex = 0; rowIndex <= text1.length; rowIndex++) {
    matrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex <= text2.length; columnIndex++) {
      matrix[rowIndex].push(0);
    }
  }
  for (let text1Index = 0; text1Index < text1.length; text1Index++) {
    for (let text2Index = 0; text2Index < text2.length; text2Index++) {
      if (text1[text1Index] == text2[text2Index]) {
        matrix[text1Index + 1][text2Index + 1] = matrix[text1Index][text2Index] + 1;
      } else {
        matrix[text1Index + 1][text2Index + 1] = Math.max(
          matrix[text1Index + 1][text2Index],
          matrix[text1Index][text2Index + 1]
        );
      }
    }
  }
  return matrix[text1.length][text2.length];
};
console.log(longestCommonSubsequence('abccde', 'ace')) === 3;
console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq') === 6);
console.log(longestCommonSubsequence((text1 = 'abc'), (text2 = 'abc')));
console.log(longestCommonSubsequence('ABCDEF', 'FBDAMN'));
console.log(longestCommonSubsequence('abcba', 'abcbcba') === 5);
console.log(longestCommonSubsequence('oxcpqrsvwf', 'shmtulqrypy'));
console.log(longestCommonSubsequence('shinchan', 'noharaa'));
console.log(longestCommonSubsequence('abc', 'def'));
console.log(longestCommonSubsequence('AA', 'BB'));
console.log(longestCommonSubsequence('A', 'A'));
console.log(longestCommonSubsequence('ABD', 'ACD'));
console.log(longestCommonSubsequence('ABCD', 'ABDC'));
console.log(longestCommonSubsequence('HARRY', 'SALLY'));
// console.log(longestCommonSubsequence('AA', 'BB'));
// console.log(longestCommonSubsequence("SHINCHAN", "NOHARAAA"));
// console.log(longestCommonSubsequence("WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS", "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"));

// console.log(longestCommonSubsequence("AA", "BB"));
// console.log(longestCommonSubsequence("HARRY", "SALLY"));
