var countPoints = function (points, queries) {
    let output = [];
    let count = 0;
    for (const [xj, yj, rj] of queries) {
        for (const [xi, yi] of points) {
            const tempSum = Math.abs(xj - xi + yj - yi);
            if (tempSum <= rj) {
                count += 1;
            }
        }
        output.push(count);
        count = 0;
    }
    return output;
};

console.log(
    countPoints(
        [
            [99, 113],
            [150, 165],
            [23, 65],
            [175, 154],
            [84, 83],
            [24, 59],
            [124, 29],
            [19, 97],
            [117, 182],
            [105, 191],
            [83, 117],
            [114, 35],
            [0, 111],
            [22, 53],
        ],
        [
            [105, 191, 155],
            [114, 35, 94],
            [84, 83, 68],
            [175, 154, 28],
            [99, 113, 80],
            [175, 154, 177],
            [175, 154, 181],
            [114, 35, 134],
            [22, 53, 105],
            [124, 29, 164],
            [6, 99, 39],
            [84, 83, 35],
        ],
    ),
); //[11,7,8,2,7,11,13,10,10,14,3,3]

console.log(
    countPoints(
        (points = [
            [1, 3],
            [3, 3],
            [5, 3],
            [2, 2],
        ]),
        (queries = [
            [2, 3, 1],
            [4, 3, 1],
            [1, 1, 2],
        ]),
    ),
);

console.log(
    countPoints(
        (points = [
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
        ]),
        (queries = [
            [1, 2, 2],
            [2, 2, 2],
            [4, 3, 2],
            [4, 3, 3],
        ]),
    ),
);
