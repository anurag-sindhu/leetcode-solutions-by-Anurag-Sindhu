function findRotatedGrid(grid, rowIndex) {
    let store = null;
    let columnIndex = null;
    let curRowIndex = null;
    // Top to bottom
    columnIndex = rowIndex;
    curRowIndex = rowIndex;
    for (; curRowIndex < grid.length - rowIndex; curRowIndex++) {
        if (store !== null) {
            const tempStore = grid[curRowIndex][columnIndex];
            grid[curRowIndex][columnIndex] = store;
            store = tempStore;
        } else {
            store = grid[curRowIndex][columnIndex];
        }
    }
    // Left to right
    columnIndex = rowIndex + 1;
    curRowIndex = grid.length - rowIndex - 1;
    for (; columnIndex < grid[rowIndex].length - rowIndex; columnIndex++) {
        const tempStore = grid[curRowIndex][columnIndex];
        grid[curRowIndex][columnIndex] = store;
        store = tempStore;
    }
    // Bottom to top
    curRowIndex = grid.length - rowIndex - 1 - 1;
    columnIndex = grid[rowIndex].length - rowIndex - 1;
    for (; curRowIndex >= rowIndex; curRowIndex--) {
        const tempStore = grid[curRowIndex][columnIndex];
        grid[curRowIndex][columnIndex] = store;
        store = tempStore;
    }
    //Right to left
    columnIndex = grid[rowIndex].length - rowIndex - 1 - 1;
    curRowIndex = rowIndex;
    for (; columnIndex >= rowIndex; columnIndex--) {
        const tempStore = grid[curRowIndex][columnIndex];
        grid[curRowIndex][columnIndex] = store;
        store = tempStore;
    }
    return;
}

var rotateGrid = function (grid, k) {
    const gridSize = Math.min(grid.length, grid[0].length) / 2;
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const totalCircleSize =
            2 * (grid.length - 2 * rowIndex) + 2 * (grid[0].length - 2 * rowIndex) - 4;
        let circleSize = k % totalCircleSize;
        while (circleSize--) {
            findRotatedGrid(grid, rowIndex);
        }
    }
    return grid;
};

/**
 * [
    [4, 2, 4, 7, 2, 4, 7, 1, 7, 2],
    [9, 1, 4, 5, 7, 3, 7, 6, 9, 10],
    [8, 6, 10, 1, 4, 6, 6, 2, 6, 3],
    [5, 6, 7, 1, 1, 5, 2, 5, 7, 5],
    [4, 9, 1, 1, 2, 2, 3, 8, 4, 7],
    [7, 7, 7, 1, 5, 10, 3, 4, 7, 2],
];
 */
console.log(
    rotateGrid(
        [
            [4, 5, 8, 9, 4, 2, 4, 7, 2, 4],
            [7, 1, 9, 6, 6, 1, 4, 5, 7, 7],
            [7, 1, 5, 1, 1, 7, 10, 1, 3, 1],
            [7, 2, 2, 5, 2, 6, 6, 4, 7, 7],
            [1, 2, 3, 8, 4, 7, 6, 9, 6, 2],
            [5, 10, 3, 4, 7, 2, 7, 5, 3, 10],
        ],
        4,
    ),
);
/**
 [
    [188, 2035, 4471, 2822, 3970, 1906, 3608, 298, 3072, 3546, 1502, 773],
    [996, 1058, 3645, 681, 2910, 2513, 4357, 4645, 3060, 743, 3076, 4388],
    [3274, 1709, 4376, 3944, 2527, 3838, 63, 3829, 233, 4525, 3712, 3115],
    [744, 1780, 1276, 4478, 3226, 2742, 3454, 4127, 3208, 2506, 3110, 747],
    [4431, 4179, 3271, 2690, 83, 4161, 2938, 1761, 4717, 3217, 2715, 3937],
    [898, 304, 2587, 4153, 3297, 946, 3546, 3204, 4347, 3351, 3139, 1038],
    [1086, 2443, 3725, 1273, 2968, 4214, 4549, 1897, 3452, 2278, 2227, 3838],
    [2055, 2350, 161, 2292, 3268, 2610, 3766, 2862, 1601, 302, 4470, 2270],
    [3797, 2278, 4095, 234, 4717, 608, 1189, 4381, 3704, 703, 2778, 3832],
    [1215, 4499, 1672, 3268, 1122, 4272, 4510, 509, 2344, 757, 1293, 108],
    [84, 2042, 1997, 2284, 4203, 1922, 2216, 701, 219, 2159, 1345, 4143],
    [282, 234, 4780, 2766, 550, 218, 3653, 81, 66, 2157, 1835, 4896],
    [2721, 1011, 4087, 1090, 4406, 3276, 1755, 1727, 1131, 4108, 3633, 2842],
    [2360, 2321, 1435, 2617, 1202, 2876, 3420, 3034, 2805, 3170, 3651, 1516],
];
 */
