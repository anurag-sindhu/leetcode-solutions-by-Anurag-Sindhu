function binarySearch(arr, search, index = 0) {
    if (!arr.length) {
        return -1;
    }
    if (arr.length === 1) {
        if (arr[0] !== search) {
            return -1;
        }
        return index;
    }
    const half = Math.floor(arr.length / 2);
    if (arr[half] === search) {
        return index + half;
    } else if (arr[half] > search) {
        return binarySearch(arr.slice(0, half), search, index);
    } else {
        return binarySearch(arr.slice(half), search, index + half);
    }
}

function getRotatedIndex(nums, index = 0) {
    if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return index + 1;
        }
        return index;
    }
    const middleIndex = Math.floor(nums.length / 2);
    const startElement = nums[0];
    const lastElement = nums[nums.length - 1];
    const middleElement = nums[middleIndex];
    if (startElement < middleElement) {
        return getRotatedIndex(nums.slice(middleIndex), index + middleIndex);
    } else {
        return getRotatedIndex(nums.slice(0, middleIndex + 1), index);
    }
}

var search = function (nums, target) {
    if (nums.length === 1) {
        if (nums[0] === target) {
            return true;
        }
        return false;
    }
    if (nums.length === 2) {
        if (nums[0] === target) {
            return true;
        }
        if (nums[1] === target) {
            return true;
        }
        return false;
    }
    const rotatedIndex = getRotatedIndex(nums);
    const rotatedElement = nums[rotatedIndex];
    const lastElement = nums[nums.length - 1];
    if (target === rotatedElement) {
        return true;
    }
    let output = -1;
    if (target > lastElement) {
        output = binarySearch(nums.slice(0, rotatedIndex), target);
    } else {
        output =
            binarySearch(nums.slice(rotatedIndex + 1), target) +
            rotatedIndex +
            1;
    }
    return output === -1 ? false : true;
};

console.log(
    search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2) ===
        true
);
console.log(search([1], 0) === false);
console.log(search([4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3], 0) === true);
console.log(search([4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3], 7) === true);
console.log(search([4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3], 2) === true);
console.log(search([4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3], 8) === true);
console.log(search([4, 5, 6, 7, 0, 1, 2], 2) === true);
console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 6) === true);
console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === true);
console.log(search([4, 5, 6, 1, 2, 3], 3) === true);
console.log(search([4, 5, 6, 7, 0, 1, 2], 1) === true);
console.log(search([4, 5, 6, 7, 0, 1, 2], 5) === true);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === false);
console.log(search([2, 5, 6, 0, 0, 1, 2], 3) === false);
