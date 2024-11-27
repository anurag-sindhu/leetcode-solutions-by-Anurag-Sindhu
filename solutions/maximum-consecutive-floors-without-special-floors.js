var maxConsecutive = function (bottom, top, special) {
    special.sort((a, b) => a - b);
    let startingFloor = bottom;
    let maxFloor = 0;
    for (let index = 0; index < special.length; index++) {
        const consecutiveFloors = special[index] - startingFloor;
        maxFloor = Math.max(maxFloor, consecutiveFloors);
        startingFloor = special[index] + 1;
    }
    maxFloor = Math.max(maxFloor, top - startingFloor + 1);
    return maxFloor;
};

console.log(maxConsecutive((bottom = 2), (top = 9), (special = [4, 6])) === 3);
console.log(maxConsecutive((bottom = 6), (top = 8), (special = [7, 6, 8])) === 0);
console.log(maxConsecutive(28, 50, [35, 48]));
