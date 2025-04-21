var resultsArray1 = function (nums, k) {
    let indexTillLastConsecutive = -Infinity;
    function isConsecutive(nums, startIndex, endIndex) {
        let last = null;
        let index = Math.max(startIndex, indexTillLastConsecutive);
        for (; index <= endIndex; index++) {
            if (last != null) {
                if (nums[index] !== last + 1) {
                    return false;
                }
            }
            last = nums[index];
        }
        indexTillLastConsecutive = index;
        return true;
    }

    const out = [];
    for (let index = 0; index <= nums.length - k; index++) {
        const startPt = nums[index];
        const endPt = startPt + k - 1;
        if (nums[index + k - 1] === endPt) {
            const isC = isConsecutive(nums, index, index + k - 1);
            if (isC) {
                out.push(endPt);
            } else {
                out.push(-1);
            }
        } else {
            out.push(-1);
        }
    }
    return out;
};

var resultsArray = function (nums, k) {
    const n = nums.length;
    const result = [];
    const inc = new Array(n - 1).fill(false);
    for (let i = 0; i < n - 1; i++) {
        inc[i] = nums[i + 1] == nums[i] + 1;
    }
    let count = 0;
    for (let j = 0; j < k - 1; j++) {
        if (inc[j]) {
            count++;
        }
    }
    for (i = 0; i <= n - k; i++) {
        if (i > 0) {
            if (inc[i - 1]) {
                count--;
            }
            if (inc[i + k - 2]) {
                count++;
            }
        }
        if (count === k - 1) {
            result.push(nums[i + k - 1]);
        } else {
            result.push(-1);
        }
    }
    return result;
};

console.log(resultsArray((nums = [1, 1, 1, 2, 3]), (k = 3))); //[-1,-1,3]
console.log(resultsArray((nums = [52, 12, 13, 14]), (k = 3))); //[-1, 14]
console.log(resultsArray((nums = [3, 2, 3, 2, 3, 2]), (k = 2))); //[-1,3,-1,3,-1]
console.log(resultsArray((nums = [1, 2, 3, 4, 3, 2, 5]), (k = 3))); //[3, 4, -1, -1, -1]
console.log(resultsArray((nums = [2, 2, 2, 2, 2]), (k = 4))); //[-1, -1]
