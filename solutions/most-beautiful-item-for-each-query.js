const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

const binarySearchMinIndexGreaterThanSearch = (arr, search, index = 0) => {
    if (!arr.length || arr.length === 1 || arr.length === 2) {
        if (arr.length == 1) {
            const first = arr[0][0];
            if (first <= search) {
                return index + 0;
            }
            return null;
        }
        if (arr.length == 2) {
            const first = arr[0][0];
            const second = arr[1][0];
            if (second <= search) {
                return index + 1;
            }
            if (first <= search) {
                return index + 0;
            }
            return null;
        }
        return null;
    }
    const middleIndex = parseInt(arr.length / 2);
    if (arr[middleIndex][0] > search) {
        return binarySearchMinIndexGreaterThanSearch(arr.slice(0, middleIndex + 1), search, index);
    } else {
        return binarySearchMinIndexGreaterThanSearch(
            arr.slice(middleIndex),
            search,
            index + middleIndex,
        );
    }
};

var maximumBeauty = function (items, queries) {
    let output = [];
    items.sort(([a], [b]) => a - b);
    const obj = {};
    let prevBeauty = -Infinity;
    for (const [price, beauty] of items) {
        prevBeauty = Math.max(prevBeauty, beauty);
        obj[price] = prevBeauty;
    }
    const arr = [];
    for (const key in obj) {
        arr.push([Number(key), obj[key]]);
    }
    arr.sort(([a], [b]) => a - b);
    for (const element of queries) {
        if (obj[element]) {
            output.push(obj[element]);
        } else {
            const index = binarySearchMinIndexGreaterThanSearch(arr, element);
            output.push((arr[index] && arr[index][1]) || 0);
        }
    }
    return output;
};

console.log(
    areTwoArrayEqual(
        [2, 7, 7, 7, 7, 7],
        maximumBeauty(
            (items = [
                [1, 2],
                [3, 2],
                [2, 7],
                [5, 6],
                [3, 5],
            ]),
            (queries = [1, 2, 3, 4, 5, 6]),
        ),
    ),
);

console.log(
    areTwoArrayEqual(
        [2, 4, 5, 5, 6, 6],
        maximumBeauty(
            (items = [
                [1, 2],
                [3, 2],
                [2, 4],
                [5, 6],
                [3, 5],
            ]),
            (queries = [1, 2, 3, 4, 5, 6]),
        ),
    ),
);
console.log(
    areTwoArrayEqual(
        [
            962, 962, 962, 962, 746, 962, 962, 962, 946, 962, 962, 919, 746, 746, 962, 962, 962,
            919, 962,
        ],
        maximumBeauty(
            [
                [193, 732],
                [781, 962],
                [864, 954],
                [749, 627],
                [136, 746],
                [478, 548],
                [640, 908],
                [210, 799],
                [567, 715],
                [914, 388],
                [487, 853],
                [533, 554],
                [247, 919],
                [958, 150],
                [193, 523],
                [176, 656],
                [395, 469],
                [763, 821],
                [542, 946],
                [701, 676],
            ],
            [
                885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153, 151, 1479,
                1180, 875, 276, 1584,
            ],
        ),
    ),
); //

console.log(
    areTwoArrayEqual(
        [4],
        maximumBeauty(
            (items = [
                [1, 2],
                [1, 2],
                [1, 3],
                [1, 4],
            ]),
            (queries = [1]),
        ),
    ),
); //
console.log(areTwoArrayEqual([0], maximumBeauty((items = [[10, 1000]]), (queries = [5])))); //[0]
