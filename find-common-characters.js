var commonChars = function(words) {
	const obj = {};

	for (let index = 0; index < words.length; index++) {
		obj[index] = {};
		for (let charIndex = 0; charIndex < words[index].length; charIndex++) {
			if (!obj[index][words[index][charIndex]]) {
				obj[index][words[index][charIndex]] = 0;
			}
			obj[index][words[index][charIndex]] += 1;
		}
	}

	const totalCommonChars = obj[`0`];

	for (const key in obj) {
		if (key !== `0`) {
			for (const childKey in obj[key]) {
				const quantity = obj[key][childKey];
				const totalCommonCharsQuantity = totalCommonChars[childKey];
				if (quantity !== totalCommonCharsQuantity) {
					if (!totalCommonCharsQuantity) {
						continue;
					}
					if (!quantity) {
						delete totalCommonChars[childKey];
					} else if (totalCommonCharsQuantity > quantity) {
						totalCommonChars[childKey] = quantity;
					}
				}
			}
			for (const childKey in totalCommonChars) {
				const quantity = obj[key][childKey];
				const totalCommonCharsQuantity = totalCommonChars[childKey];
				if (quantity !== totalCommonCharsQuantity) {
					if (!totalCommonCharsQuantity) {
						continue;
					}
					if (!quantity) {
						delete totalCommonChars[childKey];
					} else if (totalCommonCharsQuantity > quantity) {
						totalCommonChars[childKey] = quantity;
					}
				}
			}
		}
	}

	const output = [];
	for (const key in totalCommonChars) {
		for (let index = 0; index < totalCommonChars[key]; index++) {
			output.push(key);
		}
	}
	return output;
};

console.log(commonChars((words = [ 'bella', 'label', 'roller' ])));
console.log(commonChars((words = [ 'cool', 'lock', 'cook' ])));
