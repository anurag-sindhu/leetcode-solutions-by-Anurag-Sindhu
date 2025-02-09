var findLongestChain = function (pairs) {
    pairs.sort(([a], [b]) => a - b);
    let count = 1;
    const indexCountMapping = {
        [pairs.length - 1]: 1,
    };
    for (let index = pairs.length - 1 - 1; index >= 0; index--) {
        const to = pairs[index][1];
        let hasBroke = false;
        for (let secondaryIndex = index; secondaryIndex < pairs.length; secondaryIndex++) {
            const element = pairs[secondaryIndex];
            if (to < element[0]) {
                count = Math.max(count, indexCountMapping[secondaryIndex] + 1);
                indexCountMapping[index] = count;
                hasBroke = true;
                break;
            }
        }
        if (hasBroke == false) {
            count = Math.max(count, 1);
            indexCountMapping[index] = count;
        }
    }

    return count;
};

console.log(
    findLongestChain([
        [-7, -1],
        [0, 10],
        [2, 3],
        [3, 10],
        [3, 6],
        [4, 5],
        [7, 9],
    ]) === 4,
);
console.log(
    findLongestChain([
        [-10, -8],
        [-6, -4],
        [1, 7],
        [6, 10],
        [8, 9],
        [9, 10],
        [-5, 0],
        [-4, 7],
    ]) === 4,
);

console.log(
    findLongestChain(
        (pairs = [
            [1, 2],
            [2, 3],
            [3, 4],
        ]),
    ) === 2,
);

console.log(
    findLongestChain(
        (pairs = [
            [1, 2],
            [4, 5],
            [7, 8],
        ]),
    ) === 3,
);
