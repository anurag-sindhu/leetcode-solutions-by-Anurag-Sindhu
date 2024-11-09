function fillArray(arr, from, to, withPassenger) {
	for (let index = from; index <= to; index++) {
		if (index === to) {
			if (!arr[index]) {
				arr[index] = { passenger: withPassenger, peopleToLeave: withPassenger };
			} else {
				arr[index].passenger += withPassenger;
				arr[index].peopleToLeave = (arr[index].peopleToLeave || 0) + withPassenger;
			}
		} else {
			if (!arr[index]) {
				arr[index] = { passenger: withPassenger };
			} else {
				arr[index].passenger += withPassenger;
			}
		}
	}
}
var carPooling = function(trips, capacity) {
	const arr = [];
	for (const [ numPassengers, from, to ] of trips) {
		// const totalPassengerAtFrom = (arr[from] && arr[from].passenger) || 0;
		// const totalPassengerToLeaveHereAtFrom = (arr[from] && arr[from].peopleToLeave) || 0;
		// const totalPassengerAtTo = (arr[to] && arr[to].passenger) || 0;
		// const totalPassengerToLeaveHereAtTo = (arr[to] && arr[to].peopleToLeave) || 0;
		// if (
		// 	totalPassengerAtFrom - totalPassengerToLeaveHereAtFrom + numPassengers <= capacity &&
		// 	totalPassengerAtTo - totalPassengerToLeaveHereAtTo + numPassengers <= capacity
		// ) {
		// 	fillArray(arr, from, to, numPassengers);
		// } else {
		// 	return false;
		// }
		fillArray(arr, from, to, numPassengers);
	}
	for (let index = 0; index < 1000; index++) {
		if (arr[index]) {
			const passenger = arr[index].passenger;
			const peopleToLeave = arr[index].peopleToLeave || 0;
			if (passenger - (peopleToLeave || 0) > capacity) {
				return false;
			}
		}
	}
	return true;
};
console.log(
	carPooling(
		(trips = [ [ 9, 3, 4 ], [ 9, 1, 7 ], [ 4, 2, 4 ], [ 7, 4, 5 ] ]),
		(capacity = 23)
	) === true
);
console.log(
	carPooling((trips = [ [ 7, 5, 6 ], [ 6, 7, 8 ], [ 10, 1, 6 ] ]), (capacity = 16)) === false
);
console.log(carPooling((trips = [ [ 2, 1, 5 ], [ 3, 5, 7 ] ]), (capacity = 3)) === true);

console.log(carPooling((trips = [ [ 2, 1, 5 ], [ 3, 3, 7 ] ]), (capacity = 4)) === false);
console.log(carPooling((trips = [ [ 2, 1, 5 ], [ 3, 3, 7 ] ]), (capacity = 5)) === true);
