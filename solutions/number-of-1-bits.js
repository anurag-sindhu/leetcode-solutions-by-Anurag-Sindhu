var hammingWeight = function (n) {
    const stringN = n.toString();
    let count = 0;
    for (let index = 0; index < stringN.length; index++) {
        if (stringN[index] === '1') {
            count++;
        }
    }
    return count;
};

console.log(hammingWeight(`00000000000000000000000000001011`));
