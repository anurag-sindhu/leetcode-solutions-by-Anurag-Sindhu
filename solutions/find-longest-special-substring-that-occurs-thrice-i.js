var maximumLength = function (s) {
    // let storage = {};
    // for (let primaryIndex = 0; primaryIndex < s.length; primaryIndex++) {
    //     let tempStr = '';
    //     for (let index = 0; index < primaryIndex; index++) {
    //         const element = array[index];
    //     }
    //     for (let secondaryIndex = 0; secondaryIndex < s.length; secondaryIndex++) {}
    // }
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
            storage.push(tempString);
            pointerTwo++;
        }
        pointerTwo = ++pointerOne;
    }
    let threeFrequency = '';
    const obj = {};
    for (const iterator of storage) {
        if (!obj[iterator]) {
            obj[iterator] = 0;
        }
        obj[iterator] += 1;
        if (obj[iterator] >= 3) {
            if (threeFrequency.length < iterator.length) {
                threeFrequency = iterator;
            }
        }
    }
    return threeFrequency.length ? threeFrequency.length : -1;
};

console.log(maximumLength((s = 'aaaa')) === 2);
console.log(maximumLength((s = 'cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde')) === 2);
console.log(maximumLength((s = 'abcdef')) === -1);
console.log(maximumLength((s = 'aaa')) === 1);
console.log(maximumLength((s = 'a')) === -1);
console.log(maximumLength((s = 'aa')) === -1);
console.log(maximumLength((s = 'aaaaa')) === 3);
console.log(maximumLength((s = 'abcdefg')) === -1);
console.log(maximumLength((s = 'abcaba')) === 1);
