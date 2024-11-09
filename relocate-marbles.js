var relocateMarbles = function (nums, moveFrom, moveTo) {
    let maxNum = -Infinity;
    const positions = {};
    for (let index = 0; index < nums.length; index++) {
        positions[nums[index]] = true;
        maxNum = Math.max(maxNum, nums[index]);
    }
    for (let index = 0; index < moveFrom.length; index++) {
        maxNum = Math.max(maxNum, moveFrom[index]);
        maxNum = Math.max(maxNum, moveTo[index]);
        delete positions[moveFrom[index]];
        positions[moveTo[index]] = true;
    }
    return Object.keys(positions)
        .map((value) => Number(value))
        .sort((a, b) => a - b);
};

console.log(relocateMarbles((nums = [1, 6, 7, 8]), (moveFrom = [1, 7, 2]), (moveTo = [2, 9, 5])));
console.log(relocateMarbles((nums = [1, 1, 3, 3]), (moveFrom = [1, 3]), (moveTo = [2, 2])));
