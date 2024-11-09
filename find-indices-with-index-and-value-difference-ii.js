var findIndices = function (nums, indexDifference, valueDifference) {
    if (indexDifference == 0) {
        if (valueDifference === 0) {
            return [0, 0];
        }
    }

    const bigNumArr = [];
    const bigNumArrIndexMapping = [];
    for (let index = nums.length - 1; index >= 0; index--) {
        const lastNum = bigNumArr[bigNumArr.length - 1];
        if (lastNum === undefined) {
            bigNumArr.push(nums[index]);
            bigNumArrIndexMapping.push(index);
        } else {
            if (nums[index] > lastNum) {
                bigNumArr.push(nums[index]);
                bigNumArrIndexMapping.push(index);
            } else {
                bigNumArr.push(lastNum);
                bigNumArrIndexMapping.push(bigNumArrIndexMapping[bigNumArrIndexMapping.length - 1]);
            }
        }
    }
    bigNumArrIndexMapping.reverse();
    bigNumArr.reverse();

    const smallNumArr = [];
    const smallNumArrIndexMapping = [];
    for (let index = nums.length - 1; index >= 0; index--) {
        const lastNum = smallNumArr[smallNumArr.length - 1];
        if (lastNum === undefined) {
            smallNumArr.push(nums[index]);
            smallNumArrIndexMapping.push(index);
        } else {
            if (nums[index] < lastNum) {
                smallNumArr.push(nums[index]);
                smallNumArrIndexMapping.push(index);
            } else {
                smallNumArr.push(lastNum);
                smallNumArrIndexMapping.push(
                    smallNumArrIndexMapping[smallNumArrIndexMapping.length - 1],
                );
            }
        }
    }
    smallNumArrIndexMapping.reverse();
    smallNumArr.reverse();

    for (let index = 0; index < nums.length; index++) {
        if (Math.abs(nums[index] - bigNumArr[index + indexDifference]) >= valueDifference) {
            return [index, bigNumArrIndexMapping[index + indexDifference]];
        }
        if (Math.abs(nums[index] - smallNumArr[index + indexDifference]) >= valueDifference) {
            return [index, smallNumArrIndexMapping[index + indexDifference]];
        }
    }
    return [-1, -1];
};
console.log(findIndices((nums = [5, 1, 4, 1]), (indexDifference = 2), (valueDifference = 4)));
console.log(findIndices([5, 48], 0, 29)); //[0,1]
console.log(findIndices((nums = [2, 1]), (indexDifference = 0), (valueDifference = 0)));
console.log(findIndices((nums = [1, 2, 3]), (indexDifference = 2), (valueDifference = 4)));
