var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        //is it marching
        while (strs[i].indexOf(prefix) !== 0) {
            //if not, trim from right side, until matched or left with nothing
            prefix = prefix.slice(0, -1);
            if (!prefix) {
                return '';
            }
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight', 'flight']));
console.log(longestCommonPrefix(['', 'b']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
