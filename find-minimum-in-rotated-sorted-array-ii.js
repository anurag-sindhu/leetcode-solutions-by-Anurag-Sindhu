var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return nums[1];
        }
        return nums[0];
    }

    const middleIndex = Math.floor(nums.length / 2);
    const middleNumber = nums[middleIndex];
    const lastNumber = nums[nums.length - 1];

    if (middleNumber > lastNumber) {
        return findMin(nums.splice(middleIndex));
    } else {
        if (middleNumber === lastNumber) {
            return Math.min(findMin(nums.slice(middleIndex)), findMin(nums.slice(0, middleIndex)));
        }
        return findMin(nums.splice(0, middleIndex + 1));
    }
};

let res;
res = findMin((nums = [10, 10, 10, 1, 10]));
console.log(res === 1);
res = findMin((nums = [1, 3, 5]));
console.log(res === 1);
res = findMin((nums = [4, 5, 6, 7, 0, 1, 4]));
console.log(res === 0);
res = findMin((nums = [2, 2, 2, 0, 1]));
console.log(res === 0);
