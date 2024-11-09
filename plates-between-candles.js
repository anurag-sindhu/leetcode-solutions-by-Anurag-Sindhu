var platesBetweenCandles = function (s, queries) {
    const platesCountRecordArr = (function () {
        let count = 0;
        const platesCountRecordArr = [];
        for (let index = 0; index < s.length; index++) {
            if (s[index] === '|') {
                count++;
            }
            platesCountRecordArr.push(count);
        }
        return platesCountRecordArr;
    })();

    const nearestPlatesCountRecordArrFromLeftToRight = (function () {
        const arr = [];
        let lastPlateIndex = null;
        let hasPlateEncountered = false;
        for (let index = 0; index < s.length; index++) {
            if (s[index] === '|' && !hasPlateEncountered) {
                hasPlateEncountered = true;
                lastPlateIndex = index;
            } else {
                hasPlateEncountered = false;
            }
            arr.push(lastPlateIndex);
        }
        return arr;
    })();

    const nearestPlatesCountRecordArrFromRightToLeft = (function () {
        const arr = [];
        let lastPlateIndex = null;
        for (let index = s.length - 1; index >= 0; index--) {
            if (s[index] === '|') {
                lastPlateIndex = index;
            }
            arr.push(lastPlateIndex);
        }
        arr.reverse();
        return arr;
    })();

    const output = [];

    for (const [fromIndex, tillIndex] of queries) {
        let temp1 = nearestPlatesCountRecordArrFromLeftToRight[tillIndex];
        let temp11 = nearestPlatesCountRecordArrFromRightToLeft[fromIndex];
        let temp111 =
            platesCountRecordArr[
                nearestPlatesCountRecordArrFromLeftToRight[tillIndex]
            ];
        let temp1111 =
            platesCountRecordArr[
                nearestPlatesCountRecordArrFromRightToLeft[fromIndex]
            ];
        let res = temp1 - temp11 - (temp111 - temp1111);
        if (res > 0) {
            output.push(res);
        } else {
            output.push(0);
        }
    }

    return output;
};

console.log(
    platesBetweenCandles(
        (s = '***|**|*****|**||**|*'),
        (queries = [
            [1, 17],
            [4, 5],
            [14, 17],
            [5, 11],
            [15, 16]
        ])
    )
);

console.log(
    platesBetweenCandles(
        (s = '**|**|***|'),
        (queries = [
            [2, 5],
            [5, 9]
        ])
    )
);
