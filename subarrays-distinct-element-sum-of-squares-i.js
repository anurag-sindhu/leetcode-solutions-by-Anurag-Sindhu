var sumCounts = function (array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        let obj = {};
        for (let tempIndex = 0; tempIndex < index; tempIndex++) {
            if (obj[array[tempIndex]] === undefined) {
                obj[array[tempIndex]] = 0;
            }
            obj[array[tempIndex]] += 1;
        }
        let uniqueLen = 0;
        for (let secondaryIndex = index; secondaryIndex < array.length; secondaryIndex++) {
            if (
                obj[array[secondaryIndex - index - 1]] !== undefined &&
                obj[array[secondaryIndex - index - 1]] !== 0
            ) {
                obj[array[secondaryIndex - index - 1]] -= 1;
                if (obj[array[secondaryIndex - index - 1]] === 0) {
                    delete obj[array[secondaryIndex - index - 1]];
                }
            }
            if (obj[array[secondaryIndex]] === undefined) {
                obj[array[secondaryIndex]] = 0;
            }
            obj[array[secondaryIndex]] += 1;
            sum += Object.keys(obj).length * Object.keys(obj).length;
        }
    }
    return sum;
};

console.log(sumCounts((nums = [2, 2, 5, 5])) === 22);
console.log(sumCounts((nums = [1, 2, 1])) === 15);
console.log(sumCounts((nums = [1, 1])) === 3);
