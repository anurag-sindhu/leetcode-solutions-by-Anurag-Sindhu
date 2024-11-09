var trimMean = function(arr) {
	const elementsToBeRemoved = arr.length * 0.05;
	let totalSum = 0;
	const newArray = [];
	for (let index = 0; index < arr.length; index++) {
		totalSum += arr[index];
		if (newArray[arr[index]] === undefined) {
			newArray[arr[index]] = {
				count: 0
			};
		}
		newArray[arr[index]].count += 1;
	}
	let totalSumFromStartOfNewArray = 0;
	let totalSumFromEndOfNewArray = 0;
	let tempElementsToBeRemoved = elementsToBeRemoved;
	for (let index = 0; index < newArray.length; index++) {
		if (newArray[index] !== undefined) {
			const totalCountItHolds = newArray[index].count;
			if (totalCountItHolds === tempElementsToBeRemoved) {
				totalSumFromStartOfNewArray += totalCountItHolds * index;
				break;
			} else if (totalCountItHolds > tempElementsToBeRemoved) {
				totalSumFromStartOfNewArray += tempElementsToBeRemoved * index;
				break;
			} else {
				totalSumFromStartOfNewArray += totalCountItHolds * index;
				tempElementsToBeRemoved -= totalCountItHolds;
			}
		}
	}
	tempElementsToBeRemoved = elementsToBeRemoved;

	for (let index = newArray.length - 1; index >= 0; index--) {
		if (newArray[index] !== undefined) {
			const totalCountItHolds = newArray[index].count;
			if (totalCountItHolds === tempElementsToBeRemoved) {
				totalSumFromEndOfNewArray += totalCountItHolds * index;
				break;
			} else if (totalCountItHolds > tempElementsToBeRemoved) {
				totalSumFromEndOfNewArray += tempElementsToBeRemoved * index;
				break;
			} else {
				totalSumFromEndOfNewArray += totalCountItHolds * index;
				tempElementsToBeRemoved -= totalCountItHolds;
			}
		}
	}

	return ((totalSum - totalSumFromStartOfNewArray - totalSumFromEndOfNewArray) /
		(arr.length - elementsToBeRemoved * 2)).toFixed(5);
};

console.log(trimMean((arr = [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3 ])));
console.log(
	trimMean(
		(arr = [
			6,
			0,
			7,
			0,
			7,
			5,
			7,
			8,
			3,
			4,
			0,
			7,
			8,
			1,
			6,
			8,
			1,
			1,
			2,
			4,
			8,
			1,
			9,
			5,
			4,
			3,
			8,
			5,
			10,
			8,
			6,
			6,
			1,
			0,
			6,
			10,
			8,
			2,
			3,
			4
		])
	)
);
console.log(trimMean((arr = [ 6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0 ])));
