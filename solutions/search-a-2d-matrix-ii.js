function isAvailableInRow(matrix, rowIndex, columnIndex, target) {
    for (const iterator of matrix[rowIndex]) {
        if (iterator === target) {
            return true;
        }
    }
    return false;
}
function isAvailableInColumn(matrix, rowIndex, columnIndex, target) {
    for (const iterator of matrix) {
        if (iterator[columnIndex] === target) {
            return true;
        }
    }
    return false;
}

const binarySearchMinIndexLessThanSearch = (arr, search) => {
    let left = 0,
        right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= search) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};

function findClosestLessOrEqual(arr, target) {
    let result = -1; // or null if you prefer
    for (let num of arr) {
        if (num <= target) {
            result = num;
        } else {
            break; // since array is sorted, no need to continue
        }
    }
    return result;
}

function getClosestIndices(arr, target) {
    let left = 0,
        right = arr.length - 1;
    let smaller = -1,
        greater = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return { target: mid, smaller: mid, greater: mid };
        }

        if (arr[mid] < target) {
            smaller = mid; // best smaller so far
            left = mid + 1;
        } else {
            greater = mid; // best greater so far
            right = mid - 1;
        }
    }

    return { smaller, greater };
}

var searchMatrix = function (matrix, target) {};

console.log(
    searchMatrix(
        (matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ]),
        (target = 23),
    ),
);
console.log(
    searchMatrix(
        (matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ]),
        (target = 5),
    ),
);

console.log(
    searchMatrix(
        (matrix = [
            [2, 3, 8, 9, 12],
            [3, 5, 11, 12, 19],
            [7, 6, 19, 16, 22],
            [12, 13, 214, 217, 224],
            [18, 21, 223, 226, 230],
        ]),
        (target = 8),
    ),
);
console.log(
    searchMatrix(
        (matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ]),
        (target = 14),
    ),
);
console.log(
    searchMatrix(
        (matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ]),
        (target = 0),
    ),
);
console.log(
    searchMatrix(
        (matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ]),
        (target = 20),
    ),
);
