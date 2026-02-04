var longestConsecutive = function (nums = []) {
    const obj = {};
    for (const iterator of nums) {
        obj[iterator] = true;
    }
    let max = 0;
    //if previous element doesn't exist then it may start a series which will be going ahead
    for (let iterator of nums) {
        if (!obj[iterator - 1]) {
            let tempCount = 1;
            while (obj[iterator + 1]) {
                tempCount++;
                ++iterator;
            }
            if (max < tempCount) {
                max = tempCount;
            }
        }
    }
    return max;
};

console.log(longestConsecutive((nums = [100, 4, 200, 1, 3, 2])));
console.log(longestConsecutive((nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1])));
console.log(
    longestConsecutive(
        (nums = [4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3]),
    ),
);
