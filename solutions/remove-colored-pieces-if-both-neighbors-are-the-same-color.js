var winnerOfGame = function (colors) {
    let aliceCount = 0;
    let bobCount = 0;
    let tempConsecutiveCount = 1;
    let tempConsecutiveChar = colors[0];
    for (let index = 1; index < colors.length; index++) {
        if (tempConsecutiveChar === colors[index]) {
            tempConsecutiveCount += 1;
        } else {
            if (tempConsecutiveCount > 2) {
                if (tempConsecutiveChar === 'A') {
                    aliceCount += tempConsecutiveCount - 2;
                } else {
                    bobCount += tempConsecutiveCount - 2;
                }
            }
            tempConsecutiveChar = colors[index];
            tempConsecutiveCount = 1;
        }
    }
    if (tempConsecutiveCount > 2) {
        if (tempConsecutiveChar === 'A') {
            aliceCount += tempConsecutiveCount - 2;
        } else {
            bobCount += tempConsecutiveCount - 2;
        }
    }
    if (aliceCount > bobCount) {
        return true;
    }
    return false;
};

console.log(winnerOfGame((colors = 'ABBBBBBBAAA')));
console.log(winnerOfGame((colors = 'AAABABB')));
console.log(winnerOfGame((colors = 'AA')));
