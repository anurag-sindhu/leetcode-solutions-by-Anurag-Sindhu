var findIntersectionValues = function (nums1, nums2) {
    const nums1Object = (function () {
        const object = {};
        for (const element of nums1) {
            object[element] = true;
        }
        return object;
    })();
    const nums2Object = (function () {
        const object = {};
        for (const element of nums2) {
            object[element] = true;
        }
        return object;
    })();
    let countOfNum1 = 0;
    for (const element of nums1) {
        if (nums2Object[element] != undefined) {
            countOfNum1 += 1;
        }
    }
    let countOfNum2 = 0;
    for (const element of nums2) {
        if (nums1Object[element] != undefined) {
            countOfNum2 += 1;
        }
    }
    return [countOfNum1, countOfNum2];
};

console.log(findIntersectionValues((nums1 = [2, 3, 2]), (nums2 = [1, 2])));
console.log(findIntersectionValues((nums1 = [4, 3, 2, 3, 1]), (nums2 = [2, 2, 5, 2, 3, 6])));
console.log(findIntersectionValues((nums1 = [3, 4, 2, 3]), (nums2 = [1, 5])));
