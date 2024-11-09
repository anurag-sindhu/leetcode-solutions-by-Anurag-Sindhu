/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    if (parseInt(num / 1000)) {
        return 499;
    } else if (parseInt(num / 100)) {
        const digitSum = num.toString().split('').reduce((acc, curr) => {
            return Number(curr) + Number(acc);
        });
        const firstDigitOfNumber = parseInt(num / 100);
        if (digitSum % 2 === 0) {
            return parseInt(num / 2);
        }
        return parseInt(num / 2) - 1;
    } else if (parseInt(num / 10)) {
        const firstDigitOfNumber = parseInt(num / 10);
        if (firstDigitOfNumber % 2 === 0) {
            return parseInt(num / 2);
        } else {
            const reminder = num % 2;
            if (reminder === 0) {
                return parseInt(num / 2) - 1;
            } else {
                return parseInt(num / 2);
            }
        }
    } else {
        return parseInt(num / 2);
    }
};

console.log(countEven(113) === 56);
console.log(countEven(999) === 499);
console.log(countEven(517) === 258);
console.log(countEven(313) === 156);
console.log(countEven(597) === 298);
console.log(countEven(797) === 398);
console.log(countEven(887) === 443);
console.log(countEven(213) === 106);
console.log(countEven(910) === 455);
console.log(countEven(124) === 61);
console.log(countEven(896) === 447);
console.log(countEven(413) === 206);
console.log(countEven(617) === 308);
console.log(countEven(987) === 493);
console.log(countEven(1000) === 499);
console.log(countEven(13) === 6);
console.log(countEven(48) === 24);
console.log(countEven(58) === 28);
