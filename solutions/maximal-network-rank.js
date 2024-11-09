var maximalNetworkRank = function (n, roads) {
    const roadConfigPaths = {};
    const roadConfig = {};
    for (const [from, to] of roads) {
        if (roadConfig[from] === undefined) {
            roadConfig[from] = 0;
        }
        roadConfig[from] += 1;
        if (roadConfig[to] === undefined) {
            roadConfig[to] = 0;
        }
        roadConfig[to] += 1;
        if (from > to) {
            roadConfigPaths[`${to}_${from}`] = true;
        } else {
            roadConfigPaths[`${from}_${to}`] = true;
        }
    }
    let firstHighest = 0;
    let secondHighest = 0;
    let collectFirstHighestPivots = [];
    let collectSecondHighestPivots = [];
    for (const key in roadConfig) {
        if (roadConfig[key] > firstHighest) {
            if (secondHighest <= firstHighest) {
                secondHighest = firstHighest;
            }
            firstHighest = roadConfig[key];
        } else if (secondHighest <= roadConfig[key]) {
            secondHighest = roadConfig[key];
        }
    }
    for (const key in roadConfig) {
        if (roadConfig[key] === firstHighest) {
            collectFirstHighestPivots.push(key);
        } else if (roadConfig[key] === secondHighest) {
            collectSecondHighestPivots.push(key);
        }
    }
    if (collectFirstHighestPivots.length > 1) {
        for (let index = 0; index < collectFirstHighestPivots.length - 1; index++) {
            for (
                let indexSecondary = index + 1;
                indexSecondary < collectFirstHighestPivots.length;
                indexSecondary++
            ) {
                let key =
                    Number(collectFirstHighestPivots[index]) >
                    Number(collectFirstHighestPivots[indexSecondary])
                        ? `${collectFirstHighestPivots[indexSecondary]}_${collectFirstHighestPivots[index]}`
                        : `${collectFirstHighestPivots[index]}_${collectFirstHighestPivots[indexSecondary]}`;
                if (!roadConfigPaths[key]) {
                    return firstHighest + secondHighest;
                }
            }
        }
        return firstHighest * 2 - 1;
    } else if (collectFirstHighestPivots.length) {
        const firstMostPivots = collectFirstHighestPivots[0];
        for (const iterator of collectSecondHighestPivots) {
            let key =
                Number(firstMostPivots) > Number(iterator)
                    ? `${iterator}_${firstMostPivots}`
                    : `${firstMostPivots}_${iterator}`;
            if (!roadConfigPaths[key]) {
                return firstHighest + secondHighest;
            }
        }
        return firstHighest + secondHighest - 1;
    }
    return 0;
};

console.log(
    maximalNetworkRank(13, [
        [2, 11],
        [10, 12],
        [3, 2],
        [7, 8],
        [2, 9],
        [9, 8],
        [6, 7],
        [4, 3],
        [4, 7],
        [9, 4],
        [0, 11],
        [7, 3],
        [0, 2],
        [12, 2],
        [4, 12],
        [1, 6],
        [6, 8],
        [9, 5],
        [0, 7],
        [11, 6],
        [4, 1],
        [0, 9],
        [9, 7],
        [2, 10],
        [7, 12],
        [3, 6],
        [11, 7],
        [12, 6],
        [11, 10],
        [7, 5],
        [4, 2],
        [0, 10],
        [8, 1],
        [11, 3],
        [6, 2],
        [12, 11],
        [3, 1],
        [5, 3],
        [1, 11],
        [1, 10],
        [5, 6],
        [11, 4],
        [4, 6],
        [0, 3],
        [5, 12],
        [0, 8],
        [1, 5],
        [8, 10],
        [5, 8],
        [10, 3],
        [3, 9],
        [7, 1],
        [1, 9],
        [4, 5],
        [12, 1],
        [5, 11],
        [0, 6],
        [9, 11],
        [5, 2],
        [8, 4],
        [5, 10],
        [6, 9],
        [2, 7],
        [12, 8],
        [11, 8],
        [10, 4],
        [9, 12],
        [0, 5],
        [3, 8],
        [10, 6],
        [3, 12],
        [1, 2],
        [10, 9],
        [8, 2],
        [1, 0],
        [12, 0],
        [10, 7],
        [0, 4],
    ]) === 23,
);
console.log(maximalNetworkRank((n = 2), (roads = [])) === 0);
console.log(
    maximalNetworkRank(
        (n = 4),
        (roads = [
            [0, 1],
            [0, 3],
            [1, 2],
            [1, 3],
        ]),
    ) === 4,
);

console.log(
    maximalNetworkRank(
        (n = 5),
        (roads = [
            [0, 1],
            [0, 3],
            [1, 2],
            [1, 3],
            [2, 3],
            [2, 4],
        ]),
    ) === 5,
);

console.log(
    maximalNetworkRank(
        (n = 8),
        (roads = [
            [0, 1],
            [1, 2],
            [2, 3],
            [2, 4],
            [5, 6],
            [5, 7],
        ]),
    ) === 5,
);
