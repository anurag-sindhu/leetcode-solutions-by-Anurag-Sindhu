var removeCoveredIntervals = function(intervals) {
	let lowest = Infinity;
	let highest = -Infinity;
	const arr = [];
	for (const [ from, till ] of intervals) {
		if (from < lowest) {
			lowest = from;
		}
		if (till > highest) {
			highest = till;
		}
		if (!arr[from]) {
			arr[from] = {};
		}
		if (arr[from].till) {
			const existingTill = arr[from].till;
			if (!arr[from].skipped) {
				arr[from].skipped = 0;
			}
			arr[from].skipped += 1;
			if (existingTill < till) {
				arr[from].till = till;
			}
		} else {
			arr[from].till = till;
		}
	}
	let skippedIntervals = 0;
	let tempTarget = null;
	for (let index = lowest; index <= highest; index++) {
		if (arr[index]) {
			if (tempTarget === null) {
				tempTarget = arr[index].till;
				skippedIntervals += arr[index].skipped || 0;
			} else {
				if (tempTarget >= arr[index].till) {
					skippedIntervals += arr[index].skipped || 0 + 1;
				} else {
					tempTarget = arr[index].till;
					skippedIntervals += arr[index].skipped || 0;
				}
			}
		}
	}
	return intervals.length - skippedIntervals;
};

console.log(
	removeCoveredIntervals(
		(intervals = [
			[ 1, 4 ],
			[ 2, 3 ],
			[ 3, 4 ],
			[ 3, 5 ],
			[ 3, 7 ],
			[ 4, 5 ],
			[ 4, 6 ],
			[ 7, 8 ]
		])
	) === 3
);
console.log(removeCoveredIntervals((intervals = [ [ 1, 4 ], [ 2, 7 ], [ 3, 8 ] ])) === 3);

console.log(
	removeCoveredIntervals(
		(intervals = [ [ 1, 4 ], [ 2, 3 ], [ 3, 4 ], [ 3, 7 ], [ 4, 5 ], [ 4, 7 ], [ 7, 8 ] ])
	) === 3
);
console.log(
	removeCoveredIntervals(
		(intervals = [ [ 1, 3 ], [ 2, 3 ], [ 4, 8 ], [ 4, 5 ], [ 3, 4 ], [ 3, 7 ], [ 7, 8 ] ])
	) === 3
);
console.log(
	removeCoveredIntervals(
		(intervals = [ [ 1, 3 ], [ 2, 3 ], [ 4, 5 ], [ 3, 4 ], [ 3, 6 ], [ 3, 8 ] ])
	) === 2
);
console.log(
	removeCoveredIntervals((intervals = [ [ 1, 4 ], [ 2, 5 ], [ 4, 8 ], [ 3, 7 ], [ 5, 8 ] ]))
);
console.log(removeCoveredIntervals((intervals = [ [ 1, 4 ], [ 3, 6 ], [ 2, 6 ], [ 3, 8 ] ])));
console.log(removeCoveredIntervals((intervals = [ [ 1, 4 ], [ 3, 6 ], [ 2, 8 ] ])));
console.log(removeCoveredIntervals((intervals = [ [ 1, 4 ], [ 2, 3 ] ])));
