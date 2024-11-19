var getHint = function (secret, guess) {
    let commonCount = 0;
    let misplacedCount = 0;
    let secretOtherCommon = {};
    let guessOtherCommon = {};
    for (let index = 0; index < secret.length; index++) {
        if (secret[index] === guess[index]) {
            commonCount += 1;
        } else {
            if (!secretOtherCommon[secret[index]]) {
                secretOtherCommon[secret[index]] = 0;
            }
            secretOtherCommon[secret[index]] += 1;
            if (!guessOtherCommon[guess[index]]) {
                guessOtherCommon[guess[index]] = 0;
            }
            guessOtherCommon[guess[index]] += 1;
        }
    }
    for (const key in secretOtherCommon) {
        if (guessOtherCommon[key]) {
            misplacedCount += Math.min(guessOtherCommon[key], secretOtherCommon[key]);
        }
    }
    return `${commonCount}A${misplacedCount}B`;
};

console.log(getHint((secret = '1123'), (guess = '0111')));
console.log(getHint((secret = '1807'), (guess = '7810')));
