var maximizeSquareArea = function (n, m, hBars, vBars) {
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

console.log(maximizeSquareArea((m = 6), (n = 7), (hFences = [2]), (vFences = [4])));
console.log(maximizeSquareArea((m = 4), (n = 3), (hFences = [2, 3]), (vFences = [2])));
