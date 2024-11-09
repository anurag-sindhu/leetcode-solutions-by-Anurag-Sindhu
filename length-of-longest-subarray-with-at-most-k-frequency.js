var maxSubarrayLength = function (nums, k) {
    const numsIndex = {};
    const storeFrequency = {};
    let fromIndex = 0;
    let maxSubarrayLen = 0;
    for (let index = 0; index < nums.length; index++) {
        if (!storeFrequency[nums[index]]) {
            storeFrequency[nums[index]] = 0;
        }
        storeFrequency[nums[index]] += 1;
        while (storeFrequency[nums[index]] > k) {
            //now our target is to reduce the frequency of current element by
            // removing the element from the left side of the array
            storeFrequency[nums[fromIndex++]] -= 1;
        }
        maxSubarrayLen = Math.max(maxSubarrayLen, index - fromIndex + 1);
    }
    return maxSubarrayLen;
};

console.log(maxSubarrayLength((nums = [1, 2, 3, 1, 2, 3, 1, 2]), (k = 2)) === 6);
console.log(maxSubarrayLength((nums = [1, 2, 1, 2, 1, 2, 1, 2]), (k = 1)) === 2);
console.log(maxSubarrayLength((nums = [5, 5, 5, 5, 5, 5, 5]), (k = 4)) === 4);
