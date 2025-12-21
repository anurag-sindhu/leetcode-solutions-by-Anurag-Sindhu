var findLength = function (nums1, nums2) {
    let maxLength = 0;
    for (let firstIndex = 0; firstIndex < nums1.length; firstIndex++) {
        if (!(nums1.length >= maxLength + firstIndex)) {
            return maxLength;
        }
        for (let secondIndex = 0; secondIndex < nums2.length; secondIndex++) {
            if (!(nums2.length >= maxLength + secondIndex)) {
                break;
            }
            let tempIndex = firstIndex;
            let tempSecondIndex = secondIndex;
            let tempOutput = 0;
            while (
                nums1[tempIndex] === nums2[tempSecondIndex] &&
                tempIndex < nums1.length &&
                tempSecondIndex < nums2.length
            ) {
                tempOutput += 1;
                tempIndex++;
                tempSecondIndex++;
            }
            maxLength = Math.max(tempOutput, maxLength);
            tempIndex = firstIndex;
            tempSecondIndex = secondIndex;
        }
    }
    return maxLength;
};

console.log(
    findLength(
        (nums1 = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]),
        (nums2 = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]),
    ) === 9,
);
console.log(findLength((nums1 = [70, 39, 25, 40, 7]), (nums2 = [52, 20, 67, 5, 31])));
console.log(findLength((nums1 = [0, 0, 0, 0, 0]), (nums2 = [0, 0, 0, 0, 0])));
console.log(findLength((nums1 = [1, 2, 3, 2, 1]), (nums2 = [3, 2, 1, 4, 7])));

[1, 2, 3, 4, 5];