console.log(
    rotateGrid(
        [
            [3970, 1906, 3608, 298, 3072, 3546, 1502, 773, 4388, 3115, 747, 3937],
            [2822, 304, 4179, 1780, 1709, 1058, 3645, 681, 2910, 2513, 4357, 1038],
            [4471, 2443, 218, 550, 2766, 4780, 1997, 1672, 4095, 161, 4645, 3838],
            [2035, 2350, 3653, 4127, 3208, 4717, 4347, 3452, 1601, 3725, 3060, 2270],
            [188, 2278, 81, 3454, 3204, 1897, 2862, 4381, 3704, 2587, 743, 3832],
            [996, 4499, 66, 2742, 1761, 1189, 608, 509, 2344, 3271, 3076, 108],
            [3274, 2042, 2157, 3226, 2938, 3766, 2610, 4510, 219, 1276, 3712, 4143],
            [744, 234, 2159, 4478, 4161, 4549, 4214, 4272, 701, 4376, 3110, 4896],
            [4431, 1011, 757, 2690, 83, 3546, 946, 1122, 2216, 3944, 2715, 2842],
            [898, 4087, 703, 4153, 3297, 2968, 3268, 4717, 1922, 2527, 3139, 1516],
            [1086, 1090, 302, 1273, 2292, 234, 3268, 2284, 4203, 3838, 2227, 3651],
            [2055, 4406, 2278, 3351, 3217, 2506, 4525, 233, 3829, 63, 4470, 3170],
            [3797, 3276, 1755, 1727, 1131, 4108, 3633, 1835, 1345, 1293, 2778, 2805],
            [1215, 84, 282, 2721, 2360, 2321, 1435, 2617, 1202, 2876, 3420, 3034],
        ],
        405548684,
    ),
);

/**
[
    [1, 4, 8, 10],
    [10, 3, 7, 10],
    [6, 6, 6, 1],
    [7, 4, 1, 10],
    [1, 10, 9, 2],
    [2, 1, 10, 10],
    [3, 8, 4, 9],
    [7, 1, 4, 2],
    [7, 1, 2, 10],
    [2, 10, 7, 5],
];
 */

/**
 * [
    [1, 2],
    [3, 4],
];
 */
console.log(
    rotateGrid(
        [
            [4, 5, 8, 9, 4, 2, 4, 7, 2, 4],
            [7, 1, 9, 6, 6, 1, 4, 5, 7, 7],
            [7, 1, 5, 1, 1, 7, 10, 1, 3, 1],
            [7, 2, 2, 5, 2, 6, 6, 4, 7, 7],
            [1, 2, 3, 8, 4, 7, 6, 9, 6, 2],
            [5, 10, 3, 4, 7, 2, 7, 5, 3, 10],
        ],
        4,
    ),
);

console.log(
    rotateGrid(
        (grid = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]),
        (k = 2),
    ),
);

console.log(
    rotateGrid(
        (grid = [
            [1, 2, 3, 4, 3, 4],
            [5, 6, 7, 8, 3, 4],
            [9, 10, 11, 12, 3, 4],
            [13, 14, 15, 16, 3, 4],
        ]),
        (k = 2),
    ),
);
console.log(
    rotateGrid(
        (grid = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]),
        (k = 2),
    ),
);
/**
 * [
    [2, 3, 4, 8],
    [1, 7, 7, 8],
    [5, 6, 11, 12],
    [5, 6, 11, 12],
    [9, 10, 10, 16],
    [9, 13, 14, 15],
];
 */

console.log(
    rotateGrid(
        (grid = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]),
        (k = 2),
    ),
);

console.log(
    rotateGrid(
        (grid = [
            [40, 10],
            [30, 20],
        ]),
        (k = 1),
    ),
);
