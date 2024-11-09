var maxValue = function (n, x) {
    let output = '';
    if (n[0] !== '-') {
        for (let index = 0; index < n.length; index++) {
            const currentString = Number(n[index]);
            if (x > currentString) {
                output += n.substring(0, index);
                output += x;
                output += n.substring(index);
                break;
            } else if (n.length - 1 === index) {
                output = n;
                output += x;
                break;
            }
        }
    } else {
        output = '-';
        for (let index = 1; index < n.length; index++) {
            const currentString = Number(n[index]);
            if (x < currentString) {
                output += n.substring(1, index);
                output += x;
                output += n.substring(index) || '';
                break;
            } else if (index === n.length - 1) {
                output += n.substring(1);
                output += x;
                break;
            }
        }
    }
    return output;
};

console.log(maxValue('-132', 3) === '-1323');
console.log(maxValue('-648468153646', 5) === '-5648468153646');
console.log(maxValue((n = '73'), (x = 6)) === '763');
console.log(maxValue((n = '-13'), (x = 2)) === '-123');
console.log(maxValue((n = '-55'), (x = 2)) === '-255');
console.log(maxValue((n = '99'), (x = 9)) === '999');
