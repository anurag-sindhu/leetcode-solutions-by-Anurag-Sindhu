var minFlipsMonoIncr = function (s) {
    const countOne = (function () {
        let count = 0;
        for (let index = 0; index < s.length; index++) {
            if (s[index] === `1`) {
                count++;
            }
        }
        return count;
    })();

    const totalFlipsToMakeOne = (function () {
        return s.length - countOne;
    })();

    const totalFlipsToMakeEverythingZero = (function () {
        return countOne;
    })();

    const totalFlipsToMakeZeroFromLeft = (function () {
        let found = false;
        let count = 0;
        for (let index = 0; index < s.length; index++) {
            if (s[index] === `1`) {
                found = true;
            }
            if (found && s[index] === `0`) {
                count = s.length - index;
                break;
            }
        }
        let continuousOneFromRight = 0;
        for (let index = s.length - 1; index >= 0; index--) {
            if (s[index] === `1`) {
                continuousOneFromRight++;
            } else {
                break;
            }
        }
        return count - continuousOneFromRight;
    })();
    let res = Math.min(
        totalFlipsToMakeEverythingZero,
        totalFlipsToMakeOne,
        totalFlipsToMakeZeroFromLeft
    );
    return res;
};

console.log(minFlipsMonoIncr('0101100011') === 3);
console.log(minFlipsMonoIncr('11011') === 1);
console.log(minFlipsMonoIncr('00110') === 1);
console.log(minFlipsMonoIncr('010110') === 2);
console.log(minFlipsMonoIncr('00011000') === 2);
