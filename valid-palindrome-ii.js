var validPalindrome = function(s, firstIndex = 0, lastIndex = s.length - 1, skipped = 0) {
	if (skipped > 1) {
		return false;
	}
	if (firstIndex >= lastIndex) {
		return true;
	}
	if (s[firstIndex] === s[lastIndex]) {
		return validPalindrome(s, firstIndex + 1, lastIndex - 1, skipped);
	} else {
		return (
			validPalindrome(s, firstIndex, lastIndex - 1, skipped + 1) ||
			validPalindrome(s, firstIndex + 1, lastIndex, skipped + 1)
		);
	}
};
let res;
res = validPalindrome('abca');
console.log(res === true);

res = validPalindrome('aba');
console.log(res === true);

res = validPalindrome('abc');
console.log(res === false);
