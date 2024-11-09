var maxConsecutiveAnswers = function (answerKey, k) {
    let countT = 0;
    let countF = 0;
    let backIndex = 0;
    let max = -Infinity;
    for (let index = 0; index < answerKey.length; index++) {
        const element = answerKey[index];
        if (element === 'T') {
            countT += 1;
        } else {
            countF += 1;
        }

        while (countF > k && countT > k) {
            if (answerKey[backIndex] === 'T') {
                countT -= 1;
            } else {
                countF -= 1;
            }
            backIndex++;
        }
        max = Math.max(max, countF + countT);
    }
    return max;
};

console.log(maxConsecutiveAnswers((answerKey = 'TTFFFTFFTFF'), (k = 1)) === 6);
console.log(maxConsecutiveAnswers((answerKey = 'TFFT'), (k = 1)) === 1);
console.log(maxConsecutiveAnswers((answerKey = 'TTFTTFTT'), (k = 1)));
console.log(maxConsecutiveAnswers((answerKey = 'TTFF'), (k = 2)));
