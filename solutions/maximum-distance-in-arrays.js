var maxDistance = function (arrays) {
    const minArr = [];
    const maxArr = [];
    let tempMax = -Infinity;
    let tempMin = Infinity;
    const minFromLeftToRight = [];
    const minFromRightToLeft = [];
    const maxFromLeftToRight = [];
    const maxFromRightToLeft = [];
    let maxDiff = -Infinity;
    //Store first and last element only
    for (const element of arrays) {
        minArr.push(element[0]);
        maxArr.push(element[element.length - 1]);
    }
    //min from left side from the index and move towards right
    for (let index = 0; index < minArr.length; index++) {
        tempMin = Math.min(tempMin, minArr[index]);
        minFromLeftToRight.push(tempMin);
    }

    tempMin = Infinity;
    //min from right side from the index and move towards Left
    for (let index = minArr.length - 1; index >= 0; index--) {
        tempMin = Math.min(tempMin, minArr[index]);
        minFromRightToLeft.push(tempMin);
    }

    minFromRightToLeft.reverse();
    //max from left side from the index and move towards right
    for (let index = 0; index < maxArr.length; index++) {
        tempMax = Math.max(tempMax, maxArr[index]);
        maxFromLeftToRight.push(tempMax);
    }

    tempMax = -Infinity;
    //max from right side from the index and move towards Left
    for (let index = maxArr.length - 1; index >= 0; index--) {
        tempMax = Math.max(tempMax, maxArr[index]);
        maxFromRightToLeft.push(tempMax);
    }
    maxFromRightToLeft.reverse();

    // find min element from both the side wrt maxArr
    for (let index = 1; index < maxArr.length; index++) {
        const element = maxArr[index];
        maxDiff = Math.max(
            maxDiff,
            Math.abs(element - minFromLeftToRight[index - 1]),
            (minFromRightToLeft[index + 1] != undefined &&
                Math.abs(element - minFromRightToLeft[index + 1])) ||
                -Infinity,
        );
    }

    // find max element from both the side wrt minArr
    for (let index = 1; index < minArr.length; index++) {
        const element = minArr[index];
        maxDiff = Math.max(
            maxDiff,
            Math.abs(element - maxFromLeftToRight[index - 1]),
            (maxFromRightToLeft[index + 1] != undefined &&
                Math.abs(element - maxFromRightToLeft[index + 1])) ||
                -Infinity,
        );
    }
    return maxDiff;
};

console.log(
    maxDistance([
        [1, 4, 5],
        [0, 2],
    ]) == 5,
);

console.log(
    maxDistance([
        [1, 5],
        [3, 4],
    ]) == 3,
);
console.log(
    maxDistance([
        [1, 4],
        [0, 5],
    ]) == 4,
);

console.log(
    maxDistance(
        (arrays = [
            [1, 2, 3],
            [4, 5],
            [1, 2, 3],
        ]),
    ) == 4,
);
console.log(maxDistance((arrays = [[1], [1]])) == 0);
