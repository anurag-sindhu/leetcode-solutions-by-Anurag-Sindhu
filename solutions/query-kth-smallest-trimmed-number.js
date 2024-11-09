function radixSort(nums) {
	const biggestLength = (function() {
		let len = 0;
		for (const { num } of nums) {
			if (String(num).length > len) {
				len = String(num).length;
			}
		}
		return len;
	})();
	nums = nums.map((value) => {
		let currLength = String(value.num).length;
		let str = ``;
		if (currLength < biggestLength) {
			while (biggestLength - currLength > 0) {
				currLength++;
				str += '0';
			}
			return { num: `${str}${value.num}`, index: value.index };
		}
		return { index: value.index, num: String(value.num) };
	});

	for (let index = biggestLength - 1; index >= 0; index--) {
		const arr = new Array(10);
		for (const { num, index: internalIndex } of nums) {
			const place = num[index];
			if (!arr[place]) {
				arr[place] = [];
			}
			arr[place].push({ num, index: internalIndex });
		}
		nums = (function() {
			const newArr = [];
			for (let index = 0; index < arr.length; index++) {
				if (arr[index] && arr[index].length) {
					for (const childIterator of arr[index]) {
						newArr.push(childIterator);
					}
				}
			}
			return newArr;
		})();
	}
	return nums;
}

function smallestTrimmedNumbers(nums, queries) {
	const output = [];
	const len = nums[0].length;
	for (const [ k, trim ] of queries) {
		const newArray = (function() {
			const arr = [];
			for (let index = 0; index < nums.length; index++) {
				const iterator = nums[index];
				arr.push({ num: iterator.substring(len - trim), index });
			}
			return arr;
		})();
		const radixSorted = radixSort(newArray);
		const smallesKthNumber = radixSorted[k - 1];

		output.push(smallesKthNumber.index);
	}
	return output;
}

console.log(
	smallestTrimmedNumbers(
		[
			'89288488870527604910029',
			'36097185739782752175822',
			'66626740310751086142991',
			'39210310199276100943112',
			'27763774389382535382104',
			'38417381130871656561097',
			'88045540666254006395713',
			'95788007927435793172832',
			'15831923319620654311625',
			'45043895456202186804606',
			'87291364237858759125697',
			'88163116582250002569968',
			'00507332488046565482379',
			'57170661333341274356658',
			'06401271520738451116188',
			'21731485952024837866860'
		],
		[ [ 10, 22 ] ]
	)
);

console.log(
	smallestTrimmedNumbers((nums = [ '24', '37', '96', '04' ]), (queries = [ [ 2, 1 ], [ 2, 2 ] ]))
);
console.log(
	smallestTrimmedNumbers(
		[
			'325240361872',
			'440618160237',
			'785744447413',
			'820980201297',
			'470082520306',
			'874146483840',
			'425300857082',
			'088636787077',
			'813218016629',
			'459000328006',
			'188683382600'
		],
		[ [ 1, 1 ], [ 3, 1 ], [ 11, 10 ] ]
	)
);
//[5,0,9]
console.log(
	smallestTrimmedNumbers(
		[
			'325240361872',
			'440618160237',
			'785744447413',
			'820980201297',
			'470082520306',
			'874146483840',
			'425300857082',
			'088636787077',
			'813218016629',
			'459000328006',
			'188683382600'
		],
		[
			[ 6, 7 ],
			[ 4, 4 ],
			[ 1, 8 ],
			[ 11, 10 ],
			[ 4, 8 ],
			[ 11, 6 ],
			[ 1, 1 ],
			[ 3, 1 ],
			[ 11, 10 ]
		]
	)
);

console.log(
	smallestTrimmedNumbers(
		(nums = [ '102', '473', '251', '814' ]),
		(queries = [ [ 1, 1 ], [ 2, 3 ], [ 4, 2 ], [ 1, 2 ] ])
	)
);
console.log(
	smallestTrimmedNumbers(
		[
			'89288488870527604910029',
			'36097185739782752175822',
			'66626740310751086142991',
			'39210310199276100943112',
			'27763774389382535382104',
			'38417381130871656561097',
			'88045540666254006395713',
			'95788007927435793172832',
			'15831923319620654311625',
			'45043895456202186804606',
			'87291364237858759125697',
			'88163116582250002569968',
			'00507332488046565482379',
			'57170661333341274356658',
			'06401271520738451116188',
			'21731485952024837866860'
		],
		[
			[ 3, 17 ],
			[ 10, 22 ],
			[ 13, 21 ],
			[ 12, 16 ],
			[ 1, 23 ],
			[ 10, 19 ],
			[ 12, 21 ],
			[ 10, 5 ],
			[ 12, 9 ],
			[ 12, 10 ],
			[ 9, 5 ],
			[ 12, 8 ],
			[ 14, 6 ],
			[ 5, 10 ],
			[ 11, 4 ],
			[ 15, 15 ],
			[ 13, 9 ],
			[ 1, 19 ],
			[ 5, 12 ],
			[ 10, 15 ],
			[ 4, 18 ],
			[ 4, 3 ],
			[ 16, 13 ],
			[ 6, 19 ],
			[ 4, 18 ],
			[ 2, 6 ],
			[ 15, 12 ]
		]
	)
);
