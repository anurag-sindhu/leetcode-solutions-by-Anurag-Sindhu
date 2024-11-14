function radixSort(nums) {
	const biggestLength = (function() {
		let len = 0;
		for (const iterator of nums) {
			if (String(iterator).length > len) {
				len = String(iterator).length;
			}
		}
		return len;
	})();
	nums = nums.map((value) => {
		let currLength = String(value).length;
		let str = ``;
		if (currLength < biggestLength) {
			while (biggestLength - currLength > 0) {
				currLength++;
				str += '0';
			}
			return `${str}${value}`;
		}
		return String(value);
	});

	for (let index = biggestLength - 1; index >= 0; index--) {
		const arr = new Array(10);
		for (const iterator of nums) {
			const place = iterator[index];
			if (!arr[place]) {
				arr[place] = [];
			}
			arr[place].push(iterator);
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

console.log(radixSort([ 2, 73, 51, 14 ]));
