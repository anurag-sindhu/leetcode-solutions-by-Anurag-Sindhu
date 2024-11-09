var checkZeroOnes = function (str) {
    let maxCountOne = 0;
    let maxCountZero = 0;
    let tempCountOne = 0;
    let lastElement = null;

    for (let index = 0; index < str.length; index++) {
        if (lastElement === null) {
            lastElement = str[index];
            tempCountOne++;
        } else {
            if (lastElement !== str[index]) {
                if (lastElement === '1') {
                    if (maxCountOne < tempCountOne) {
                        maxCountOne = tempCountOne;
                    }
                } else {
                    if (maxCountZero < tempCountOne) {
                        maxCountZero = tempCountOne;
                    }
                }

                tempCountOne = 1;
                lastElement = str[index];
            } else {
                tempCountOne++;
            }
        }
    }
    if (lastElement === '1') {
        if (maxCountOne < tempCountOne) {
            maxCountOne = tempCountOne;
        }
    } else {
        if (maxCountZero < tempCountOne) {
            maxCountZero = tempCountOne;
        }
    }
    return maxCountOne > maxCountZero ? true : false;
};

console.log(checkZeroOnes((s = '110111')));
console.log(checkZeroOnes((s = '1101')));
console.log(checkZeroOnes((s = '111000')));
console.log(checkZeroOnes((s = '110100010')));
