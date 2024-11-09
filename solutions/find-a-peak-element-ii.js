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
        for (let index = halfIndex; index < nums.length; index++) {
            nums[index] = -1;
        }
        return findPeakElement(nums.splice(0, halfIndex + 1), index);
    } else {
        for (let index = 0; index < halfIndex; index++) {
            nums[index] = -1;
        }
        return findPeakElement(nums.splice(halfIndex), index + halfIndex);
    }
};

var findPeakGrid = function (mat) {
    let rowIndex = 0;
    while (true) {
        const currentRow = mat[rowIndex];
        const colIndex = findPeakElement(currentRow);
        if (
            currentRow[colIndex] > (currentRow[colIndex - 1] || -Infinity) &&
            currentRow[colIndex] > (currentRow[colIndex + 1] || -Infinity) &&
            currentRow[colIndex] >
                ((mat[rowIndex - 1] && mat[rowIndex - 1][colIndex]) || -Infinity) &&
            currentRow[colIndex] > ((mat[rowIndex + 1] && mat[rowIndex + 1][colIndex]) || -Infinity)
        ) {
            return [rowIndex, colIndex];
        } else if (
            mat[rowIndex + 1] &&
            currentRow[colIndex] < (mat[rowIndex + 1][colIndex] || -Infinity)
        ) {
            rowIndex = rowIndex + 1;
        } else {
            rowIndex = rowIndex - 1;
        }
    }
};

console.log(
    findPeakGrid(
        (mat = [
            [49, 58, 49, 11, 88, 85, 70, 18, 84, 45, 16, 23, 69],
            [51, 68, 17, 94, 29, 1, 97, 3, 39, 60, 87, 93, 70],
            [55, 69, 49, 30, 32, 59, 45, 20, 36, 25, 93, 98, 15],
            [5, 85, 54, 79, 99, 3, 31, 27, 9, 13, 77, 5, 58],
            [77, 87, 91, 7, 32, 95, 6, 52, 57, 30, 70, 28, 97],
            [100, 8, 18, 65, 38, 30, 94, 74, 41, 74, 77, 99, 87],
            [42, 31, 39, 19, 85, 67, 29, 53, 39, 36, 8, 72, 76],
            [95, 23, 81, 87, 55, 72, 64, 7, 45, 83, 86, 49, 68],
            [41, 90, 54, 53, 20, 39, 49, 24, 97, 69, 61, 31, 29],
            [39, 91, 19, 60, 8, 72, 53, 54, 72, 68, 18, 50, 32],
            [33, 27, 43, 83, 11, 58, 48, 12, 69, 93, 25, 7, 35],
            [49, 87, 78, 6, 10, 25, 98, 76, 93, 86, 72, 28, 62],
            [27, 43, 39, 2, 28, 95, 16, 96, 97, 62, 32, 90, 78],
            [91, 27, 51, 31, 71, 42, 100, 37, 49, 60, 69, 84, 46],
            [40, 34, 47, 66, 64, 60, 13, 93, 61, 98, 41, 27, 48],
        ]),
    ),
);
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
