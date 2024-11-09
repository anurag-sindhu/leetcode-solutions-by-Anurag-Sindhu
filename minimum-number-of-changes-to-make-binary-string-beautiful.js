var minChanges = function (s) {
    let count = 0;
    for (let index = 0; index < s.length; index += 2) {
        if (s[index] !== s[index + 1]) {
            count += 1;
        }
    }
    return count;
};

console.log(minChanges((s = '1001')) === 2);
console.log(minChanges((s = '10')));
console.log(minChanges((s = '0000')));
