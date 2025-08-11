function dotCount(s) {
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '.') {
            count += 1;
        }
    }
    return count;
}

function isValidIp(s) {
    if (s.length > 1 && s[0] === '0') {
        return false;
    }
    if (s.length === 3 && Number(s[0]) > 2) {
        return false;
    }
    if (s.length === 3 && Number(s[0]) >= 2 && Number(s[1]) > 5) {
        return false;
    }
    if (s.length === 3 && Number(s[0]) >= 2 && Number(s[1]) >= 5 && Number(s[2]) > 5) {
        return false;
    }
    return true;
}

var restoreIpAddresses = function (s) {
    const output = [];
    function restoreIpAddressesHelper(s, lastIndex, collect = '') {
        const count = dotCount(collect);

        if (count >= 4) {
            const totalCharCount = collect.length;
            if (totalCharCount - count === s.length) {
                output.push(collect);
            }
            return;
        }
        if (s[lastIndex] == undefined) {
            return;
        }
        for (let index = 1; index <= 3; index++) {
            const cutIndexCharFromLast = s.slice(lastIndex - index + 1, lastIndex + 1);
            if (isValidIp(cutIndexCharFromLast)) {
                restoreIpAddressesHelper(
                    s,
                    lastIndex - index,
                    cutIndexCharFromLast + '.' + collect,
                );
            }
        }
    }
    restoreIpAddressesHelper(s, s.length - 1);
    for (let index = 0; index < output.length; index++) {
        const element = output[index];
        output[index] = element.slice(0, element.length - 1);
    }
    return output;
};

console.log(restoreIpAddresses((s = '000256')));
console.log(restoreIpAddresses((s = '172162541')));
console.log(restoreIpAddresses((s = '0000')));
console.log(restoreIpAddresses((s = '101023')));
console.log(restoreIpAddresses((s = '25525511135')));
