var convertTime = function (current, correct) {
    let [currentHour, currentMinute] = current.split(':');
    let [correctHour, correctMinute] = correct.split(':');
    currentHour = Number(currentHour);
    currentMinute = Number(currentMinute);
    correctHour = Number(correctHour);
    correctMinute = Number(correctMinute);

    let hourDiff = correctHour - currentHour;
    let minDiff = null;
    if (correctMinute >= currentMinute) {
        minDiff = correctMinute - currentMinute;
    } else {
        minDiff = correctMinute + 60 - currentMinute;
        hourDiff -= 1;
    }

    let steps = 0;
    let totalMinDiff = hourDiff * 60 + minDiff;
    let operation = [60, 15, 5, 1];
    for (let index = 0; index < operation.length; index++) {
        const element = operation[index];
        if (totalMinDiff >= element) {
            const factor = parseInt(totalMinDiff / element);
            steps += factor;
            totalMinDiff -= factor * element;
        }
        if (totalMinDiff === 0) {
            break;
        }
    }
    return steps;
};

console.log(convertTime('09:41', '10:34'));
console.log(convertTime('23:59', '23:59'));
console.log(convertTime((current = '02:30'), (correct = '04:35')));
console.log(convertTime((current = '11:00'), (correct = '11:01')));
