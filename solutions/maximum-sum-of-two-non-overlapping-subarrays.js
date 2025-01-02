var maxSumTwoNoOverlapHelper = function (nums, firstLen, secondLen) {
    const leftToRightSum = (function () {
        const arr = [];
        let sum = 0;
        for (let index = 0; index < nums.length; index++) {
            if (index >= firstLen - 1) {
                sum += nums[index] - (nums[index - firstLen] || 0);
                arr.push(sum);
            } else {
                sum += nums[index];
                arr.push(0);
            }
        }
        const greatestSum = [];
        for (const element of arr) {
            if (greatestSum.length) {
                greatestSum.push(Math.max(greatestSum[greatestSum.length - 1], element));
            } else {
                greatestSum.push(element);
            }
        }
        return greatestSum;
    })();
    const rightToLeftSum = (function () {
        const arr = [];
        let sum = 0;
        for (let index = nums.length - 1; index >= 0; index--) {
            if (index <= nums.length - secondLen) {
                sum += nums[index] - (nums[index + secondLen] || 0);
                arr.push(sum);
            } else {
                sum += nums[index];
                arr.push(0);
            }
        }
        arr.reverse();
        const greatestSum = [];
        for (let index = arr.length - 1; index >= 0; index--) {
            const element = arr[index];
            if (greatestSum.length) {
                greatestSum.push(Math.max(greatestSum[greatestSum.length - 1], element));
            } else {
                greatestSum.push(element);
            }
        }
        return greatestSum.reverse();
    })();
    let max = 0;
    for (let index = firstLen - 1; index < leftToRightSum.length; index++) {
        max = Math.max(max, leftToRightSum[index] + (rightToLeftSum[index + 1] || 0));
    }
    return max;
};

var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
    return Math.max(
        maxSumTwoNoOverlapHelper(nums, firstLen, secondLen),
        maxSumTwoNoOverlapHelper(nums, secondLen, firstLen),
    );
};

console.log(
    maxSumTwoNoOverlap(
        (nums = [8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12]),
        (firstLen = 5),
        (secondLen = 4),
    ) === 108,
);
console.log(
    maxSumTwoNoOverlap((nums = [0, 6, 5, 2, 2, 5, 1, 9, 4]), (firstLen = 1), (secondLen = 2)) ===
        20,
);
console.log(
    maxSumTwoNoOverlap(
        (nums = [8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12]),
        (firstLen = 5),
        (secondLen = 4),
    ) === 108,
);

console.log(
    maxSumTwoNoOverlap(
        (nums = [4, 5, 14, 16, 16, 20, 7, 13, 8, 15]),
        (firstLen = 3),
        (secondLen = 5),
    ) === 109,
);

console.log(maxSumTwoNoOverlap((nums = [1, 0, 1]), (firstLen = 1), (secondLen = 1)) === 2);
console.log(maxSumTwoNoOverlap((nums = [4, 0, 1]), (firstLen = 2), (secondLen = 1)) === 5);

console.log(
    maxSumTwoNoOverlap((nums = [2, 1, 5, 6, 0, 9, 5, 0, 3, 8]), (firstLen = 4), (secondLen = 3)) ===
        31,
);

console.log(
    maxSumTwoNoOverlap((nums = [3, 8, 1, 3, 2, 1, 8, 9, 0]), (firstLen = 3), (secondLen = 2)) ===
        29,
);

console.log(
    maxSumTwoNoOverlap(
        (nums = [3, 8, 1, 3, 2, 1, 8, 9, 0, 2, 1, 2, 1, 2, 1]),
        (firstLen = 3),
        (secondLen = 2),
    ) === 29,
);
