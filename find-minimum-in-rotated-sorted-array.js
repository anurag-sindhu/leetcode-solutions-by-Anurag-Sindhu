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
        return findMin(nums.splice(0, middleIndex + 1));
    }
};

let res;
res = findMin((nums = [11, 13, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(res === 1);
res = findMin((nums = [11, 12, 13, 14, 15, 16, 17, 1, 2, 3]));
console.log(res === 1);
res = findMin((nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(res === 0);
res = findMin((nums = [11, 12, 13, 14, 15, 1, 2, 3, 4]));
console.log(res === 1);
res = findMin((nums = [3, 4, 5, 1, 2]));
console.log(res === 1);
res = findMin((nums = [11, 13, 15, 17]));
console.log(res === 11);
