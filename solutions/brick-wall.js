var leastBricks = function (wall) {
    const totalSum = wall[0].reduce((acc, curr) => acc + curr);
    const freq = {};
    for (const element of wall) {
        let sum = 0;
        for (const element1 of element) {
            sum += element1;
            if (sum !== totalSum) {
                if (freq[sum] == undefined) {
                    freq[sum] = 0;
                }
                freq[sum] += 1;
            }
        }
    }
    let maxVal = 0;
    for (const key in freq) {
        maxVal = Math.max(maxVal, freq[key]);
    }

    return wall.length - maxVal;
};

console.log(
    leastBricks(
        (wall = [
            [1, 2, 2, 1],
            [3, 1, 2],
            [1, 3, 2],
            [2, 4],
            [3, 1, 2],
            [1, 3, 1, 1],
        ]),
    ),
);
console.log(leastBricks((wall = [[1], [1], [1]])));
