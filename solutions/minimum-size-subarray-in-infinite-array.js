var minSizeSubarray = function (nums, target) {
    const numsSum = nums.reduce((acc, curr) => acc + curr);
    let factor = Math.ceil(target / numsSum);
    if (target / numsSum < 1) {
        factor = 0;
    }
    if (factor > 2) {
        target -= (factor - 3) * numsSum;
    }
    const newArray = [...nums, ...nums, ...nums];
    let backPointer = 0;
    let tempSum = newArray[0];
    let tempSumLen = 1;
    if (tempSum === target) {
        return (factor - 3) * nums.length + 1;
    }
    let index = 1;
    let minLength = Infinity;
    while (newArray[backPointer] !== undefined) {
        const element = newArray[index];
        tempSum += element;
        tempSumLen += 1;
        if (tempSum === target) {
            if (factor - 3 > 0) {
                minLength = Math.min(minLength, (factor - 3) * nums.length + tempSumLen);
            } else {
                minLength = Math.min(minLength, tempSumLen);
            }
        }
        while (tempSum > target) {
            tempSumLen -= 1;
            tempSum -= newArray[backPointer++];
        }
        if (tempSum === target) {
            if (factor - 3 > 0) {
                minLength = Math.min(minLength, (factor - 3) * nums.length + tempSumLen);
            } else {
                minLength = Math.min(minLength, tempSumLen);
            }
        }
        if (index < newArray.length) {
            index++;
        } else {
            backPointer++;
        }
    }
    return minLength === Infinity ? -1 : minLength;
};

console.log(minSizeSubarray([3, 2, 1, 3, 2, 1, 3, 1, 1, 1, 2, 1, 2, 1, 2, 3, 3, 1], 78) === 41);
console.log(minSizeSubarray([5, 5, 4, 1, 2, 2, 2, 3, 2, 4, 2, 5], 56) === 16);
console.log(minSizeSubarray((nums = [2, 4, 6, 8]), (target = 46)) === 9);
console.log(minSizeSubarray((nums = [1, 2, 3]), (target = 5)) === 2);
console.log(minSizeSubarray((nums = [2, 4, 6, 8]), (target = 3)) === -1);
console.log(minSizeSubarray((nums = [1, 1, 1, 2, 3]), (target = 4)) === 2);
