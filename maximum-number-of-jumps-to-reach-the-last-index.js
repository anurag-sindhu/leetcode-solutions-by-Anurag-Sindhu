var maximumJumps = function (nums, target) {
    let leftPointer = 0;
    let lastReachedPointer = 0;
    let rightPointer = 1;
    let didReachedIndex = { 0: true };
    let steps = 0;
    let stepsArr = [0];
    while (rightPointer < nums.length) {
        const temp = nums[rightPointer] - nums[leftPointer];
        if (temp >= -1 * target && temp <= target) {
            steps += 1;
            leftPointer = rightPointer;
            didReachedIndex[rightPointer] = true;
            lastReachedPointer = rightPointer;
        } else {
            let index = rightPointer - 1;
            while (index >= 0) {
                const temp = nums[rightPointer] - nums[index];
                if (temp >= -1 * target && temp <= target && didReachedIndex[index] !== undefined) {
                    stepsArr[rightPointer] = stepsArr[index] + 1;
                    steps = Math.max(stepsArr[index] + 1);
                    leftPointer = index;
                    didReachedIndex[rightPointer] = true;
                    lastReachedPointer = rightPointer;
                    break;
                }
                index--;
            }
        }
        if (stepsArr[rightPointer] == undefined) {
            stepsArr.push(steps);
        }
        rightPointer += 1;
    }
    if (lastReachedPointer !== nums.length - 1 || steps === 0) {
        return -1;
    }
    return steps;
};

console.log(maximumJumps([1, 3, 4, 0, 2], 2) === 3);
console.log(maximumJumps([1, 2, 3, 0], 1) === 1);
console.log(maximumJumps([1, 0, 2, 3], 1) === 2);
console.log(maximumJumps([1, 0, 2], 1) === 1);
console.log(maximumJumps([0, 2, 1, 3], 1) === -1);
console.log(maximumJumps((nums = [1, 3, 6, 4, 1, 2]), (target = 2)) === 3);
console.log(maximumJumps((nums = [1, 3, 6, 4, 1, 2]), (target = 0)) === -1);
console.log(maximumJumps([0, 2, 1], 1) === 1);
console.log(maximumJumps([1, 2, 0], 1) === 1);
console.log(maximumJumps((nums = [1, 3, 6, 4, 1, 2]), (target = 3)) === 5);
