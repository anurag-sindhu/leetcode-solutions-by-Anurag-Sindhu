var checkOnesSegment = function (s) {
    let count = 1;
    for (let index = 1; index < s.length; index++) {
        if (s[index] === `1`) {
            count += 1;
        }
        if (s[index] === `1` && s[index - 1] === `1`) {
            return true;
        }
    }
    if (count === 1) {
        return true;
    }
    return false;
};

console.log(checkOnesSegment((s = '10')) === true);
console.log(checkOnesSegment((s = '1')) === true);
console.log(checkOnesSegment((s = '110')) === true);
console.log(checkOnesSegment((s = '1001')) === false);
console.log(checkOnesSegment((s = '1100111')) === false);
