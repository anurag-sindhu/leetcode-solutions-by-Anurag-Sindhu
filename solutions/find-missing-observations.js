var missingRolls = function (rolls, mean, n) {
    const sum = rolls.reduce((acc, curr) => acc + curr, 0);
    const totalSum = (rolls.length + n) * mean;
    if (parseInt((totalSum - sum) / n) <= 0) {
        return [];
    }
    if (totalSum - sum > 6 * n) {
        return [];
    }
    if (totalSum < sum) {
        return [];
    }
    const aa = Math.floor((totalSum - sum) / n);
    let mod = (totalSum - sum) % n;
    if (Math.floor((totalSum - sum) / n) > 6) {
        return [];
    }
    if (mod === 0) {
        return new Array(n).fill(aa);
    } else {
        if (aa + mod <= 6) {
            const arr = new Array(n - 1).fill(aa);
            arr.push(aa + mod);
            return arr;
        } else {
            const arr = new Array(n - mod).fill(aa);
            while (mod--) {
                arr.push(aa + 1);
            }
            console.log(arr.length);
            return arr;
        }
    }
};

console.log(
    missingRolls(
        [
            4, 2, 2, 5, 4, 5, 4, 5, 3, 3, 6, 1, 2, 4, 2, 1, 6, 5, 4, 2, 3, 4, 2, 3, 3, 5, 4, 1, 4,
            4, 5, 3, 6, 1, 5, 2, 3, 3, 6, 1, 6, 4, 1, 3,
        ],
        2,
        53,
    ),
);
console.log(
    missingRolls(
        [
            4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1, 5, 4, 3, 5,
            1, 5,
        ],
        4,
        40,
    ),
);
console.log(missingRolls([6, 3, 4, 3, 5, 3], 1, 6));
console.log(missingRolls([3, 5, 3], 5, 3));
console.log(
    missingRolls(
        [
            4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1, 5, 4, 3, 5,
            1, 5,
        ],
        4,
        40,
    ),
);
console.log(missingRolls((rolls = [1, 2, 3, 4]), (mean = 6), (n = 4)));
console.log(missingRolls((rolls = [3, 2, 4, 3]), (mean = 4), (n = 2)));
console.log(missingRolls((rolls = [1, 5, 6]), (mean = 3), (n = 4)));
