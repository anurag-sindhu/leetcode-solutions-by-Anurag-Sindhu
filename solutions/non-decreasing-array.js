function isArrayIncreasing(arr) {
    for (let index = 1; index < arr.length; index++) {
        if (arr[index - 1] > arr[index]) {
            return false;
        }
    }
    return true;
}

var checkPossibility = function (nums) {
    if (nums.length <= 2) {
        return true;
    }
    if (nums.length === 3) {
        if (nums[0] <= nums[1]) {
            return true;
        }
        if (nums[0] <= nums[2]) {
            return true;
        }
        if (nums[1] <= nums[2]) {
            return true;
        }
        return false;
    }
    let hasEncountered = false;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] < nums[index - 1]) {
            if (hasEncountered) {
                return false;
            }
            if (index === 1) {
                hasEncountered = true;
            }
            if (index === nums.length - 1) {
                return true;
            }

            if (
                isArrayIncreasing([...nums.slice(0, index - 1), ...nums.slice(index)]) ||
                //what if we skip the current num
                isArrayIncreasing([...nums.slice(0, index), ...nums.slice(index + 1)]) ||
                //what if we skip the right num
                isArrayIncreasing([...nums.slice(0, index + 1), ...nums.slice(index + 1 + 1)])
            ) {
                return true;
            }
            return false;
        }
    }
    return true;
};

console.log(checkPossibility((nums = [1, 1, 1])) === true);
console.log(checkPossibility((nums = [1, 2, 3, 3, 3])) === true);
console.log(checkPossibility((nums = [4, 2, 3])) === true);
console.log(checkPossibility((nums = [4, 2, 1])) === false);
console.log(checkPossibility((nums = [3, 4, 2, 3])) === false);
console.log(checkPossibility((nums = [-1, 4, 2, 3])) === true);
console.log(checkPossibility((nums = [3, 4, 2, 4, 5])) === true);
console.log(checkPossibility((nums = [3, 4, 2, 4])) === true);

var checkPossibility1 = function (nums) {
    if (nums.length <= 2) {
        return true;
    }
    if (nums.length === 3) {
        if (nums[0] < nums[1]) {
            return true;
        }
        if (nums[0] < nums[2]) {
            return true;
        }
        if (nums[1] < nums[2]) {
            return true;
        }
        return false;
    }
    let hasEncountered = false;
    for (let index = 1; index < nums.length; index++) {
        const leftNum = nums[index - 1];
        const currentNum = nums[index];
        const rightNum = nums[index + 1];
        if (nums[index] < nums[index - 1]) {
            if (hasEncountered) {
                return false;
            }
            if (index === 1) {
                hasEncountered = true;
            }
            if (index === nums.length - 1) {
                return true;
            }
            // can we remove left Num?
            const superLeftNum = nums[index - 1 - 1];
            if (superLeftNum <= currentNum) {
                hasEncountered = true;
                continue;
            }
            // can we remove current Num?
            // can we remove right Num?
            console.log('object');
        }
    }
    return;
};
