var minOperations1 = function (s) {
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

var minOperations = function (s) {
    const possibleOut = [0, 1];
    let inttt = Infinity;
    for (const outElement of possibleOut) {
        let innnnn = 0;
        let currentExpectedBoolean = null;
        let nextExpectedBoolean = null;
        const isZero = outElement == 0;
        for (let index = 0; index < s.length; index++) {
            if (s.length % 2) {
                //odd
                if (isZero) {
                    if (index % 2 == 0) {
                        currentExpectedBoolean = 0;
                        nextExpectedBoolean = 1;
                    } else {
                        currentExpectedBoolean = 1;
                        nextExpectedBoolean = 0;
                    }
                } else {
                    if (index % 2 == 0) {
                        currentExpectedBoolean = 1;
                        nextExpectedBoolean = 0;
                    } else {
                        currentExpectedBoolean = 0;
                        nextExpectedBoolean = 1;
                    }
                }
            } else {
                if (index % 2 == 0) {
                    //even
                    currentExpectedBoolean = isZero ? 0 : 1;
                } else {
                    //even
                    currentExpectedBoolean = isZero ? 1 : 0;
                }
                nextExpectedBoolean = currentExpectedBoolean;
            }
            if (s[index] != currentExpectedBoolean) {
                ++innnnn;
            }
        }
        inttt = Math.min(innnnn, inttt);
        // console.log('object');
    }

    return inttt;
};

console.log(minOperations((s = '0100')) === 1);
console.log(minOperations((s = '10')) === 0);
console.log(minOperations((s = '1111')) === 2);
console.log(minOperations((s = '10010011010')) === 2);
console.log(minOperations((s = '111000')) === 2);
console.log(minOperations((s = '010')) === 0);
console.log(minOperations((s = '1110')) === 1);
console.log(minOperations((s = '001000000010')) === 4);
console.log(minOperations((s = '10011010100')) === 2);
console.log(minOperations((s = '01001101010')) === 2);
console.log(minOperations((s = '00100110101')) === 2);
console.log(minOperations((s = '01001001101')) === 2);
