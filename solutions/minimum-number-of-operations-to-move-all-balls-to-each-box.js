var minOperations = function (boxes) {
    let output = [];
    const fromRightToLeft = (function () {
        let totalOnes = 0;
        let arr = [];
        let count = 0;
        for (let index = boxes.length - 1; index >= 0; index--) {
            const element = boxes[index];
            count += totalOnes * 1;
            if (element === '1') {
                totalOnes++;
            }
            arr.push(count);
        }
        return arr.reverse();
    })();
    const fromLeftToRight = (function () {
        let totalOnes = 0;
        let arr = [];
        let count = 0;
        for (let index = 0; index < boxes.length; index++) {
            const element = boxes[index];
            count += totalOnes * 1;
            if (element === '1') {
                totalOnes++;
            }
            arr.push(count);
        }
        return arr;
    })();
    for (let index = 0; index < boxes.length; index++) {
        output.push(fromLeftToRight[index] + fromRightToLeft[index]);
    }
    return output;
};

console.log(minOperations((boxes = '101011011'))); //[26,22,18,16,14,14,16,18,22]
console.log(minOperations((boxes = '001011'))); //[11,8,5,4,3,4]
console.log(minOperations((boxes = '110')));
