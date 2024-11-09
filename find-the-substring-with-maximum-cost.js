var maximumCostSubstring = function(s, chars, vals) {
    const charValues = {};
    for (let index = 0; index < chars.length; index++) {
        charValues[chars[index]] = vals[index];
    }

    for (let index = 97; index <= 122; index++) {
        if (charValues[String.fromCharCode(index)] === undefined) {
            charValues[String.fromCharCode(index)] = index - 96;
        }
    }
    let sum = 0;
    let tempSum = 0;
    for (let index = 0; index < s.length; index++) {
        tempSum += charValues[s[index]];
        //Min Sum is 0, so if temp sum has gone below zero then adding prefixed sub string wont benefit
        if (tempSum < 0) {
            tempSum = 0;
        }
        if (sum < tempSum) {
            sum = tempSum;
        }
    }
    return sum;
};

console.log(maximumCostSubstring('xuusmmums', 'sxmu', [-6, 5, 0, 5]) === 15);
console.log(maximumCostSubstring('talaqlt', 'tqla', [4, 3, 3, -2]) === 13);
console.log(maximumCostSubstring((s = 'adaa'), (chars = 'd'), (vals = [-1000])) === 2);
console.log(maximumCostSubstring((s = 'abc'), (chars = 'abc'), (vals = [-1, -1, -1])) === 0);
