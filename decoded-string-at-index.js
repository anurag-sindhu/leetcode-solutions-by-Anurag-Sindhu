var decodeAtIndex = function (s, k) {
    let outputIndex = 0;
    let output = [];
    for (let index = 0; index < s.length; index++) {
        if (isNaN(s[index])) {
            output[outputIndex] += s[index];
        } else {
            let times = Number(s[index]) - 1;
            if (isNaN(output[outputIndex])) {
                if (!output[outputIndex + 1]) {
                    output[outputIndex + 1] = 0;
                }
                output[outputIndex + 1] += output[outputIndex].length * times;
            } else {
                output[outputIndex + 1] = output[outputIndex].length * times;
                outputIndex++;
            }
        }
        if (k <= output.length) {
            return output[k - 1];
        }
    }
    //leetleetcodeleetleetcodeleetleetcode
    return output;
};

console.log(decodeAtIndex((s = 'leet22code3'), (k = 10)) === 'o');
console.log(decodeAtIndex((s = 'leet2code3'), (k = 10)) === 'o');
console.log(
    decodeAtIndex(
        'cpmxv8ewnfk3xxcilcmm68d2ygc88daomywc3imncfjgtwj8nrxjtwhiem5nzqnicxzo248g52y72v3yujqpvqcssrofd99lkovg',
        480551547,
    ) === 'o',
);
console.log(decodeAtIndex('abc', 3) === 'c');
console.log(decodeAtIndex((s = 'ha22'), (k = 5)) === 'h');
console.log(decodeAtIndex((s = 'a2345678999999999999999'), (k = 1)) === 'a');
