var countAsterisks = function(str) {
	let verticalBarCount = 0;
	let asteriskCount = 0;
	for (let index = 0; index < str.length; index++) {
		if (str[index] === '|') {
			verticalBarCount++;
		} else {
			if (verticalBarCount % 2 === 0) {
				if (str[index] === '*') {
					asteriskCount++;
				}
			}
		}
	}
	return asteriskCount;
};

console.log(countAsterisks('l|*e*et|c**o|*de|'));
console.log(countAsterisks('iamprogrammer'));
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'));
