function minimumDeleteSumHelper(s1, s1Index, s2, s2Index, sum) {
	if (s1[s1Index] === undefined && s2[s2Index] === undefined) {
		return sum;
	}
	if (s1[s1Index] !== undefined && s2[s2Index] !== undefined) {
		if (s1[s1Index] === s2[s2Index]) {
			return minimumDeleteSumHelper(s1, s1Index + 1, s2, s2Index + 1, sum);
		}
		return Math.min(
			minimumDeleteSumHelper(s1, s1Index + 1, s2, s2Index, sum + s1.charCodeAt(s1Index)),
			minimumDeleteSumHelper(s1, s1Index, s2, s2Index + 1, sum + s2.charCodeAt(s2Index))
		);
	} else if (s1[s1Index] !== undefined) {
		return sum + s1.charCodeAt(s1Index);
	}
	return sum + s2.charCodeAt(s2Index);
}

var minimumDeleteSum = function(s1, s2) {
	const sum = minimumDeleteSumHelper(s1, 0, s2, 0, 0);
	return sum;
};

console.log(minimumDeleteSum('ccaccjp', 'fwosarcwge'));
console.log(minimumDeleteSum((s1 = 'sea'), (s2 = 'eat')));
console.log(minimumDeleteSum((s1 = 'delete'), (s2 = 'leet')));
