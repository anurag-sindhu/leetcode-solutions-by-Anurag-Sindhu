var maximumLength = function (s) {
    let pointerOne = 0;
    let pointerTwo = 0;
    let storage = [];
    while (pointerOne < s.length) {
        if (pointerOne === pointerTwo) {
            storage.push(s[pointerOne]);
        }
        pointerTwo++;
        let tempString = s[pointerOne];
        while (s[pointerOne] === s[pointerTwo]) {
            tempString += s[pointerTwo];
            pointerTwo++;
        }
        if (s[pointerOne] !== tempString) {
            storage.push(tempString);
        }
        pointerOne = pointerTwo;
    }
    let threeFrequency = -1;
    const obj = {};
    for (const iterator of storage) {
        if (!obj[iterator]) {
            obj[iterator] = 0;
        }
        obj[iterator] += 1;
    }
    // for (const key in obj) {
    //     let length = key.length;
    //     if (length > 1) {
    //         let tempLength = 1;
    //         let tempString = key[0];
    //         while (tempLength < length) {
    //             obj[tempString] += length - tempLength + 1;
    //             tempString += key[0];
    //             tempLength++;
    //         }
    //     }
    // }

    for (const key in obj) {
        if (obj[key] >= 3) {
            if (threeFrequency < obj[key]) {
                threeFrequency = key.length;
            }
        }
        if (key.length >= 3) {
            const maxPossibilities = key.length - 2;
            if (maxPossibilities > threeFrequency) {
                threeFrequency = maxPossibilities;
            }
        }
    }
    return threeFrequency;
};

console.log(maximumLength((s = 'aa')) === -1);
console.log(maximumLength((s = 'aada')) === 1);
console.log(maximumLength((s = 'aaadaafaa')) === 2);
console.log(maximumLength((s = 'jicja')) === -1);
console.log(maximumLength((s = 'cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde')) === 2);
console.log(maximumLength((s = 'abcaba')) === 1);
console.log(maximumLength((s = 'aaaa')) === 2);
console.log(maximumLength((s = 'abcdef')) === -1);
console.log(maximumLength((s = 'aaa')) === 1);
console.log(maximumLength((s = 'a')) === -1);
console.log(maximumLength((s = 'aaaaa')) === 3);
console.log(maximumLength((s = 'abcdefg')) === -1);
