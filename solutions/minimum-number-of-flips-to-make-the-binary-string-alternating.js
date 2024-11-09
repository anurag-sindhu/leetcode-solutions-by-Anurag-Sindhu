var minFlips = function (s) {
    let prevCharacter = s[0];
    let flip = 0;
    for (let index = 1; index < s.length; index++) {
        if (prevCharacter === '1' && s[index] !== '0') {
            flip++;
            prevCharacter = '0';
            continue;
        } else if (prevCharacter === '0' && s[index] !== '1') {
            flip++;
            prevCharacter = '1';
            continue;
        }
        prevCharacter = s[index];
    }
    return flip;
};

console.log(minFlips((s = '01001001101')) === 2);
console.log(minFlips((s = '100110')) === 2);
console.log(minFlips((s = '111000')) === 2);
console.log(minFlips((s = '010')) === 0);
console.log(minFlips((s = '1110')) === 1);
