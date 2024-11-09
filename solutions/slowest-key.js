var slowestKey = function (releaseTimes, keysPressed) {
    let slowestKey = '';
    let slowestTime = 0;
    for (let index = 0; index < keysPressed.length; index++) {
        const totalTimeTaken = releaseTimes[index] - (releaseTimes[index - 1] || 0);
        if (totalTimeTaken >= slowestTime) {
            if (totalTimeTaken === slowestTime) {
                if (keysPressed[index] > slowestKey) {
                    slowestKey = keysPressed[index];
                }
            } else {
                slowestTime = totalTimeTaken;
                slowestKey = keysPressed[index];
            }
        }
    }
    return slowestKey;
};

console.log(slowestKey((releaseTimes = [9, 29, 49, 50]), (keysPressed = 'cbcd')));
console.log(slowestKey((releaseTimes = [12, 23, 36, 46, 62]), (keysPressed = 'spuda')));
