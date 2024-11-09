var maxNumberOfFamilies = function (n, reservedSeats) {
    const reservedSeatsMapping = {};
    for (const [row, column] of reservedSeats) {
        if (!reservedSeatsMapping[row]) {
            reservedSeatsMapping[row] = {};
        }
        reservedSeatsMapping[row][column] = true;
    }
    let count = 0;
    for (let row = 1; row <= n; row++) {
        if (
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][2]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][3]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][4]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][5])
        ) {
            count++;
            if (
                (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][6]) &&
                (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][7]) &&
                (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][8]) &&
                (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][9])
            ) {
                count++;
            }
        } else if (
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][4]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][5]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][6]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][7])
        ) {
            count++;
        } else if (
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][6]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][7]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][8]) &&
            (!reservedSeatsMapping[row] || !reservedSeatsMapping[row][9])
        ) {
            count++;
        }
    }
    return count;
};

var maxNumberOfFamilies1 = function (n, reservedSeats) {
    const reservedSeatsMapping = {};
    for (const [row, column] of reservedSeats) {
        reservedSeatsMapping[`${row}_${column}`] = true;
    }
    let count = 0;
    for (let row = 1; row <= n; row++) {
        if (
            !reservedSeatsMapping[`${row}_2`] &&
            !reservedSeatsMapping[`${row}_3`] &&
            !reservedSeatsMapping[`${row}_4`] &&
            !reservedSeatsMapping[`${row}_5`]
        ) {
            count++;
            if (
                !reservedSeatsMapping[`${row}_6`] &&
                !reservedSeatsMapping[`${row}_7`] &&
                !reservedSeatsMapping[`${row}_8`] &&
                !reservedSeatsMapping[`${row}_9`]
            ) {
                count++;
            }
        } else if (
            !reservedSeatsMapping[`${row}_4`] &&
            !reservedSeatsMapping[`${row}_5`] &&
            !reservedSeatsMapping[`${row}_6`] &&
            !reservedSeatsMapping[`${row}_7`]
        ) {
            count++;
        } else if (
            !reservedSeatsMapping[`${row}_6`] &&
            !reservedSeatsMapping[`${row}_7`] &&
            !reservedSeatsMapping[`${row}_8`] &&
            !reservedSeatsMapping[`${row}_9`]
        ) {
            count++;
        }
    }
    return count;
};

var maxNumberOfFamilies11 = function (n, reservedSeats) {
    reservedSeats.sort(([a], [b]) => a - b);
    let reservedSeatIndex = 0;
    function getReservedSeatsMapping(forRow) {
        const config = {};
        for (; reservedSeatIndex < reservedSeats.length; reservedSeatIndex++) {
            const [row, column] = reservedSeats[reservedSeatIndex];
            if (row !== forRow) {
                break;
            } else {
                config[`${row}_${column}`] = true;
            }
        }
        return config;
    }

    let count = 0;
    for (let row = 1; row <= n; row++) {
        const reservedSeatsMapping = getReservedSeatsMapping(row);
        if (
            !reservedSeatsMapping[`${row}_2`] &&
            !reservedSeatsMapping[`${row}_3`] &&
            !reservedSeatsMapping[`${row}_4`] &&
            !reservedSeatsMapping[`${row}_5`]
        ) {
            count++;
            if (
                !reservedSeatsMapping[`${row}_6`] &&
                !reservedSeatsMapping[`${row}_7`] &&
                !reservedSeatsMapping[`${row}_8`] &&
                !reservedSeatsMapping[`${row}_9`]
            ) {
                count++;
            }
        } else if (
            !reservedSeatsMapping[`${row}_4`] &&
            !reservedSeatsMapping[`${row}_5`] &&
            !reservedSeatsMapping[`${row}_6`] &&
            !reservedSeatsMapping[`${row}_7`]
        ) {
            count++;
        } else if (
            !reservedSeatsMapping[`${row}_6`] &&
            !reservedSeatsMapping[`${row}_7`] &&
            !reservedSeatsMapping[`${row}_8`] &&
            !reservedSeatsMapping[`${row}_9`]
        ) {
            count++;
        }
    }
    return count;
};

console.log(
    maxNumberOfFamilies(4, [
        [4, 3],
        [1, 4],
        [4, 6],
        [1, 7]
    ]) === 4
);
console.log(
    maxNumberOfFamilies(2, [
        [1, 6],
        [1, 8],
        [1, 3],
        [2, 3],
        [1, 10],
        [1, 2],
        [1, 5],
        [2, 2],
        [2, 4],
        [2, 10],
        [1, 7],
        [2, 5]
    ]) === 1
);

console.log(
    maxNumberOfFamilies(
        (n = 3),
        (reservedSeats = [
            [1, 2],
            [1, 3],
            [1, 8],
            [2, 6],
            [3, 1],
            [3, 10]
        ])
    ) === 4
);

console.log(
    maxNumberOfFamilies(2, [
        [1, 6],
        [1, 8],
        [1, 3],
        [2, 3],
        [1, 10],
        [1, 2],
        [1, 5],
        [2, 2],
        [2, 4],
        [2, 10],
        [1, 7],
        [2, 5]
    ])
);

console.log(
    maxNumberOfFamilies(
        (n = 4),
        (reservedSeats = [
            [4, 3],
            [1, 4],
            [4, 6],
            [1, 7]
        ])
    )
);
console.log(
    maxNumberOfFamilies(
        (n = 2),
        (reservedSeats = [
            [2, 1],
            [1, 8],
            [2, 6]
        ])
    )
);
