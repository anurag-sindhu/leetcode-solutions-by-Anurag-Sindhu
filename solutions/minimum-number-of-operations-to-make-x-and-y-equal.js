var minimumOperationsToMakeEqual = function (x, y) {
    let operations = 0;
    if (x == y) {
        return 0;
    }
    if (y > x) {
        return y - x;
    }
    while (true) {
        if (x === y) {
            break;
        }
        const mod11 = x % 11;
        const mod5 = x % 5;
        if (mod11 === 0 && x / 11 >= y) {
            x = x / 11;
            operations += 1;
            continue;
        } else if (mod5 === 0 && x / 5 >= y) {
            x = x / 5;
            operations += 1;
            continue;
        }
        const decrementFromXForMod5 = mod5;
        const incrementInXForMod5 = 5 - mod5;
        const decrementFromXForMod11 = mod11;
        const incrementInXForMod11 = 11 - mod11;
        let tempArr = [
            decrementFromXForMod5,
            incrementInXForMod5,
            decrementFromXForMod11,
            incrementInXForMod11,
        ];
        let minOperations = Infinity;
        let minOperationIndex = null;
        for (let index = 0; index < tempArr.length; index++) {
            if (minOperations > tempArr[index]) {
                minOperations = Math.min(minOperations, tempArr[index]);
                minOperationIndex = index;
            }
        }
        if (minOperationIndex === 0) {
        } else if (minOperationIndex === 1) {
        } else if (minOperationIndex === 2) {
        } else if (minOperationIndex === 3) {
        }
        if (reminder5 === reminder11) {
            operations += reminder11;
            x = (x - reminder11) / 11;
        } else if (reminder5 > reminder11 && (x - reminder11) % 11 === 0) {
            operations += reminder11 + 1;
            x = (x - reminder11) / 11;
        } else if (reminder5 < reminder11 && (x - reminder5) % 5 === 0) {
            operations += reminder5 + 1;
            x = (x - reminder5) / 5;
        } else {
            operations += x - y;
            x = y;
        }
    }
    return operations;
};

console.log(minimumOperationsToMakeEqual((x = 54), (y = 2)));
console.log(minimumOperationsToMakeEqual((x = 26), (y = 1)));
console.log(minimumOperationsToMakeEqual((x = 25), (y = 30)));
