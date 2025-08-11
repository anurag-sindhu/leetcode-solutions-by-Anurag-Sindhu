var countPairs = function (nums) {
    let count = 0;
    for (let index = 0; index < nums.length - 1; index++) {
        for (let index2 = index + 1; index2 < nums.length; index2++) {
            const element1 = nums[index];
            const element11 = nums[index2];
            const strElement1 = String(element1);
            const strElement11 = String(element11);
            if (element1 == element11) {
                count++;
                continue;
            }
            if (element1 % 10 == 0) {
                const tempString1 = Number(
                    strElement1.substring(1, strElement1.length - 1) + strElement1[0],
                );
                if (tempString1 === element11) {
                    count += 1;
                    continue;
                }
            }
            if (element11 % 10 == 0) {
                const tempString11 = Number(
                    strElement11.substring(1, strElement11.length - 1) + strElement11[0],
                );
                if (tempString11 === element1) {
                    count += 1;
                    continue;
                }
            }

            if (
                strElement1.length == strElement11.length &&
                Math.abs(element1 - element11) % 9 == 0
            ) {
                let moreIndexMismatch = false;
                let mismatchedIndex1 = null;
                let mismatchedIndex11 = null;
                for (let tempIndex = 0; tempIndex < strElement1.length; tempIndex++) {
                    if (strElement1[tempIndex] !== strElement11[tempIndex]) {
                        if (mismatchedIndex1 == null) {
                            mismatchedIndex1 = tempIndex;
                        } else if (mismatchedIndex11 == null) {
                            mismatchedIndex11 = tempIndex;
                        } else {
                            moreIndexMismatch = true;
                            break;
                        }
                    }
                }
                if (moreIndexMismatch == false) {
                    if (
                        strElement1[mismatchedIndex1] == strElement11[mismatchedIndex11] &&
                        strElement1[mismatchedIndex11] == strElement11[mismatchedIndex1]
                    ) {
                        count += 1;
                    }
                }
            }
        }
    }
    return count;
};

console.log(
    countPairs(
        (nums = [
            490693, 900498, 448195, 24359, 126032, 584252, 26132, 124479, 586672, 855404, 24359,
            418495, 243450, 106232, 690685, 410981, 871863, 419180, 242524, 23549, 284759, 26132,
            271146, 966337, 781863, 418495, 242524, 126032, 411980, 621032, 271641, 25349, 900894,
            411980, 997268, 671059, 649498, 781836, 312273, 15727, 671095,
        ]),
    ) == 28,
);
console.log(countPairs((nums = [1, 10, 1, 10, 91, 19, 19, 1, 91, 8, 8, 7, 16, 18])) == 17);
console.log(countPairs((nums = [1023, 2310, 2130, 213])) == 1);
console.log(countPairs((nums = [14, 3, 3, 3, 3, 41, 14, 20, 14])) == 12);
console.log(countPairs((nums = [1, 1, 1, 1, 1])) == 10);
console.log(countPairs((nums = [3, 12, 30, 17, 21])) == 2);
console.log(countPairs((nums = [123, 231])) == 0);
