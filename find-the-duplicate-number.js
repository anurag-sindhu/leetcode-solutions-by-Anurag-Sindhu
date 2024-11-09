var findDuplicate = function(nums) {
	for (let index = 0; index < nums.length; index++) {
		if (nums[index] !== index + 1) {
			let store = nums[index];
			if (nums[store - 1] === store) {
				return store;
			} else {
				let tempIndex = index;
				while (store !== index + 1) {
					const store2 = nums[store - 1];
					nums[store - 1] = store;
					nums[tempIndex] = store2;
					store = nums[index];
					console.log({ nums });
				}
				console.log({ nums });
			}
		}
	}
	return;
};

console.log(findDuplicate((nums = [ 3, 2, 2, 2, 4 ])) === 2);
console.log(findDuplicate((nums = [ 2, 1, 2 ])) === 2);
console.log(findDuplicate((nums = [ 1, 3, 4, 2, 2 ])) === 2);

console.log(findDuplicate((nums = [ 3, 1, 3, 4, 2 ])) === 3);
