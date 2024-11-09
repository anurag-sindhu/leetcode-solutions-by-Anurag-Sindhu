var maximumOddBinaryNumber = function (s) {
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '1') {
            count++;
        }
    }
    let output = ``;
    for (let index = 0; index < s.length - 1; index++) {
        if (count > 1) {
            output += '1';
            count--;
        } else {
            output += '0';
        }
    }
    return `${output}1`;
};

console.log(maximumOddBinaryNumber((s = '010')));
console.log(maximumOddBinaryNumber((s = '0101')));
