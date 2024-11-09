const removeIndexNumber = function(num, index) {
    return Number(`${num.substring(0, index)}${num.substring(index + 1)}`).toString();
};

var removeKdigits = function(num, k) {
    if (num.length <= k) {
        return `0`;
    }
    while (k) {
        const orgNum = num;
        for (let index = 1; index < num.length; index++) {
            if (
                !(Number(num[index]) > Number(num[index - 1])) &&
                Number(num[index]) !== Number(num[index - 1])
            ) {
                num = removeIndexNumber(num, index - 1);
                k--;
                break;
            }
        }
        if (orgNum === num) {
            break;
        }
    }
    if (num.length <= k) {
        return `0`;
    }
    if (k) {
        num = num.substring(0, num.length - k);
    }
    if (!num.length) {
        return `0`;
    }
    return Number(num).toString();
};

console.log(removeKdigits(`143729`, 3) === '129'); //0
console.log(removeKdigits((num = '12'), (k = 1)) === '1'); //123
console.log(removeKdigits((num = '10001'), (k = 4)) === '0'); //123
console.log(removeKdigits((num = '12345'), (k = 2)) === '123'); //123
console.log(removeKdigits((num = '112'), (k = 1)) === '11'); //11
console.log(removeKdigits(`143729`, 2) === '1329'); //0
console.log(removeKdigits(`143729`, 3) === '129'); //0
console.log(removeKdigits((num = '11'), (k = 2)) === '0'); //0
console.log(removeKdigits((num = '10200'), (k = 1)) === '200'); //200
console.log(removeKdigits('1234567890', 10) === '0'); //0
console.log(removeKdigits((num = '1432219'), (k = 3)) === '1219'); // 1219
console.log(removeKdigits((num = '1432219'), (k = 4)) === '119'); // 121
console.log(removeKdigits((num = '1234105'), (k = 3)) === '1105'); // 1219
console.log(removeKdigits((num = '123105'), (k = 3)) === '105'); // 1219
console.log(removeKdigits('1234567890', 9) === '0'); //0
console.log(removeKdigits((num = '10'), (k = 2)) === '0'); //0
