var numberOfWays = function (s) {
    const countOfOne = (function () {
        let count = 0;
        const arr = [];
        for (let index = s.length - 1; index >= 0; index--) {
            const element = s[index];
            if (element === '1') {
                count += 1;
            }
            arr.push(count);
        }
        return arr.reverse();
    })();
    const countOfZero = (function () {
        let count = 0;
        const arr = [];
        for (let index = s.length - 1; index >= 0; index--) {
            const element = s[index];
            if (element === '0') {
                count += 1;
            }
            arr.push(count);
        }
        return arr.reverse();
    })();
    const countOfOneZero = (function () {
        let count = 0;
        const arr = [];
        for (let index = s.length - 1; index >= 0; index--) {
            const element = s[index];
            if (element === '1') {
                count += countOfZero[index];
            }
            arr.push(count);
        }
        return arr.reverse();
    })();

    const countOfZeroOne = (function () {
        let count = 0;
        const arr = [];
        for (let index = s.length - 1; index >= 0; index--) {
            const element = s[index];
            if (element === '0') {
                count += countOfOne[index];
            }
            arr.push(count);
        }
        return arr.reverse();
    })();
    let count = 0;
    for (let index = 0; index < s.length - 2; index++) {
        const element = s[index];
        if (element === '1') {
            count += countOfZeroOne[index];
        } else {
            count += countOfOneZero[index];
        }
    }
    return count;
};
console.log(numberOfWays((s = '0001100100')) == 38);
console.log(numberOfWays((s = '11100')) == 0);
console.log(numberOfWays((s = '001101')) == 6);
