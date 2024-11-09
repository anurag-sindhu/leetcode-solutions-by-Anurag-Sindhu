var maximumSetSize = function (nums1, nums2) {
    let num1Obj = (function () {
        const obj = {};
        for (const element of nums1) {
            if (!obj[element]) {
                obj[element] = 0;
            }
            obj[element] += 1;
        }
        return obj;
    })();
    let num2Obj = (function () {
        const obj = {};
        for (const element of nums2) {
            if (!obj[element]) {
                obj[element] = 0;
            }
            obj[element] += 1;
        }
        return obj;
    })();
    const elementToCut = nums1.length / 2;
    const num1ObjUniqueLength = Object.keys(num1Obj).length;
    const num2ObjUniqueLength = Object.keys(num2Obj).length;
    let countOfElementsOfNum2WhichAreNotPareOfNum1 = 0;
    for (const element in num2Obj) {
        if (!num1Obj[element]) {
            countOfElementsOfNum2WhichAreNotPareOfNum1++;
        }
        if (countOfElementsOfNum2WhichAreNotPareOfNum1 >= elementToCut) {
            break;
        }
    }
    let countOfElementsOfNum1WhichAreNotPareOfNum2 = 0;
    for (const element in num1Obj) {
        if (!num2Obj[element]) {
            countOfElementsOfNum1WhichAreNotPareOfNum2++;
        }
        if (countOfElementsOfNum1WhichAreNotPareOfNum2 >= elementToCut) {
            break;
        }
    }

    if (num1ObjUniqueLength <= elementToCut) {
    } else if (num2ObjUniqueLength <= elementToCut) {
        return countOfElementsOfNum1WhichAreNotPareOfNum2 + num2ObjUniqueLength;
    } else {
        const operation1 = Math.min(
            num1ObjUniqueLength + countOfElementsOfNum2WhichAreNotPareOfNum1,
            elementToCut * 2,
        );
        const operation2 = Math.min(
            num2ObjUniqueLength + countOfElementsOfNum1WhichAreNotPareOfNum2,
            elementToCut * 2,
        );
        return Math.max(operation1, operation2);
    }
};

console.log(maximumSetSize([1, 2, 3, 3], [1, 2, 2, 3]) === 3);
console.log(maximumSetSize([5, 7, 7, 9, 6, 3, 8, 9, 8, 10], [5, 5, 1, 6, 6, 10, 7, 8, 5, 8]) === 8);
console.log(maximumSetSize([7, 1, 5, 4, 2, 5, 7, 2, 10, 9], [8, 2, 4, 1, 4, 5, 9, 9, 6, 6]) === 9);
console.log(maximumSetSize([1, 1, 1, 3, 3, 3, 1, 1], [3, 2, 3, 2, 3, 3, 3, 3]) === 3);
console.log(maximumSetSize((nums1 = [1, 2, 3, 4, 4, 4]), (nums2 = [1, 2, 3, 4, 5, 6])) === 6);
console.log(maximumSetSize((nums1 = [1, 2, 3, 4, 5, 6]), (nums2 = [6, 7, 8, 9, 10, 11])) === 6);
console.log(maximumSetSize((nums1 = [1, 2, 1, 2]), (nums2 = [1, 1, 1, 1])) === 2);
console.log(maximumSetSize((nums1 = [1, 2, 3, 4, 5, 6]), (nums2 = [2, 3, 2, 3, 2, 3])) === 5);
console.log(maximumSetSize((nums1 = [1, 1, 2, 2, 3, 3]), (nums2 = [4, 4, 5, 5, 6, 6])) === 6);
