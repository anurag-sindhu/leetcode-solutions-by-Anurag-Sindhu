const getParticularDigitStart = function (numberOfDigit) {
    let num = `1`;
    while (--numberOfDigit) {
        num += `0`;
    }
    return Number(num);
};

function isIncreasingSequence(arr) {
    let storeNum = null;
    for (const iterator of arr) {
        if (storeNum === null) {
            storeNum = Number(iterator);
        } else if (storeNum + 1 !== Number(iterator)) {
            return false;
        }
        storeNum = Number(iterator);
    }

    return true;
}

function fillRestArrayWithZero(arr, index) {
    for (; index < arr.length; index++) {
        arr[index] = 0;
    }
    return;
}

const getDigitStart = function (low, high) {
    if (low > high) {
        return low;
    }
    if (low <= 12) {
        return 12;
    }

    let stringLow = low.toString();
    let splittedLow = stringLow.split('');
    let numberOfDigit = stringLow.length;
    if (isIncreasingSequence(splittedLow)) {
        return low;
    }
    let prevNumber = splittedLow[0];
    if (splittedLow.length === 10) {
        console.log('object');
    }
    for (let index = 1; index < splittedLow.length; index++) {
        prevNumber = splittedLow[index - 1];
        const currentNumber = splittedLow[index];
        if (Number(prevNumber) + 1 !== Number(currentNumber)) {
            if (Number(prevNumber) > Number(currentNumber)) {
                if (Number(prevNumber) === 9) {
                    return getDigitStart(
                        getParticularDigitStart(numberOfDigit + 1),
                        high
                    );
                }
                splittedLow[index] = Number(prevNumber) + 1;
                fillRestArrayWithZero(splittedLow, index + 1);
            } else {
                if (Number(prevNumber) === 9) {
                    return getDigitStart(
                        getParticularDigitStart(numberOfDigit + 1),
                        high
                    );
                }
                splittedLow[index - 1] = Number(prevNumber) + 1;
                fillRestArrayWithZero(splittedLow, index);
                index--;
            }
        }
    }
    return Number(splittedLow.join(''));
};

var sequentialDigits = function (low, high) {
    let updatedLow = getDigitStart(low, high);
    if (high < updatedLow) {
        return [];
    }
    const output = [];
    while (updatedLow <= high) {
        output.push(updatedLow);
        const stringUpdatedLow = updatedLow.toString();
        const exceptLastDigit = stringUpdatedLow.substring(1);
        const lastDigit = Number(stringUpdatedLow[stringUpdatedLow.length - 1]);
        const tempUpdatedLow = Number(exceptLastDigit + (lastDigit + 1));
        if (tempUpdatedLow.toString().length > updatedLow.toString().length) {
            updatedLow = getDigitStart(
                getParticularDigitStart(tempUpdatedLow.toString().length),
                high
            );
        } else {
            updatedLow = tempUpdatedLow;
        }
    }
    return output;
};
//[12,23,34,45,56,67,78,89,123,234,345,456,567,678,789,1234,2345,3456,4567,5678,6789,12345,23456,34567,45678,56789,123456,234567,345678,456789,1234567,2345678,3456789,12345678,23456789,123456789]
console.log(sequentialDigits(89, 234)); //[89,123,234]
console.log(sequentialDigits(30099, 51208));
console.log(sequentialDigits(10, 1000000000));
console.log(sequentialDigits(8511, 23553));
console.log(getDigitStart(989));
console.log(getDigitStart(589));
console.log(getDigitStart(100));
console.log(getDigitStart(10));
console.log(getDigitStart(123));
console.log(sequentialDigits((low = 100), (high = 300)));
console.log(sequentialDigits((low = 1000), (high = 13000)));
