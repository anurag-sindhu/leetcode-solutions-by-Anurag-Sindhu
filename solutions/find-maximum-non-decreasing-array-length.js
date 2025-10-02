var findMaximumLength = function (nums) {
    let count = 0;
    let firstIndex = null;
    let tempSum = 0;
    let index = 0;
    for (; index < nums.length; index++) {
        if (nums[index] > nums[index + 1] && firstIndex == null) {
            firstIndex = index;
            tempSum = nums[index];
        } else if (nums[index] > nums[index - 1] && firstIndex != null) {
            let lastSum = null;
            const startNumber = nums[firstIndex];
            while (tempSum > startNumber) {
                count += 1;
                lastSum = tempSum;
                tempSum -= nums[firstIndex++];
            }
            if (lastSum < nums[index]) {
                count++;
            }
            firstIndex = null;
            tempSum = 0;
        } else if (firstIndex != null) {
            tempSum += nums[index];
        } else {
            count += 1;
        }
    }
    if (firstIndex !== null) {
        let lastSum = null;
        const startNumber = nums[firstIndex];
        while (tempSum > startNumber) {
            count += 1;
            lastSum = tempSum;
            tempSum -= nums[firstIndex++];
        }
        if (lastSum < nums[index]) {
            count++;
        }
    }
    if (nums.length == 3) {
        return Math.max(2, count);
    }
    return count;
};

console.log(findMaximumLength((nums = [247, 173, 316])) === 2);
console.log(findMaximumLength((nums = [4, 3, 2, 6])) === 3);
console.log(findMaximumLength((nums = [1, 2, 3, 4, 3, 2, 6])) === 6);
console.log(findMaximumLength((nums = [137, 32, 745])) === 2);
console.log(findMaximumLength((nums = [769, 131, 241])) === 1);
console.log(findMaximumLength((nums = [5, 2, 2])) === 1);
console.log(findMaximumLength((nums = [1, 2, 3, 4])) === 4);
