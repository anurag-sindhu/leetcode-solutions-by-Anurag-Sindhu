var survivedRobotsHealths = function (positions, healths, directions) {
    const positionsDirectionMapping = {};
    const positionsHealthsMapping = {};
    for (let index = 0; index < positions.length; index++) {
        const element = positions[index];
        positionsDirectionMapping[element] = directions[index];
    }
    for (let index = 0; index < healths.length; index++) {
        const element = healths[index];
        positionsHealthsMapping[positions[index]] = element;
    }
    positions.sort((a, b) => a - b);
    let pointer1 = 0;
    let pointer2 = null;
    for (let index = 1; index < positions.length; index++) {
        pointer2 = index;
        if (
            positionsDirectionMapping[positions[pointer2]] !==
            positionsDirectionMapping[positions[pointer1]]
        ) {
            break;
        }
        pointer1 = index;
    }
    while (pointer1 !== pointer2 && pointer1 >= 0 && pointer2 < positions.length) {
        if (
            positionsHealthsMapping[positions[pointer2]] ===
            positionsHealthsMapping[positions[pointer1]]
        ) {
            pointer2++;
            pointer1--;
        } else if (
            positionsHealthsMapping[positions[pointer2]] >
            positionsHealthsMapping[positions[pointer1]]
        ) {
            pointer1--;
            positionsHealthsMapping[positions[pointer2]] -= 1;
        } else if (
            positionsHealthsMapping[positions[pointer2]] <
            positionsHealthsMapping[positions[pointer1]]
        ) {
            pointer2++;
            positionsHealthsMapping[positions[pointer1]] -= 1;
        }
    }
    const arr = [];
    if (pointer1 === pointer2) {
        while (pointer1 >= 0) {
            arr.push(positionsHealthsMapping[positions[pointer1--]]);
        }
    } else {
        while (pointer1 >= 0) {
            arr.push(positionsHealthsMapping[positions[pointer1--]]);
        }
        while (pointer2 < positions.length) {
            arr.push(positionsHealthsMapping[positions[pointer2++]]);
        }
    }
    return arr;
};

console.log(
    survivedRobotsHealths(
        (positions = [1, 2, 5, 6]),
        (healths = [10, 10, 11, 11]),
        (directions = 'RLRL'),
    ),
);
console.log(
    survivedRobotsHealths(
        (positions = [5, 4, 3, 2, 1]),
        (healths = [2, 17, 9, 15, 10]),
        (directions = 'RRRRR'),
    ),
);

console.log(
    survivedRobotsHealths(
        (positions = [3, 5, 2, 6]),
        (healths = [10, 10, 15, 12]),
        (directions = 'RLRL'),
    ),
);
