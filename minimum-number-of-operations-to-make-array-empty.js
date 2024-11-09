var minOperations = function (nums) {
    let count = 0;
    const config = {};
    for (const element of nums) {
        if (!config[element]) {
            config[element] = 0;
        }
        config[element] += 1;
    }
    for (const key in config) {
        if (config[key] === 1) {
            return -1;
        }
        count += Math.floor(config[key] / 3);
        if (config[key] % 3 !== 0) {
            count += 1;
        }
    }
    return count;
};

console.log(
    minOperations(
        (nums = [14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12]),
    ) === 7,
);
console.log(minOperations((nums = [2, 3, 3, 2, 2, 4, 2, 3, 4])) === 4);
console.log(minOperations((nums = [2, 1, 2, 2, 3, 3])) === -1);
