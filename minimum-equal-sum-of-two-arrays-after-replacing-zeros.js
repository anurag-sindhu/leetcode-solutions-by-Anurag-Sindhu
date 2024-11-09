var minSum = function (nums1, nums2) {
    let nums1Zero = 0;
    let nums2Zero = 0;
    const nums1Sum = nums1.reduce((acc, curr) => {
        if (curr === 0) {
            nums1Zero += 1;
        }
        return acc + curr;
    }, 0);
    const nums2Sum = nums2.reduce((acc, curr) => {
        if (curr === 0) {
            nums2Zero += 1;
        }
        return acc + curr;
    }, 0);

    if (nums1Zero === 0) {
        if (nums1Sum > nums2Sum && nums2Sum + nums2Zero <= nums1Sum) {
            return nums1Sum;
        }
        return -1;
    }
    if (nums2Zero === 0) {
        if (nums1Sum < nums2Sum && nums1Sum + nums1Zero <= nums2Sum) {
            return nums2Sum;
        }
        return -1;
    }
    if (nums2Zero === 0 && nums1Zero === 0) {
        if (nums1Sum === nums2Sum) {
            return nums1Sum;
        }
        return -1;
    }
    if (nums1Sum === nums2Sum) {
        if (nums1Zero === 0 || nums2Zero === 0) {
            return -1;
        }
        return nums1Sum + Math.max(nums1Zero, nums2Zero);
    }
    return Math.max(nums2Sum + nums2Zero, nums1Sum + nums1Zero);
};

console.log(
    minSum(
        [20, 0, 18, 11, 0, 0, 0, 0, 0, 0, 17, 28, 0, 11, 10, 0, 0, 15, 29],
        [16, 9, 25, 16, 1, 9, 20, 28, 8, 0, 1, 0, 1, 27],
    ),
);
console.log(minSum([0, 16, 28, 12, 10, 15, 25, 24, 6, 0, 0], [20, 15, 19, 5, 6, 29, 25, 8, 12]));

console.log(
    minSum(
        [0, 17, 20, 17, 5, 0, 14, 19, 7, 8, 16, 18, 6],
        [21, 1, 27, 19, 2, 2, 24, 21, 16, 1, 13, 27, 8, 5, 3, 11, 13, 7, 29, 7],
    ),
);
console.log(minSum([0, 7, 28, 17, 18], [1, 2, 6, 26, 1, 0, 27, 3, 0, 30]));
console.log(minSum((nums1 = [3, 2, 0, 1, 0]), (nums2 = [6, 5, 0])));
console.log(minSum((nums1 = [2, 0, 2, 0]), (nums2 = [1, 4])));
