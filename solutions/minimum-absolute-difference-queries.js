var minDifference = function (nums, queries) {
    const output = [];
    const dynamicProgramming = [];
    for (let numsIndex = 0; numsIndex <= nums.length; numsIndex++) {
        dynamicProgramming[numsIndex] = [];
        for (let index = 0; index <= 100; index++) {
            dynamicProgramming[numsIndex][index] = 0;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        if (index != 0) {
            for (let dpIndex = 0; dpIndex <= 100; dpIndex++) {
                dynamicProgramming[index + 1][dpIndex] = dynamicProgramming[index][dpIndex];
            }
        }
        dynamicProgramming[index + 1][nums[index]] += 1;
    }
    for (const [fromIndex, toIndex] of queries) {
        const diff = [];
        for (let index = 0; index <= 100; index++) {
            if (dynamicProgramming[fromIndex][index] !== dynamicProgramming[toIndex + 1][index]) {
                diff.push(index);
            }
        }
        let minDifference = Infinity;
        for (let index = 1; index < diff.length; index++) {
            const difference = diff[index] - diff[index - 1];
            if (minDifference > difference) {
                minDifference = difference;
            }
        }
        output.push(minDifference === Infinity ? -1 : minDifference);
    }
    return output;
};

console.log(
    minDifference(
        (nums = [1, 3, 4, 8]),
        (queries = [
            [0, 1],
            [1, 2],
            [2, 3],
            [0, 3],
        ]),
    ),
);
console.log(
    minDifference(
        (nums = [4, 5, 2, 2, 7, 10]),
        (queries = [
            [2, 3],
            [0, 2],
            [0, 5],
            [3, 5],
        ]),
    ),
);
