var hasAlternatingBits = function (n) {
    if (!n) {
        return false;
    }
    const resp = n.toString(2);
    const mapping = { 1: `0`, 0: `1` };
    const evenIndexExpected = resp[0];
    const oddIndexExpected = mapping[resp[0]];
    for (let index = 1; index < resp.length; index++) {
        if (index % 2 === 0) {
            if (evenIndexExpected !== resp[index]) {
                return false;
            }
        } else {
            if (oddIndexExpected !== resp[index]) {
                return false;
            }
        }
    }
    return true;
};

console.log(hasAlternatingBits((n = 5)));
console.log(hasAlternatingBits((n = 7)));
console.log(hasAlternatingBits((n = 11)));
