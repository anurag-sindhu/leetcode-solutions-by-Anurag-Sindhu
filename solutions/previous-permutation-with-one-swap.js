var prevPermOpt1 = function(array) {
	let indexToReplace = array.length - 1;
	for (let index = array.length - 1; index > 0; index--) {
		const element = array[index];
		const secondLastElement = array[index - 1];
		if (element < secondLastElement) {
			let elementToReplace = array[indexToReplace];
			let elementToBeReplaced = array[index - 1];
			while (elementToReplace === elementToBeReplaced) {
				elementToReplace = array[--indexToReplace];
			}
			while (elementToReplace === array[indexToReplace - 1]) {
				indexToReplace--;
			}
			const store = array[index - 1];
			array[index - 1] = array[indexToReplace];
			array[indexToReplace] = store;
			break;
		}
	}
	return array;
};
console.log(prevPermOpt1((arr = [ 3, 1, 2, 2, 2, 3 ]))); //[2,1,3,2,2,3]
console.log(prevPermOpt1((arr = [ 3, 1, 1, 3 ]))); //[1,3,1,3]
console.log(prevPermOpt1((arr = [ 1, 9, 4, 6, 7 ]))); //[1,7,4,6,9]
console.log(prevPermOpt1((arr = [ 1, 1, 5 ]))); //[ 1, 1, 5 ]
console.log(prevPermOpt1((arr = [ 3, 2, 1 ]))); //[3,1,2]
