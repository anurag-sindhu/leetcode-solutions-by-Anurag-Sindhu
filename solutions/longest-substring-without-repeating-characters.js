var lengthOfLongestSubstring = function(str) {
	const obj = {};
	let maxLength = 0;
	let firstIndex = 0,
		secondIndex = 0;

	while (secondIndex <= str.length - 1) {
		if (obj[str[secondIndex]] === undefined) {
			obj[str[secondIndex++]] = true;
			const temp = Object.keys(obj).length;
			if (temp > maxLength) {
				maxLength = temp;
			}
		} else {
			delete obj[str[firstIndex++]];
		}
	}
	return maxLength;
};
console.log(lengthOfLongestSubstring((s = 'abcabcbb')));
console.log(lengthOfLongestSubstring((s = 'dvdf')));
console.log(lengthOfLongestSubstring((s = 'bbbbb')));
console.log(lengthOfLongestSubstring((s = 'pwwkew')));
