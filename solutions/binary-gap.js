var binaryGap = function (n) {
    const binaryNumber = (n >>> 0).toString(2);
    let maxDistance = 0;
    let isHoldingCount = 0;
    let isHoldingTrue = false;

    for (let index = 0; index < binaryNumber.length; index++) {
        if (binaryNumber[index] === '1') {
            if (isHoldingTrue) {
                if (maxDistance < isHoldingCount) {
                    maxDistance = isHoldingCount;
                }
                isHoldingCount = 1;
                isHoldingTrue = true;
            } else {
                isHoldingCount++;
                isHoldingTrue = true;
            }
        } else {
            if (isHoldingTrue) {
                isHoldingCount++;
            }
        }
    }
    return maxDistance;
};

console.log(binaryGap(343));
console.log(binaryGap(13));
console.log(binaryGap(6));
console.log(binaryGap(22));
console.log(binaryGap(8));
console.log(binaryGap(5));
