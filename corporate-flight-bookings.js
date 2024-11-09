var corpFlightBookings = function(bookings, n) {
	const obj = {};
	for (const [ first, last, seat ] of bookings) {
		if (!obj[first]) {
			obj[first] = {};
		}
		if (!obj[first][last]) {
			obj[first][last] = seat;
		} else {
			obj[first][last] += seat;
		}
	}
	const arr = new Array(n).fill(0);
	for (const key in obj) {
		for (const childKey in obj[key]) {
			const from = Number(key);
			const to = Number(childKey);
			const seat = obj[key][childKey];
			for (let index = from - 1; index < to; index++) {
				arr[index] += seat;
			}
		}
	}
	return arr;
};

console.log(
	corpFlightBookings(
		(bookings = [ [ 1, 2 * 10000, 10 ], [ 2, 2 * 10000, 20 ], [ 3, 2 * 10000, 25 ] ]),
		(n = 5)
	)
);
console.log(
	corpFlightBookings(
		(bookings = [ [ 1, 2, 10 ], [ 1, 4, 10 ], [ 2, 3, 20 ], [ 2, 5, 25 ] ]),
		(n = 5)
	)
);
console.log(corpFlightBookings((bookings = [ [ 2, 2, 30 ], [ 2, 2, 45 ] ]), (n = 2)));
console.log(corpFlightBookings((bookings = [ [ 1, 2, 10 ], [ 2, 3, 20 ], [ 2, 5, 25 ] ]), (n = 5)));
console.log(corpFlightBookings((bookings = [ [ 1, 2, 10 ], [ 2, 2, 15 ] ]), (n = 2)));
