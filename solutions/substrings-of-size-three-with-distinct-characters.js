var countGoodSubstrings = function (str) {
    let count = 0;
    let tempCount = 0;
    const obj = {};
    obj[str[0]] = 1;
    if (!obj[str[1]]) {
        obj[str[1]] = 0;
    }
    obj[str[1]] += 1;
    for (let index = 2; index < str.length; index++) {
        if (!obj[str[index]]) {
            obj[str[index]] = 0;
        }
        obj[str[index]] += 1;
        for (const key in obj) {
            if (obj[key]) {
                tempCount++;
            }
        }
        if (tempCount === 3) {
            count += 1;
        }
        tempCount = 0;
        obj[str[index - 2]] -= 1;
    }
    return count;
};

console.log(countGoodSubstrings((s = 'xyzzaz')));
console.log(countGoodSubstrings((s = 'aababcabc')));
