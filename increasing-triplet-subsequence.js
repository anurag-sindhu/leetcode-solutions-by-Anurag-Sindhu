/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let primaryFirst = null;
    let primarySecond = null;
    let secondaryFirst = null;
    let secondarySecond = null;
    for (const iterator of nums) {
        if (primaryFirst !== null && primarySecond !== null && iterator > primarySecond) {
            return true;
        }
        if (primaryFirst === null || (iterator < primaryFirst && primarySecond === null)) {
            primaryFirst = iterator;
        } else if (primaryFirst < iterator) {
            primarySecond = iterator;
        } else if (
            primaryFirst !== null &&
            primarySecond !== null &&
            secondaryFirst === null &&
            (primaryFirst > iterator || (secondaryFirst > iterator && secondarySecond === null))
        ) {
            secondaryFirst = iterator;
        } else if (primaryFirst !== null && primarySecond !== null && secondaryFirst < iterator) {
            secondarySecond = iterator;
        }
        if (secondaryFirst !== null && secondarySecond !== null) {
            primaryFirst = secondaryFirst;
            primarySecond = secondarySecond;
            secondaryFirst = null;
            secondarySecond = null;
        }
    }
    return false;
};

console.log(increasingTriplet((nums = [20, 100, 10, 12, 5, 13])) === true);
console.log(increasingTriplet((nums = [2, 1, 5, 0, 4, 6])) === true);
console.log(increasingTriplet((nums = [2, 1, 5, 0, 6])) === true);
console.log(increasingTriplet((nums = [5, 4, 3, 2, 1])) === false);
console.log(increasingTriplet((nums = [1, 2, 3, 4, 5])) === true);
console.log(increasingTriplet([1, 4, 3, 4]));
console.log(increasingTriplet([2, 4, 1, 0, 2, 3]));
