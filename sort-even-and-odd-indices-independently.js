const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var sortEvenOdd = function(nums) {
    const memoryForOdd = [];
    const memoryForEven = [];
    let totalElements = nums.length;
    for (let index = 0; index < totalElements; index += 2) {
        if (memoryForOdd[nums[index]]) {
            memoryForOdd[nums[index]].count += 1;
        } else {
            memoryForOdd[nums[index]] = { count: 1 };
        }
    }

    for (let index = 1; index < totalElements; index += 2) {
        if (memoryForEven[nums[index]]) {
            memoryForEven[nums[index]].count += 1;
        } else {
            memoryForEven[nums[index]] = { count: 1 };
        }
    }

    let output = [];
    let oddMemoryIndex = 0;
    let evenMemoryIndex = 0;
    let startIndex = 0;
    for (let index = 0; index < memoryForOdd.length; index++) {
        let iterator = memoryForOdd[index];
        if (iterator !== undefined) {
            let count = iterator.count;
            while (count--) {
                output[startIndex] = index;
                startIndex += 2;
            }
        }
    }
    let startIndexForEven = 1;
    for (let index = memoryForEven.length - 1; index >= 0; index--) {
        let iterator = memoryForEven[index];
        if (iterator !== undefined) {
            let count = iterator.count;
            while (count--) {
                output[startIndexForEven] = index;
                startIndexForEven += 2;
            }
        }
    }
    return output;
};
console.log(areTwoArrayEqual(sortEvenOdd((nums = [4, 1, 1, 1, 2, 3])), [1, 3, 2, 1, 4, 1]));

console.log(areTwoArrayEqual(sortEvenOdd((nums = [4, 1, 1, 2, 2, 3])), [1, 3, 2, 2, 4, 1]));
console.log(areTwoArrayEqual(sortEvenOdd((nums = [4, 1, 2, 3])), [2, 3, 4, 1]));
console.log(areTwoArrayEqual(sortEvenOdd((nums = [2, 1])), [2, 1]));
