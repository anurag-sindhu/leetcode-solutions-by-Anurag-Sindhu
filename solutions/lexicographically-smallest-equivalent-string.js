var smallestEquivalentString = function(s1, s2, baseStr) {
	const obj = {};
	for (let index = 0; index < s1.length; index++) {
		const charFromS1 = s1[index];
		const charFromS2 = s2[index];
		if (!obj[charFromS1]) {
			obj[charFromS1] = {};
		}
		obj[charFromS1][charFromS2] = true;
		if (!obj[charFromS2]) {
			obj[charFromS2] = {};
		}
		obj[charFromS2][charFromS1] = true;
	}

	const explored = {};
	const charsConfig = {};
	for (let index = 0; index < 26; index++) {
		const character = String.fromCharCode(index + 97);
		function startExplore(char) {
			if (!explored[char]) {
				if (!charsConfig[character]) {
					charsConfig[character] = {};
				}
				explored[char] = true;
				for (const key in obj[char]) {
					charsConfig[character][key] = true;
					startExplore(key);
				}
			}
		}
		if (obj[character]) {
			startExplore(character);
		}
	}
	let output = ``;
	for (let index = 0; index < baseStr.length; index++) {
		const element = baseStr[index];
		let hasFound = false;
		for (let index = 0; index < 26; index++) {
			const character = String.fromCharCode(index + 97);
			if (charsConfig[character] && charsConfig[character][element]) {
				output += character;
				hasFound = true;
				break;
			}
		}
		if (!hasFound) {
			output += element;
		}
	}

	return output;
};

console.log(
	smallestEquivalentString((s1 = 'leetcode'), (s2 = 'programs'), (baseStr = 'sourcecode'))
);

console.log(smallestEquivalentString((s1 = 'parker'), (s2 = 'morris'), (baseStr = 'parser')));
console.log(smallestEquivalentString((s1 = 'hello'), (s2 = 'world'), (baseStr = 'hold')));
