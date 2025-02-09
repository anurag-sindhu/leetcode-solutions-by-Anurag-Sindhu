const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var getSubarrayBeauty = function (nums, k, x) {
    /*
        Time: O(N)*O(100) ~ O(N)
        Space: O(100) ~ O(1)
    */
    const configArr = (function () {
        /*
        Time: O(100)+O(N) = O(N)
        Space: O(100) = O(100)
        */
        const arr = [];
        for (let index = -50; index <= 50; index++) {
            arr[index] = 0;
        }
        for (let index = 0; index < k; index++) {
            arr[nums[index]] += 1;
        }
        return arr;
    })();

    let findXthLowestIndex = function (arr) {
        /*
        Time: O(100) = O(100)
        Space: O(1) = O(1)
        */
        let index;
        let count = 0;
        for (index = -51; index <= 50; index++) {
            if (arr[index]) {
                count += arr[index];
            }
            if (count >= x) {
                return index;
            }
        }
        return index;
    };

    let xthLowestIndex = findXthLowestIndex(configArr);
    const output = [];
    if (xthLowestIndex < 0) {
        output.push(xthLowestIndex);
    } else {
        output.push(0);
    }

    for (let index = k; index < nums.length; index++) {
        /*
        Time: O(N)*O(100) = O(N)
        Space: O(1) = O(1)
        */
        const indexToBeAdded = index;
        const indexToBeRemoved = index - k;
        configArr[nums[indexToBeAdded]] += 1;
        configArr[nums[indexToBeRemoved]] -= 1;
        if (nums[indexToBeAdded] >= xthLowestIndex || nums[indexToBeRemoved] >= xthLowestIndex) {
            /*
        Time: O(100) = O(100)
        Space: O(1) = O(1)
        */
            xthLowestIndex = findXthLowestIndex(configArr);
        }
        if (xthLowestIndex < 0) {
            output.push(xthLowestIndex);
        } else {
            output.push(0);
        }
    }
    return output;
};

console.log(areTwoArrayEqual(getSubarrayBeauty((nums = [5]), (k = 1), (x = 1)), [0]));
console.log(
    areTwoArrayEqual(
        getSubarrayBeauty((nums = [-3, 1, 2, -3, 0, -3]), (k = 2), (x = 1)),
        [-3, 0, -3, -3, -3],
    ),
);

console.log(
    areTwoArrayEqual(
        getSubarrayBeauty((nums = [1, -1, -3, -2, 3]), (k = 3), (x = 2)),
        [-1, -2, -2],
    ),
);

console.log(areTwoArrayEqual(getSubarrayBeauty([-3, 1, 2, -3, 0, -3], 2, 1), [-3, 0, -3, -3, -3]));

console.log(areTwoArrayEqual(getSubarrayBeauty([-46, -34, -46], 3, 3), [-34]));

console.log(
    areTwoArrayEqual(
        getSubarrayBeauty((nums = [-1, -2, -3, -4, -5]), (k = 2), (x = 2)),
        [-1, -2, -3, -4],
    ),
);
