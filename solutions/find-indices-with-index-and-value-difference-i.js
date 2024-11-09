var findIndices = function (nums, indexDifference, valueDifference) {
    if (indexDifference == 0) {
        if (valueDifference === 0) {
            return [0, 0];
        }
    }
    for (let index = 0; index < nums.length; index++) {
        for (let nextIndex = index + indexDifference; nextIndex < nums.length; nextIndex++) {
            if (Math.abs(nums[index] - nums[nextIndex]) >= valueDifference) {
                return [index, nextIndex];
            }
        }
    }
    return [-1, -1];
};
console.log(findIndices([5, 48], 0, 29)); //[0,1]
console.log(findIndices((nums = [5, 1, 4, 1]), (indexDifference = 2), (valueDifference = 4)));
console.log(findIndices((nums = [2, 1]), (indexDifference = 0), (valueDifference = 0)));
console.log(findIndices((nums = [1, 2, 3]), (indexDifference = 2), (valueDifference = 4)));
