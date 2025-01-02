var maxUncrossedLines = function (nums1, nums2) {
    let maxFromLeftToRight = 0;
    let maxFromRightToLeft = 0;
    let matchedAt = 0;
    for (let num1Index = 0; num1Index < nums1.length; num1Index++) {
        const nums1Element = nums1[num1Index];
        for (let num2Index = matchedAt; num2Index < nums2.length; num2Index++) {
            const nums2Element = nums2[num2Index];
            if (nums1Element == nums2Element) {
                maxFromLeftToRight += 1;
                matchedAt = num2Index + 1;
                break;
            }
        }
    }
    matchedAt = nums2.length - 1;
    for (let num1Index = nums1.length - 1; num1Index >= 0; num1Index--) {
        const nums1Element = nums1[num1Index];
        for (let num2Index = matchedAt; num2Index >= 0; num2Index--) {
            const nums2Element = nums2[num2Index];
            if (nums1Element == nums2Element) {
                maxFromRightToLeft += 1;
                matchedAt = num2Index - 1;
                break;
            }
        }
    }
    return Math.max(maxFromLeftToRight, maxFromRightToLeft);
};

/**
 2,  5, 1, 2, 5
 10, 5, 2, 1, 5, 2
 mysql transaction select
 */
console.log(maxUncrossedLines([1, 1, 2, 1, 2], [1, 3, 2, 3, 1]) == 3);
console.log(maxUncrossedLines((nums1 = [2, 5, 1, 2, 5]), (nums2 = [10, 5, 2, 1, 5, 2])) == 3);
console.log(maxUncrossedLines((nums1 = [1, 4, 2]), (nums2 = [1, 2, 4])) == 2);
console.log(maxUncrossedLines((nums1 = [1, 3, 7, 1, 7, 5]), (nums2 = [1, 9, 2, 5, 1])) == 3);
