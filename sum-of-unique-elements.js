var sumOfUnique = function (nums) {
    let sum = 0;
    const obj = {};
    for (const iterator of nums) {
        if (!obj[iterator]) {
            obj[iterator] = 0;
            sum += iterator;
        } else {
            if (obj[iterator] === 1) {
                sum -= iterator;
            }
        }
        obj[iterator] += 1;
    }
    return sum;
};

console.log(sumOfUnique((nums = [1, 2, 3, 2])));
console.log(sumOfUnique((nums = [1, 1, 1, 1, 1])));
console.log(sumOfUnique((nums = [1, 2, 3, 4, 5])));
