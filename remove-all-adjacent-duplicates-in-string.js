var removeDuplicates = function(array) {
	const storage = [];
	let storageIndex = null;
	for (let index = 0; index < array.length; index++) {
		if (storageIndex === null) {
			storageIndex = 0;
			storage[storageIndex] = array[index];
		} else {
			const lastElement = storage[storageIndex];
			if (lastElement === array[index]) {
				storage[storageIndex] = null;
				if (storageIndex === 0) {
					storageIndex = null;
				} else {
					storageIndex--;
				}
			} else {
				storage[++storageIndex] = array[index];
			}
		}
	}
	let output = ``;
	for (const iterator of storage) {
		if (iterator) {
			output += iterator;
		}
	}
	return output;
};

console.log(removeDuplicates((s = 'abbbabaaa')) === 'ababa');
console.log(removeDuplicates((s = 'aaaaaaaa')));
console.log(removeDuplicates((s = 'abbaca')));
console.log(removeDuplicates((s = 'azxxzy')));
