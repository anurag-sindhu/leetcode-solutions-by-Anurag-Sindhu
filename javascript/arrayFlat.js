function myFlatOneStep(arr, index = 0) {
	let newArray = [];
	for (const iterator of arr) {
		if (Array.isArray(iterator)) {
			newArray = [ ...newArray, ...iterator ];
		} else {
			newArray.push(iterator);
		}
	}
	return newArray;
}

function myFlatWithNoDepth(arr) {
	let newArray = [];
	function myFlatHelper(arr) {
		for (const iterator of arr) {
			if (Array.isArray(iterator)) {
				myFlatHelper(iterator);
			} else {
				newArray.push(iterator);
			}
		}
	}
	myFlatHelper(arr);
	return newArray;
}

function myFlat(arr, depth) {
	let newArray = [];
	function myFlatHelper(arr, currentDepth = 0) {
		for (let index = 0; index < arr.length; index++) {
			const iterator = arr[index];
			if (Array.isArray(iterator) && currentDepth < depth) {
				myFlatHelper(iterator, currentDepth + 1);
			} else {
				newArray.push(iterator);
			}
		}
	}
	myFlatHelper(arr);
	return newArray;
}

Array.prototype.mySmartFlat = function(depth) {
	function myFlat(arr, depth) {
		let newArray = [];
		function myFlatHelper(arr, currentDepth = 0) {
			for (let index = 0; index < arr.length; index++) {
				const iterator = arr[index];
				if (Array.isArray(iterator) && currentDepth < depth) {
					myFlatHelper(iterator, currentDepth + 1);
				} else {
					newArray.push(iterator);
				}
			}
		}
		myFlatHelper(arr);
		return newArray;
	}
	const res = myFlat(this, depth);
	return res;
};

const arr1 = [ 0, 1, 2, [ 3, [ 3, 4 ] ] ];
console.log(arr1.mySmartFlat(1));

let res;
res = myFlat([ [ 1, [ 1, [ 1, 2 ] ] ], 3 ], 2);
console.log(res);
res = myFlat([ [ 1, [ 1, 2 ] ], 3 ], 1);
// [1, [1,2], 3]
console.log(res);
res = myFlat([ [ 1, 2 ], 3 ]);
console.log(res);
