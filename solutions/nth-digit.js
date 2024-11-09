var findNthDigit = function(n) {
    console.log(9 * 0 * 0 + 9 * 1 * 1 + 9 * 10 * 2 + 9 * 100 * 3 + 9 * 1000 * 4 + 9 * 10000 * 5);
    let numberOfDigits = 1;
    let totalNumbersInTheRange = 1;
    let totalDigits = 0;
    let totalSum = 9 * totalNumbersInTheRange * numberOfDigits + totalDigits;
    let prevTotalSum = 0;
    while (n > 9 * totalNumbersInTheRange * numberOfDigits + totalDigits) {
        totalDigits += totalNumbersInTheRange * numberOfDigits * 9;
        totalNumbersInTheRange *= 10;
        numberOfDigits++;
        prevTotalSum = totalSum;
        totalSum = 9 * totalNumbersInTheRange * numberOfDigits + totalDigits;
    }
    console.log(10 + 90 - 1);
    const rangeStartFrom = totalNumbersInTheRange;
    const rangeGoTill = prevTotalSum + 9 * totalNumbersInTheRange;
    let diff = null;
    diff = Math.floor((n - 1 - prevTotalSum) / numberOfDigits);
    console.log(rangeStartFrom + diff + 1);
    const sumTillStartPoint = prevTotalSum + diff * numberOfDigits;
    console.log(totalNumbersInTheRange + 9 * totalNumbersInTheRange - 1);
    return;
};

console.log(findNthDigit(13));
console.log(findNthDigit(14));
console.log(findNthDigit(15));
console.log(findNthDigit(16));
console.log(findNthDigit(17));
console.log(findNthDigit(113));
