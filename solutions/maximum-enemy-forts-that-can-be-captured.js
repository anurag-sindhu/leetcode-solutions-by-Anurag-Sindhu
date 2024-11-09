var captureForts = function (forts) {
    let lastMinusOne = -Infinity
    let lastMinusOneIndex = -Infinity
    let lastPlusOneIndex = -Infinity
    for (let index = 0; index < forts.length; index++) {
        const element = forts[index];
        if (element === 1) {
            lastPlusOneIndex = index
            if (lastMinusOneIndex !== -Infinity && lastMinusOne < (Math.abs(lastMinusOneIndex - lastPlusOneIndex) - 1)) {
                lastMinusOne = Math.abs(lastMinusOneIndex - lastPlusOneIndex) - 1
            }
            lastMinusOneIndex = -Infinity
        } else if (element === -1) {
            lastMinusOneIndex = index
            if (lastPlusOneIndex !== -Infinity && lastMinusOne < (Math.abs(lastMinusOneIndex - lastPlusOneIndex) - 1)) {
                lastMinusOne = Math.abs(lastMinusOneIndex - lastPlusOneIndex) - 1
            }
            lastPlusOneIndex = -Infinity
        }
    }
    if (lastMinusOne === -Infinity) {
        return 0
    }
    return lastMinusOne
};

console.log(captureForts(forts = [0, -1, -1, 0, -1]) === 0);
console.log(captureForts(forts = [1, 0, 0, -1, 0, 0, 0, 0, 1]) === 4);
console.log(captureForts(forts = [0, 0, 1, -1]) === 0);