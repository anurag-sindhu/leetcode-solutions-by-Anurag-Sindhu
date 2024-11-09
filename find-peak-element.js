var findPeakElement = function (nums, index = 0) {
    if (nums.length === 1) {
        return 0 + index;
    }
    if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return 0 + index;
        } else {
            return 1 + index;
        }
    }
    const halfIndex = Math.floor(nums.length / 2);
    const halfElement = nums[halfIndex];
    if (nums[halfIndex - 1] > halfElement) {
        return findPeakElement(nums.splice(0, halfIndex + 1), index);
    } else {
        return findPeakElement(nums.splice(halfIndex), index + halfIndex);
    }
};

console.log(findPeakElement((nums = [1, 2, 3, 1])));
console.log(findPeakElement((nums = [1, 2, 1, 3, 5, 6, 4])));
