var minMaxDifference = function (num) {
    const splittedCharacters = String(num).split('');
    const firstCharForMax = (function () {
        for (const iterator of splittedCharacters) {
            if (iterator !== `9`) {
                return iterator;
            }
        }
    })();
    const firstCharForMin = (function () {
        for (const iterator of splittedCharacters) {
            if (iterator !== `0`) {
                return iterator;
            }
        }
    })();
    let maxNewString = ``;
    for (let index = 0; index < splittedCharacters.length; index++) {
        if (firstCharForMax === splittedCharacters[index]) {
            maxNewString += `9`;
        } else {
            maxNewString += splittedCharacters[index];
        }
    }
    let minNewString = ``;
    for (let index = 0; index < splittedCharacters.length; index++) {
        if (firstCharForMin === splittedCharacters[index]) {
            minNewString += `0`;
        } else {
            minNewString += splittedCharacters[index];
        }
    }
    return Number(maxNewString) - Number(minNewString);
};

console.log(minMaxDifference((num = 90)) === 99);
console.log(minMaxDifference((num = 11891)) === 99009);
