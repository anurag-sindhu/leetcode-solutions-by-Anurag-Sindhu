var carFleet = function (target, position, speed) {
    const speedPositionMapping = (function () {
        const config = {};
        for (let index = 0; index < position.length; index++) {
            config[position[index]] = speed[index];
        }
        return config;
    })();
    const sortedPosition = position.sort((a, b) => b - a);
    const timeRequired = [];
    for (const iterator of sortedPosition) {
        timeRequired.push((target - iterator) / speedPositionMapping[iterator]);
    }
    let tempBiggerNumber = timeRequired[0];
    let fleet = 1;
    for (let index = 1; index < timeRequired.length; index++) {
        if (timeRequired[index] > tempBiggerNumber) {
            fleet += 1;
            tempBiggerNumber = timeRequired[index];
        }
    }
    return fleet;
};

/**
 * [   1,   1,   1,   2,   2,   2, ]
 * [   96,   49,   25, ]
 * [   6,   3,   5, ]
 * [   1,   1,   7,   3,   12, ]
 */
console.log(
    carFleet((target = 12), (position = [10, 8, 0, 5, 3]), (speed = [2, 4, 1, 1, 3])) === 3,
);
console.log(carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]) === 6);
console.log(carFleet((target = 100), (position = [0, 2, 4]), (speed = [4, 2, 1])) === 1);
console.log(carFleet(10, [0, 4, 2], [2, 1, 3]) === 1);
console.log(carFleet((target = 10), (position = [3]), (speed = [3])) === 1);
