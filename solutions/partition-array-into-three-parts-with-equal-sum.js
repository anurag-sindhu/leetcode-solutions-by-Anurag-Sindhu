var canThreePartsEqualSum = function (arr) {
    const leftToRightSum = (function () {
        let sum = 0;
        const arObj = {};
        const ar = [];
        for (const element of arr) {
            sum += element;
            arObj[sum] = true;
            ar.push(sum);
        }
        return { ar, arObj };
    })();
    const rightToLeftSum = (function () {
        let sum = 0;
        const arObj = {};
        const ar = [];
        for (let index = arr.length - 1; index >= 0; index--) {
            sum += arr[index];
            arObj[sum] = true;
            ar.push(sum);
        }
        return { ar: ar.reverse(), arObj };
    })();
    const commonKeys = (function () {
        const obj = {};
        for (const key in leftToRightSum.arObj) {
            if (rightToLeftSum.arObj[key] != undefined) {
                obj[key] = Number(key);
            }
        }
        return obj;
    })();
    for (const key in commonKeys) {
        let leftToRightIndex = 0;
        let rightToLeftIndex = rightToLeftSum.ar.length - 1;
        while (
            leftToRightSum.ar[leftToRightIndex] !== commonKeys[key] &&
            leftToRightIndex < rightToLeftIndex
        ) {
            leftToRightIndex++;
        }
        while (
            rightToLeftSum.ar[rightToLeftIndex] !== commonKeys[key] &&
            leftToRightIndex < rightToLeftIndex
        ) {
            rightToLeftIndex--;
        }
        if (leftToRightIndex >= rightToLeftIndex) {
            break;
        }
        const sumTillFirstPoint = leftToRightSum.ar[leftToRightIndex];
        const sumTillSecondPoint = leftToRightSum.ar[rightToLeftIndex - 1] - sumTillFirstPoint;
        const sumTillLast = rightToLeftSum.ar[rightToLeftIndex];
        if (
            sumTillFirstPoint === sumTillSecondPoint &&
            sumTillFirstPoint === sumTillLast &&
            sumTillLast === sumTillSecondPoint
        ) {
            return true;
        }
    }
    return false;
};

console.log(canThreePartsEqualSum((arr = [1, -1, 1, -1])) === false);
console.log(canThreePartsEqualSum((arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])));
console.log(canThreePartsEqualSum((arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])));
console.log(canThreePartsEqualSum((arr = [0, 0, 0, 0])) === false);
console.log(
    canThreePartsEqualSum((arr = [10, -7, 13, -14, 30, 16, -3, -16, -27, 27, 19])) === true,
);
console.log(canThreePartsEqualSum((arr = [12, -4, 16, -5, 9, -3, 3, 8, 0])) === true);
console.log(canThreePartsEqualSum((arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4])));
