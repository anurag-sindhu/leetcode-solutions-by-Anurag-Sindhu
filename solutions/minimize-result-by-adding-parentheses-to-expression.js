var minimizeResult = function (expression) {
    const splitterString = expression.split('+');
    const leftNum = splitterString[0];
    const rightNum = splitterString[1];
    let minPattern = ``;
    let minResp = Infinity;
    let leftNumPower = Math.pow(10, leftNum.length);
    for (let index = 0; index < leftNum.length; index++) {
        const factorLeftNum = parseInt(leftNum / leftNumPower);
        const modLeftNum = leftNum % leftNumPower;
        let rightNumPower = Math.pow(10, rightNum.length);
        for (let index = 0; index < rightNum.length; index++) {
            const factorRightNum = parseInt(rightNum / rightNumPower);
            const modRightNum = rightNum % rightNumPower;
            if (String(rightNumPower).length === rightNum.length + 1) {
                if (factorLeftNum) {
                    const tempResp = factorLeftNum * (modLeftNum + modRightNum);
                    if (minResp > tempResp) {
                        minResp = tempResp;
                        minPattern = `${factorLeftNum}(${modLeftNum}+${modRightNum})`;
                    }
                } else {
                    const tempResp = modLeftNum + modRightNum;
                    if (minResp > tempResp) {
                        minResp = tempResp;
                        minPattern = `(${modLeftNum}+${modRightNum})`;
                    }
                }
            } else {
                if (factorLeftNum) {
                    const tempResp = factorLeftNum * (modLeftNum + factorRightNum) * modRightNum;
                    if (minResp > tempResp) {
                        minResp = tempResp;
                        minPattern = `${factorLeftNum}(${modLeftNum}+${factorRightNum})${modRightNum}`;
                    }
                } else {
                    const tempResp = (modLeftNum + factorRightNum) * modRightNum;
                    if (minResp > tempResp) {
                        minResp = tempResp;
                        minPattern = `(${modLeftNum}+${factorRightNum})${modRightNum}`;
                    }
                }
            }
            rightNumPower = rightNumPower / 10;
        }
        leftNumPower = leftNumPower / 10;
    }
    return minPattern;
};

console.log(minimizeResult((expression = '3+31')) === '(3+3)1');
console.log(minimizeResult((expression = '12+34')) === '1(2+3)4');
console.log(minimizeResult((expression = '247+38')) === '2(47+38)');
console.log(minimizeResult((expression = '999+999')) === '(999+999)');
