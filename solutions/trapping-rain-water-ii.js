var trapRainWater = function (heightMap) {
    const fromLeftToRight = (function () {
        const arr = [];
        for (let rowIndex = 0; rowIndex < heightMap.length; rowIndex++) {
            arr[rowIndex] = [];
            for (let columnIndex = 0; columnIndex < heightMap[rowIndex].length; columnIndex++) {
                if (arr[rowIndex][columnIndex - 1] == undefined) {
                    arr[rowIndex][columnIndex] = Math.max(heightMap[rowIndex][columnIndex]);
                } else {
                    arr[rowIndex][columnIndex] = Math.max(
                        arr[rowIndex][columnIndex - 1],
                        heightMap[rowIndex][columnIndex],
                    );
                }
            }
        }
        return arr;
    })();

    const fromRightToLeft = (function () {
        const arr = [];
        for (let rowIndex = 0; rowIndex < heightMap.length; rowIndex++) {
            arr[rowIndex] = [];
            for (
                let columnIndex = heightMap[rowIndex].length - 1;
                columnIndex >= 0;
                columnIndex--
            ) {
                if (arr[rowIndex][columnIndex + 1] == undefined) {
                    arr[rowIndex][columnIndex] = Math.max(heightMap[rowIndex][columnIndex]);
                } else {
                    arr[rowIndex][columnIndex] = Math.max(
                        arr[rowIndex][columnIndex + 1],
                        heightMap[rowIndex][columnIndex],
                    );
                }
            }
        }
        return arr;
    })();

    const fromTopToBottom = (function () {
        const arr = [];
        for (let columnIndex = 0; columnIndex < heightMap[0].length; columnIndex++) {
            for (let rowIndex = 0; rowIndex < heightMap.length; rowIndex++) {
                if (arr[rowIndex] == undefined) arr[rowIndex] = [];
                if (arr[rowIndex - 1] == undefined) {
                    arr[rowIndex][columnIndex] = Math.max(heightMap[rowIndex][columnIndex]);
                } else {
                    arr[rowIndex][columnIndex] = Math.max(
                        arr[rowIndex - 1][columnIndex],
                        heightMap[rowIndex][columnIndex],
                    );
                }
            }
        }
        return arr;
    })();

    const fromBottomToTop = (function () {
        const arr = [];
        for (let columnIndex = heightMap[0].length - 1; columnIndex >= 0; columnIndex--) {
            for (let rowIndex = heightMap.length - 1; rowIndex >= 0; rowIndex--) {
                if (arr[rowIndex] == undefined) arr[rowIndex] = [];
                if (arr[rowIndex + 1] == undefined) {
                    arr[rowIndex][columnIndex] = Math.max(heightMap[rowIndex][columnIndex]);
                } else {
                    arr[rowIndex][columnIndex] = Math.max(
                        arr[rowIndex + 1][columnIndex],
                        heightMap[rowIndex][columnIndex],
                    );
                }
            }
        }
        return arr;
    })();
    let count = 0;
    for (let rowIndex = 1; rowIndex < heightMap.length - 1; rowIndex++) {
        for (let columnIndex = 1; columnIndex < heightMap[rowIndex].length - 1; columnIndex++) {
            const minimum = Math.min(
                fromLeftToRight[rowIndex][columnIndex],
                fromRightToLeft[rowIndex][columnIndex],
                fromTopToBottom[rowIndex][columnIndex],
                fromBottomToTop[rowIndex][columnIndex],
            );
            count += minimum - heightMap[rowIndex][columnIndex];
        }
    }
    return count;
};

console.log(
    4 ===
        trapRainWater([
            [12, 13, 1, 12],
            [13, 4, 13, 12],
            [13, 8, 10, 12],
            [12, 13, 12, 12],
            [13, 13, 13, 13],
        ]),
);

console.log(
    4 ===
        trapRainWater([
            [1, 4, 3, 1, 3, 2],
            [3, 2, 1, 3, 2, 4],
            [2, 3, 3, 2, 3, 1],
        ]),
);
console.log(
    trapRainWater([
        [3, 3, 3, 3, 3],
        [3, 2, 2, 2, 3],
        [3, 2, 1, 2, 3],
        [3, 2, 2, 2, 3],
        [3, 3, 3, 3, 3],
    ]) == 10,
);
