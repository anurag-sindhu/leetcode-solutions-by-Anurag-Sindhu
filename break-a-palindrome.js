var breakPalindrome = function(palindrome) {
	if (palindrome.length === 1) {
		return ``;
	}
	let hasBroken = false;
	const arrPalindrome = palindrome.split('');
	for (let index = 0; index < palindrome.length; index++) {
		if (palindrome.length % 2 !== 0 && Math.floor(palindrome.length / 2) === index) {
			continue;
		}
		const element = palindrome[index];
		if (index === palindrome.length - 1) {
			arrPalindrome[index] = `b`;
			hasBroken = true;
			break;
		}
		if (element === `a`) {
			continue;
		}

		// arrPalindrome[index] = String.fromCharCode(palindrome.charCodeAt(index) - 1);
		arrPalindrome[index] = `a`;
		hasBroken = true;
		break;
	}
	if (!hasBroken) {
		for (let index = palindrome.length - 1; index >= 0; index--) {
			if (palindrome.length % 2 !== 0 && Math.floor(palindrome.length / 2) === index) {
				continue;
			}
			const element = palindrome[index];
			if (element === `z`) {
				continue;
			}

			// arrPalindrome[index] = String.fromCharCode(palindrome.charCodeAt(index) - 1);
			arrPalindrome[index] = `a`;
			hasBroken = true;
			break;
		}
	}

	if (!hasBroken) {
		return ``;
	}
	const finalResponse = arrPalindrome.join('');
	return finalResponse;
};

console.log(breakPalindrome('aa'));
console.log(breakPalindrome('abccba'));
console.log(breakPalindrome('trccrt') === 'arccrt');
console.log(breakPalindrome('a'));
