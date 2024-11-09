var getLucky = function (s, k) {
    let output = 0;
    let str = ``;
    for (let index = 0; index < s.length; index++) {
        str += s[index].charCodeAt(0) - 96;
    }
    while (k--) {
        output = 0;
        for (let index = 0; index < str.length; index++) {
            output += Number(str[index]); //12552031545
        }
        str = `${output}`;
    }
    return output;
};

console.log(getLucky((s = 'iiii'), (k = 1)));
console.log(getLucky((s = 'leetcode'), (k = 2)));
console.log(getLucky((s = 'zbax'), (k = 2)));
