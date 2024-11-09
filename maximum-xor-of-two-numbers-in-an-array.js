function findMaximumXOR(hold) {
    if (!hold || hold.length === 1) {
        return 0;
    }
    const tempObj = {};
    for (const iterator of hold) {
        tempObj[iterator] = iterator;
    }
    const obj = Object.values(tempObj);
    let arr = [];
    let max = 0;
    let highestDigit = 0;
    for (const iterator of obj) {
        let res = iterator.toString(2);
        if (res.length > highestDigit) {
            highestDigit = res.length;
        }
        arr.push(res);
    }
    const obj1 = {};
    for (const iterator of arr) {
        let res = ``;
        let lengthFound = iterator.length;
        let requiredLength = highestDigit - lengthFound;
        while (requiredLength--) {
            res += 0;
        }
        let finalOutput = `${res}${iterator}`;
        if (!obj1[lengthFound]) {
            obj1[lengthFound] = [];
        }
        obj1[lengthFound].push(finalOutput);
    }
    const highestDigitConcern = obj1[highestDigit];
    if (Object.keys(obj1).length === 1) {
        for (let index = 0; index < obj1[highestDigit].length; index++) {
            for (
                let index2 = index + 1;
                index2 < obj1[highestDigit].length;
                index2++
            ) {
                let tempRes =
                    parseInt(obj1[highestDigit][index], 2) ^
                    parseInt(obj1[highestDigit][index2], 2);
                if (max < tempRes) {
                    max = tempRes;
                }
            }
        }
    } else {
        let possibilities = null;
        for (const highestConcernElement of highestDigitConcern) {
            for (let index = 0; index < highestConcernElement.length; index++) {
                if (highestConcernElement[index] === '0') {
                    break;
                }
                let tempCount = 1;
                let temp = highestDigit - index - tempCount;
                while (!obj1[temp]) {
                    if (temp <= 0) {
                        break;
                    }
                    temp = highestDigit - ++index - tempCount;
                }
                if (!temp) {
                    break;
                }
                possibilities = obj1[temp];
            }
            if (possibilities && possibilities.length) {
                for (const possibility of possibilities) {
                    let tempRes =
                        parseInt(possibility, 2) ^
                        parseInt(highestConcernElement, 2);
                    if (max < tempRes) {
                        max = tempRes;
                    }
                }
            }
        }
    }

    return max;
}

console.log(findMaximumXOR([14, 15, 9, 3, 2]) === 13);
console.log(findMaximumXOR([10, 23, 20, 18, 28]) === 30);
console.log(findMaximumXOR([4, 6, 7]) === 3);
console.log(findMaximumXOR([8, 10, 2]) === 10);
console.log(findMaximumXOR([0]) === 0);
console.log(
    findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]) === 127
);
console.log(findMaximumXOR((nums = [3, 10, 5, 25, 2, 8])) === 28);
