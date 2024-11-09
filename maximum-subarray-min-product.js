var maxSumMinProduct = function (nums) {
    let primaryIndex = 0;
    let secondaryIndex = 1;
    let tempMin = nums[primaryIndex];
    let tempMax = nums[primaryIndex] * nums[primaryIndex];
    let max = tempMax;
    while (primaryIndex < nums.length) {
        if (secondaryIndex === nums.length) {
        
        }
        tempMin = Math.min(nums[secondaryIndex], tempMin);
        if (tempMin * (tempMax + nums[secondaryIndex]) > tempMax) {
            tempMax = tempMin * (tempMax + nums[secondaryIndex++]);
            max = Math.max(tempMax, max);
        }
    }
    return max;
};

console.log(maxSumMinProduct((nums = [1, 2, 3, 2])));
console.log(maxSumMinProduct((nums = [2, 3, 3, 1, 2])));
console.log(maxSumMinProduct((nums = [3, 1, 5, 6, 4, 2])));
