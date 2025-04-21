const binarySearchMinIndexLessThanSearch = (arr, search, left = 0) => {
    let right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= search) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};

const binarySearchMinIndexGreaterThanSearch = (arr, search, left = 0) => {
    let right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= search) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b);
    let count = 0;
    for (let index = 0; index < nums.length - 1; index++) {
        const startingNumber = lower - nums[index];
        const endingNumber = upper - nums[index];
        {
            const findIndex1 = binarySearchMinIndexGreaterThanSearch(
                nums,
                startingNumber,
                index + 1,
            );
            const findIndex2 = binarySearchMinIndexLessThanSearch(nums, endingNumber, index + 1);
            if (findIndex1 != null && findIndex2 != null) {
                const diff = findIndex2 - findIndex1 + 1;
                count += diff;
            }
        }
    }

    return count;
};

console.log(
    countFairPairs((nums = [0, 0, 0, 0, 0, 0]), (lower = -1000000000), (upper = 1000000000)) == 15,
);
console.log(countFairPairs((nums = [0, 0, 0, 0, 0, 0]), (lower = 0), (upper = 0)) == 15);
console.log(countFairPairs((nums = [1, 2, 5, 7, 9]), (lower = 11), (upper = 11)) == 1);
console.log(countFairPairs((nums = [1, 7, 9, 2, 5]), (lower = 11), (upper = 11)) == 1);
console.log(countFairPairs((nums = [0, 1, 4, 4, 5, 7]), (lower = 3), (upper = 6)) == 6);
console.log(countFairPairs((nums = [0, 1, 7, 4, 4, 5]), (lower = 3), (upper = 6)) == 6);
