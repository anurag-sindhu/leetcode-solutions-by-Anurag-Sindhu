var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let firstElement = nums[0];
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (!(firstElement + k >= element)) {
            count += 1;
            firstElement = element;
        }
    }
    return count + 1;
};

console.log(partitionArray((nums = [3, 6, 1, 2, 5]), (k = 2)));
console.log(partitionArray((nums = [1, 2, 3]), (k = 1)));
console.log(partitionArray((nums = [2, 2, 4, 5]), (k = 0)));
