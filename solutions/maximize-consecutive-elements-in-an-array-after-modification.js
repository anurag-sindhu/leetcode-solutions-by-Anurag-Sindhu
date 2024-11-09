var maxSelectedElements = function (nums) {
    const bucketSort = (function (nums) {
        const maxNumber = Math.max(...nums);
        const arr = new Array(maxNumber);
        for (let index = 0; index < nums.length; index++) {
            if (arr[nums[index]] === undefined) {
                arr[nums[index]] = 0;
            }
            arr[nums[index]] += 1;
        }
        let sortedArray = [];
        for (let index = 0; index < arr.length; index++) {
            for (let indexTemp = 0; indexTemp < arr[index]; indexTemp++) {
                sortedArray.push(index);
            }
        }
        return sortedArray;
    })(nums);
    let count = 1;
    let tempCount = 1;
    let prevElement = null;
    for (let index = 0; index < bucketSort.length; ) {
        const element = bucketSort[index];
        if (prevElement === null) {
            const difference = bucketSort[index + 1] - element;
            if (difference === 2) {
                prevElement = element + 1;
            } else {
                prevElement = element;
            }
            index++;
        } else {
            const difference = element - prevElement;
            if (difference == 0) {
                tempCount++;
                prevElement = element + 1;
                index++;
            } else if (difference == 1) {
                tempCount++;
                prevElement = element;
                index++;
            } else if (difference > 0) {
                count = Math.max(tempCount, count);
                tempCount = 1;
                prevElement = null;
            } else {
                index++;
            }
        }
    }
    return count;
};

console.log(maxSelectedElements((nums = [12, 11, 8, 7, 2, 10, 18, 12])) === 6);
console.log(
    maxSelectedElements((nums = [8, 10, 6, 12, 9, 12, 2, 3, 13, 19, 11, 18, 10, 16])) === 8,
);
console.log(maxSelectedElements((nums = [2, 1, 5, 1, 1])) === 3);
console.log(maxSelectedElements((nums = [1, 4, 7, 10])) === 1);
