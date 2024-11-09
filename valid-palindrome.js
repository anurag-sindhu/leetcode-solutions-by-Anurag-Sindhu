var isPalindrome = function (s) {
  let startIndex = 0;
  let endIndex = s.length - 1;
  let startCharacter = null;
  let endCharacter = null;
  while (startIndex < endIndex) {
    if (s.charCodeAt(startIndex) >= 97 && s.charCodeAt(startIndex) <= 122) {
      startCharacter = s[startIndex];
    } else if (s.charCodeAt(startIndex) >= 65 && s.charCodeAt(startIndex) <= 90) {
      startCharacter = s[startIndex].toLowerCase();
    } else if (s.charCodeAt(startIndex) >= 48 && s.charCodeAt(startIndex) <= 57) {
      startCharacter = s[startIndex];
    } else {
      startIndex++;
      continue;
    }
    if (s.charCodeAt(endIndex) >= 97 && s.charCodeAt(endIndex) <= 122) {
      endCharacter = s[endIndex];
    } else if (s.charCodeAt(endIndex) >= 65 && s.charCodeAt(endIndex) <= 90) {
      endCharacter = s[endIndex].toLowerCase();
    } else if (s.charCodeAt(endIndex) >= 48 && s.charCodeAt(endIndex) <= 57) {
      endCharacter = s[endIndex];
    } else {
      endIndex--;
      continue;
    }
    if (endCharacter !== startCharacter) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
};

var isPalindrome1 = function (s) {
  const startAsciiForSmall = 97;
  const endAsciiForSmall = 122;
  const startAsciiForCapital = 65;
  const endAsciiForCapital = 90;
  const startAsciiForNumber = 48;
  const endAsciiForNumber = 57;
  let startIndex = 0;
  let endIndex = s.length - 1;
  let startCharacter = null;
  let startCharacterCharCode = null;
  let endCharacter = null;
  let endCharacterCharCode = null;
  while (startIndex < endIndex) {
    startCharacterCharCode = s.charCodeAt(startIndex);
    endCharacterCharCode = s.charCodeAt(endIndex);
    if (
      startCharacterCharCode >= startAsciiForSmall &&
      startCharacterCharCode <= endAsciiForSmall
    ) {
      startCharacter = s[startIndex];
    } else if (
      startCharacterCharCode >= startAsciiForCapital &&
      startCharacterCharCode <= endAsciiForCapital
    ) {
      startCharacter = s[startIndex].toLowerCase();
    } else if (
      startCharacterCharCode >= startAsciiForNumber &&
      startCharacterCharCode <= endAsciiForNumber
    ) {
      startCharacter = s[startIndex];
    } else {
      startIndex++;
      continue;
    }
    if (endCharacterCharCode >= startAsciiForSmall && endCharacterCharCode <= endAsciiForSmall) {
      endCharacter = s[endIndex];
    } else if (
      endCharacterCharCode >= startAsciiForCapital &&
      endCharacterCharCode <= endAsciiForCapital
    ) {
      endCharacter = s[endIndex].toLowerCase();
    } else if (
      endCharacterCharCode >= startAsciiForNumber &&
      endCharacterCharCode <= endAsciiForNumber
    ) {
      endCharacter = s[endIndex];
    } else {
      endIndex--;
      continue;
    }
    if (endCharacter !== startCharacter) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
};

console.log(isPalindrome('1a2'));
console.log(isPalindrome('1b1'));
console.log(isPalindrome('0P'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('A man, a plan, a canal: Panama'));

console.log(isPalindrome1('1a2'));
console.log(isPalindrome1('1b1'));
console.log(isPalindrome1('0P'));
console.log(isPalindrome1('race a car'));
console.log(isPalindrome1(' '));
console.log(isPalindrome1('A man, a plan, a canal: Panama'));
