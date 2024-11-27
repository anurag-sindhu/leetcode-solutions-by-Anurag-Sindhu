const binarySearch = (arr, target) => {
    let l = 0,
        r = arr.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return l;
};

var countRectangles = function (rectangles, points) {
    const arr = [];
    const heightObj = (function () {
        const obj = [];
        for (const [len, hei] of rectangles) {
            if (!obj[hei]) {
                obj[hei] = [];
            }
            obj[hei].push(len);
        }
        for (const key in obj) {
            obj[key] = obj[key].sort((a, b) => a - b);
        }
        return obj;
    })();
    for (const [len, hei] of points) {
        let count = 0;
        for (let index = hei; index < heightObj.length; index++) {
            if (heightObj[index]) {
                const foundIndex = binarySearch(heightObj[index], len);
                count += heightObj[index].length - foundIndex;
            }
        }
        arr.push(count);
    }
    return arr;
};

console.log(
    countRectangles(
        (rectangles = [
            [1, 2],
            [2, 3],
            [3, 3],
            [4, 3],
            [2, 5],
        ]),
        (points = [
            [2, 1],
            [1, 4],
        ]),
    ),
);

console.log(
    countRectangles(
        (rectangles = [
            [1, 2],
            [2, 3],
            [2, 5],
        ]),
        (points = [
            [2, 1],
            [1, 4],
        ]),
    ),
);
console.log(
    countRectangles(
        (rectangles = [
            [1, 1],
            [2, 2],
            [3, 3],
        ]),
        (points = [
            [1, 3],
            [1, 1],
        ]),
    ),
);
