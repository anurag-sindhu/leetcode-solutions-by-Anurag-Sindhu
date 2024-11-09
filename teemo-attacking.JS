var findPoisonedDuration = function (timeSeries, duration) {
    let coveredTillMoment = null;
    let count = 0;
    for (const iterator of timeSeries) {
        if (coveredTillMoment === null) {
            coveredTillMoment = duration + iterator - 1;
            count = duration;
        } else {
            const willCoverTill = duration + iterator - 1;
            if (iterator <= coveredTillMoment) {
                const overlapped = coveredTillMoment - iterator + 1;
                if (overlapped > 0) {
                    count += duration - overlapped;
                }
            } else {
                count += duration;
            }
            coveredTillMoment = willCoverTill;
        }
    }
    return count;
};

console.log(findPoisonedDuration((timeSeries = [1, 2]), (duration = 3)) === 4);
console.log(findPoisonedDuration((timeSeries = [1, 4]), (duration = 2)) === 4);
console.log(findPoisonedDuration((timeSeries = [1, 2]), (duration = 2)) === 3);
