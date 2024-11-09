function removeLeadingZero(num) {
    let isBreak = true;
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if (element === '0') {
            continue;
        } else {
            isBreak = false;
            break;
        }
    }
    if (isBreak) {
        return 0;
    }
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if (element === '0') {
            continue;
        }
        return num.substring(index);
    }
}

function getReverse(num) {
    let str = ``;
    num = String(num);
    for (let index = num.length - 1; index >= 0; index--) {
        str += num[index];
    }
    return Number(removeLeadingZero(str)) % (Math.pow(10, 9) + 7);
}

var countNicePairs = function (nums) {
    const arr = (function () {
        const config = {};
        for (const iterator of nums) {
            const store = getReverse(iterator % (Math.pow(10, 9) + 7));
            const store2 =
                Math.abs((store % (Math.pow(10, 9) + 7)) - (iterator % (Math.pow(10, 9) + 7))) %
                (Math.pow(10, 9) + 7);
            if (!config[store2]) {
                config[store2] = 0;
            }
            config[store2] += 1;
        }
        return config;
    })();
    let sum = 0;
    for (const key in arr) {
        const ss = arr[key] - 1;
        sum += (ss * ((ss + 1) / 2)) % (Math.pow(10, 9) + 7);
    }
    return sum % (Math.pow(10, 9) + 7);
};

console.log(countNicePairs((nums = [42, 11, 1, 97])) === 2);

console.log(countNicePairs((nums = [13, 10, 35, 24, 76])) === 4);
