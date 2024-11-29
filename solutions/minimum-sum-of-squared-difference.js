var minSumSquareDiff = function (nums1, nums2, k1, k2) {
    const config = [];
    for (let index = 0; index < nums1.length; index++) {
        const difference = Math.abs(nums1[index] - nums2[index]);
        config.push(difference);
    }
    const sortedKeys = config.sort((a, b) => b - a);
    let lastElement = null;
    let lastElementFreq = 0;
    let index = 0;
    let totalGraceLeft = k1 + k2;
    let prod = 0;
    for (; index < sortedKeys.length; index++) {
        const element = sortedKeys[index];
        if (totalGraceLeft > 0) {
            if (lastElement === null) {
                lastElement = element;
                lastElementFreq = 1;
            } else {
                const differenceBetweenLastElement = lastElement - element;
                if (differenceBetweenLastElement == 0) {
                    lastElementFreq += 1;
                } else {
                    if (differenceBetweenLastElement * lastElementFreq <= totalGraceLeft) {
                        totalGraceLeft -= differenceBetweenLastElement * lastElementFreq;
                        lastElementFreq += 1;
                        lastElement = element;
                        if (!totalGraceLeft) {
                            prod += (lastElementFreq - totalGraceLeft) * lastElement * lastElement;
                            index += 1;
                            break;
                        }
                    } else {
                        if (totalGraceLeft) {
                            const factor = parseInt(totalGraceLeft / lastElementFreq);
                            if (factor) {
                                totalGraceLeft -= lastElementFreq * factor;
                                lastElement -= factor;
                                if (lastElement <= 0) {
                                    return 0;
                                }
                            }
                            prod += (lastElementFreq - totalGraceLeft) * lastElement * lastElement;
                            prod += totalGraceLeft * (lastElement - 1) * (lastElement - 1);
                        }
                        break;
                    }
                }
            }
        } else {
            break;
        }
    }
    if (prod || !totalGraceLeft) {
        for (let indexChild = index; indexChild < sortedKeys.length; indexChild++) {
            prod += sortedKeys[indexChild] * sortedKeys[indexChild];
        }
    } else {
        const factor = parseInt(totalGraceLeft / sortedKeys.length);
        if (factor) {
            totalGraceLeft -= sortedKeys.length * factor;
            lastElement -= factor;
            if (lastElement <= 0) {
                return 0;
            }
        }
        if (lastElement) {
            prod += (sortedKeys.length - totalGraceLeft) * lastElement * lastElement;
            prod += totalGraceLeft * (lastElement - 1) * (lastElement - 1);
        }
    }
    return prod;
};

console.log(minSumSquareDiff([1, 2, 3, 4], [2, 4, 5, 7], 0, 1) === 13);

console.log(
    minSumSquareDiff(
        [
            95, 88, 29, 22, 91, 15, 91, 48, 90, 16, 4, 22, 14, 81, 43, 34, 90, 14, 51, 80, 41, 4, 1,
            35, 5, 22, 44, 26, 23, 42, 59, 95, 4, 58, 51, 38, 33, 19, 52, 21, 13, 17, 83, 68, 13,
            77, 100, 75, 71, 63, 39, 14, 82, 52, 11, 61, 24, 86, 60, 72, 74, 99, 45, 46, 10, 17, 27,
            72, 66, 65, 59, 63, 54, 29, 85, 77, 25, 58, 2, 16, 92, 77, 89, 8, 100, 80, 12, 22, 81,
            27, 60, 96, 90, 41, 83, 24, 37, 22, 88, 67,
        ],
        [
            95, 88, 29, 22, 91, 15, 91, 48, 90, 16, 4, 22, 14, 81, 43, 34, 90, 14, 51, 80, 41, 4, 1,
            35, 5, 22, 44, 26, 23, 42, 59, 95, 4, 58, 51, 38, 33, 19, 52, 21, 13, 17, 83, 68, 13,
            77, 100, 75, 71, 63, 39, 14, 82, 52, 11, 61, 24, 86, 60, 72, 74, 99, 45, 46, 10, 17, 27,
            72, 66, 65, 59, 63, 54, 29, 85, 77, 25, 58, 2, 16, 92, 77, 89, 8, 100, 80, 12, 22, 81,
            27, 60, 96, 90, 41, 83, 24, 37, 22, 88, 67,
        ],
        45,
        7,
    ) === 0,
);
console.log(minSumSquareDiff([18, 4, 8, 19, 13, 8], [18, 11, 8, 2, 13, 15], 16, 8) === 17);
console.log(
    minSumSquareDiff((nums1 = [1, 2, 3, 4]), (nums2 = [2, 10, 20, 19]), (k1 = 0), (k2 = 0)) === 579,
);
console.log(
    minSumSquareDiff((nums1 = [1, 4, 10, 12]), (nums2 = [5, 8, 6, 9]), (k1 = 3), (k2 = 1)) === 31,
);
console.log(
    minSumSquareDiff((nums1 = [1, 4, 10, 12]), (nums2 = [7, 9, 6, 9]), (k1 = 3), (k2 = 1)) === 50,
);
console.log(
    minSumSquareDiff((nums1 = [1, 4, 10, 12]), (nums2 = [5, 8, 6, 9]), (k1 = 1), (k2 = 1)) === 43,
);
