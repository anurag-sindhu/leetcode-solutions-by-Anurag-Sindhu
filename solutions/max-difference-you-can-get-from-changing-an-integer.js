var maxDiff = function (num) {
    const numStr = num.toString();
    let minNum = ``;
    let replacementOf = null;
    let replacementTo = null;
    for (let index = 0; index < numStr.length; index++) {
        if (replacementOf === null) {
            if (index === 0) {
                if (numStr[index] != `1`) {
                    replacementOf = numStr[index];
                    replacementTo = 1;
                }
            } else if (numStr[index] !== numStr[0] && numStr[index] !== '0') {
                replacementOf = numStr[index];
                replacementTo = 0;
            }
            minNum += replacementTo == undefined ? numStr[index] : replacementTo;
        } else {
            if (numStr[index] === replacementOf) {
                minNum += replacementTo;
            } else {
                minNum += numStr[index];
            }
        }
    }
    let maxNum = ``;
    replacementOf = null;
    replacementTo = null;
    for (let index = 0; index < numStr.length; index++) {
        if (replacementOf === null) {
            if (index === 0) {
                if (numStr[index] != '9') {
                    replacementOf = numStr[index];
                    replacementTo = 9;
                }
            } else if (numStr[index] !== numStr[0] && numStr[index] !== '9') {
                replacementOf = numStr[index];
                replacementTo = 9;
            }
            maxNum += replacementTo == undefined ? numStr[index] : replacementTo;
        } else {
            if (numStr[index] === replacementOf) {
                maxNum += replacementTo;
            } else {
                maxNum += numStr[index];
            }
        }
    }
    return Number(maxNum) - Number(minNum);
};

console.log(maxDiff((num = 1101057)) === 8808050);
console.log(maxDiff((num = 111)) === 888);
console.log(maxDiff((num = 1222)));
console.log(maxDiff((num = 9)));
console.log(maxDiff((num = 555)));
