var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);
    const hBarsObj = (function () {
        const obj = {};
        for (const element of hBars) {
            obj[element] = true;
        }
        return obj;
    })();
    const vBarsObj = (function () {
        const obj = {};
        for (const element of vBars) {
            obj[element] = true;
        }
        return obj;
    })();
    let maxGapInHorizontalBars = 1;
    let maxGapInVerticalBars = 1;
    let tempDist = 0;
    for (let index = 0; index < vBars.length; index++) {
        if (vBars[index] === 2) {
            maxGapInVerticalBars = 2;
            continue;
        }
        let tempIndex = index;
        tempDist = 2;
        while (vBarsObj[vBars[tempIndex] - 1] !== undefined) {
            tempDist += 1;
            tempIndex--;
        }
        maxGapInVerticalBars = Math.max(maxGapInVerticalBars, tempDist);
    }
    tempDist = 0;
    for (let index = 0; index < hBars.length; index++) {
        if (hBars[index] === 2) {
            maxGapInHorizontalBars = 2;
            continue;
        }
        let tempIndex = index;
        tempDist = 2;
        while (hBarsObj[hBars[tempIndex] - 1] !== undefined) {
            tempDist += 1;
            tempIndex--;
        }
        maxGapInHorizontalBars = Math.max(maxGapInHorizontalBars, tempDist);
    }
    return (
        Math.min(maxGapInHorizontalBars, maxGapInVerticalBars) *
        Math.min(maxGapInHorizontalBars, maxGapInVerticalBars)
    );
};

console.log(maximizeSquareHoleArea(3, 2, [3, 2, 4], [3, 2]) == 9);
console.log(maximizeSquareHoleArea((n = 2), (m = 3), (hBars = [2, 3]), (vBars = [2, 4])) == 4);
console.log(maximizeSquareHoleArea(14, 4, [13], [3, 4, 5, 2]) == 4);
console.log(maximizeSquareHoleArea(1, 1000000000, [2], [1000000001]) == 4);
console.log(maximizeSquareHoleArea((n = 2), (m = 1), (hBars = [2, 3]), (vBars = [2])) == 4);
console.log(maximizeSquareHoleArea((n = 1), (m = 1), (hBars = [2]), (vBars = [2])) == 4);
