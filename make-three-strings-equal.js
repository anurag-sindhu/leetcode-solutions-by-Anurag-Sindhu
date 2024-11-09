var findMinimumOperations = function (s1, s2, s3) {
    let maxLength = Math.max(s1.length, s2.length, s3.length);
    for (let index = 0; index < maxLength; index++) {
        if (index === 0 && (s1[index] !== s2[index] || s3[index] !== s2[index])) {
            return -1;
        }
        if (s1[index] !== s2[index] || s3[index] !== s2[index]) {
            return s1.length - index + s2.length - index + s3.length - index;
        }
    }
    return 0;
};

console.log(findMinimumOperations('b', 'aba', 'aaccaa') === -1);
console.log(findMinimumOperations('cc', 'cccb', 'c') === 4);
console.log(findMinimumOperations((s1 = 'abc'), (s2 = 'abb'), (s3 = 'ab')));
console.log(findMinimumOperations((s1 = 'dac'), (s2 = 'bac'), (s3 = 'cac')));
