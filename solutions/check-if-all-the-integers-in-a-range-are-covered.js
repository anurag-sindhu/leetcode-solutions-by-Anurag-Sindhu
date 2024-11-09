var isCovered = function (ranges, left, right) {
    const rangesConfig = {};
    for (const [left, right] of ranges) {
        if (rangesConfig[left] && rangesConfig[right]) {
            continue;
        }
        for (let index = left; index <= right; index++) {
            rangesConfig[index] = true;
        }
    }
    for (let index = left; index <= right; index++) {
        if (!rangesConfig[index]) {
            return false;
        }
    }
    return true;
};

console.log(
    isCovered(
        (ranges = [
            [1, 2],
            [3, 4],
            [5, 6],
        ]),
        (left = 2),
        (right = 5),
    ),
);
console.log(
    isCovered(
        (ranges = [
            [1, 10],
            [10, 20],
        ]),
        (left = 21),
        (right = 21),
    ),
);
