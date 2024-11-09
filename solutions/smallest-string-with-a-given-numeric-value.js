var getSmallestString = function (n, k) {
    const charConfig = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z',
    };
    let str = new Array(n).fill('a');
    let leftNum = k - n;
    let strWorkingIndex = str.length - 1;
    while (leftNum > 0) {
        let tt = leftNum + 1;
        if (tt > 26) {
            str[strWorkingIndex--] = charConfig[26];
            tt -= 26;
            leftNum = tt;
            continue;
        }
        const aa = charConfig[tt];
        str[strWorkingIndex] = charConfig[tt];
        leftNum = 0;
    }
    return str.join('');
};

console.log(getSmallestString((n = 5), (k = 73)) === 'aaszz');
console.log(getSmallestString((n = 3), (k = 29)) === 'abz');
console.log(getSmallestString((n = 3), (k = 27)) === 'aay');
