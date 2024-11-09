var findPeakElement = function (nums, index = 0) {
    if (nums.length === 1) {
        return 0 + index;
    }
    if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return 0 + index;
        } else {
            return 1 + index;
        }
    }
    const halfIndex = Math.floor(nums.length / 2);
    const halfElement = nums[halfIndex];
    if (nums[halfIndex - 1] > halfElement) {
        return findPeakElement(nums.splice(0, halfIndex + 1), index);
    } else {
        return findPeakElement(nums.splice(halfIndex), index + halfIndex);
    }
};

var findPeakGrid = function (mat) {
    for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
        const colIndex = findPeakElement(mat[rowIndex]);
        if (
            mat[rowIndex][colIndex] > (mat[rowIndex][colIndex - 1] || -Infinity) &&
            mat[rowIndex][colIndex] > (mat[rowIndex][colIndex + 1] || -Infinity) &&
            mat[rowIndex][colIndex] >
                ((mat[rowIndex - 1] && mat[rowIndex - 1][colIndex]) || -Infinity) &&
            mat[rowIndex][colIndex] >
                ((mat[rowIndex + 1] && mat[rowIndex + 1][colIndex]) || -Infinity)
        ) {
            return [rowIndex, colIndex];
        }
    }
    return;
};

console.log(
    findPeakGrid(
        (mat = [
            [7, 2, 3, 1, 2],
            [6, 5, 4, 2, 1],
        ]),
    ),
);

console.log(
    findPeakGrid(
        (mat = [
            [10, 20, 15],
            [21, 30, 14],
            [7, 16, 32],
        ]),
    ),
);

console.log(
    findPeakGrid(
        (mat = [
            [1, 4],
            [3, 2],
        ]),
    ),
);
