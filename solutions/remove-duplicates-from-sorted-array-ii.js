var removeDuplicates = function (nums) {
    let tempCount = 1;
    let lastNum = nums[0];
    let indexFilling = 1;
    for (let index = 1; index < nums.length; index++) {
        nums[indexFilling] = nums[index];
        if (lastNum == nums[index]) {
            if (!(tempCount >= 2)) {
                indexFilling++;
            }
            tempCount++;
        } else {
            lastNum = nums[index];
            indexFilling++;
            tempCount = 1;
        }
    }
    for (let index = indexFilling; index < nums.length; index++) {
        nums[index] = '_';
    }
    return indexFilling;
};

console.log(removeDuplicates((nums = [1, 1, 1, 2, 2, 3])));
console.log(removeDuplicates((nums = [0, 0, 1, 1, 1, 1, 2, 3, 3])));
console.log(removeDuplicates((nums = [1, 1, 1, 2, 2, 3])));
