const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var minOperations = function(nums, queries) {
    if (nums.length === 1) {
        let output = [];
        for (const iterator of queries) {
            output.push(Math.abs(iterator - nums[0]));
        }
        return output;
    }
    nums.sort((a, b) => a - b);
    function findIndex(num, arr = nums, index = null) {
        const midIndex = Math.floor(arr.length / 2);
        if (arr.length === 1) {
            if (index === null) {
                return index || 0;
            }
            return index + 1;
        }
        if (arr.length === 2) {
            if (arr[1] <= num || arr[0] <= num) {
                return (index || 0) + 1;
            }
            return index || 0;
        }
        if (arr[midIndex] === num) {
            if (index === null) {
                return (index || 0) + midIndex;
            }
            return (index || 0) + 1 + midIndex;
        } else if (arr[midIndex] < num) {
            if (index === null) {
                return findIndex(num, arr.slice(midIndex + 1), (index || 0) + midIndex);
            }
            return findIndex(num, arr.slice(midIndex + 1), index + 1 + midIndex);
        } else {
            return findIndex(num, arr.slice(0, midIndex), index);
        }
    }
    let totalSum = 0;
    let tempSum = 0;
    const sumArray = [];
    for (const iterator of nums) {
        totalSum += iterator;
        tempSum += iterator;
        sumArray.push(tempSum);
    }
    const output = [];
    for (const iterator of queries) {
        if (iterator < nums[0] || iterator > nums[nums.length - 1]) {
            output.push(Math.abs(iterator * nums.length - totalSum));
        } else {
            const index = findIndex(iterator);
            let tempOutput = 0;
            tempOutput += iterator * (index + 1) - sumArray[index];
            tempOutput += totalSum - sumArray[index] - iterator * (nums.length - index - 1);
            output.push(tempOutput);
        }
    }
    return output;
};

console.log(
    areTwoArrayEqual(
        [
            607,
            855,
            747,
            655,
            633,
            825,
            943,
            905,
            633,
            1227,
            685,
            1009,
            675,
            805,
            905,
            1331,
            655,
            625,
            619,
            607,
            929,
            605,
            1179,
            611,
            685,
            653,
            833,
            639,
            949,
            819,
            689,
            851,
            759,
            699,
            639,
            655,
            855,
            661,
            605,
            833,
            855,
            869,
            783,
            655,
            1097,
            839,
            1009,
            1179,
            1031,
            855,
            721,
            679,
            723,
            783,
            697,
            685,
            833,
            833,
            655,
            833
        ],
        minOperations(
            [
                47,
                50,
                97,
                58,
                87,
                72,
                41,
                63,
                41,
                51,
                17,
                21,
                7,
                100,
                69,
                66,
                79,
                92,
                84,
                9,
                57,
                26,
                26,
                28,
                83,
                38
            ],
            [
                64,
                82,
                20,
                22,
                64,
                7,
                38,
                92,
                39,
                28,
                22,
                3,
                41,
                46,
                47,
                50,
                88,
                51,
                9,
                49,
                38,
                67,
                26,
                65,
                89,
                27,
                71,
                25,
                77,
                72,
                65,
                41,
                84,
                68,
                51,
                26,
                84,
                24,
                79,
                41,
                96,
                83,
                92,
                9,
                93,
                84,
                35,
                70,
                74,
                79,
                37,
                38,
                26,
                26,
                41,
                26
            ]
        )
    )
);
console.log(minOperations((nums = [2, 9, 6, 3]), (queries = [1])));
console.log(minOperations((nums = [3, 1, 6, 8]), (queries = [1, 5])));
console.log(minOperations((nums = [3, 1, 6, 8]), (queries = [6])));
console.log(minOperations((nums = [3, 1, 6, 8]), (queries = [5])));
