var countKConstraintSubstrings = function (s, k) {
    let count = 0;
    let startIndex = 0;
    let countOne = 0;
    let countZero = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '0') {
            countZero += 1;
        } else {
            countOne += 1;
        }
        while (countOne > k && countZero > k) {
            if (s[startIndex] === '1') {
                countOne--;
            } else {
                countZero--;
            }
            startIndex += 1;
        }
        count += index - startIndex + 1;
    }
    return count;
};

console.log(countKConstraintSubstrings('1010101', 2));
console.log(countKConstraintSubstrings('11111'));
console.log(countKConstraintSubstrings('10101'));
console.log(countKConstraintSubstrings('0001111'));
