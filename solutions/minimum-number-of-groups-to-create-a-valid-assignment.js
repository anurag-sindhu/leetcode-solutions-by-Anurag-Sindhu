var minGroupsForValidAssignment = function (balls) {
    const freq = {};
    for (const element of balls) {
        if (!freq[element]) {
            freq[element] = 0;
        }
        freq[element] += 1;
    }
    let smallestFreq = Infinity;
    let biggestFreq = -Infinity;
    for (const key in freq) {
        smallestFreq = Math.min(smallestFreq, freq[key]);
        biggestFreq = Math.max(biggestFreq, freq[key]);
    }
    let boxes = 0;
    for (const key in freq) {
        if (freq[key] > smallestFreq + 1) {
            boxes += Math.ceil(freq[key] / (smallestFreq + 1));
        } else {
            boxes += 1;
        }
    }
    return boxes;
};

console.log(minGroupsForValidAssignment((balls = [1, 1, 3, 3, 1, 1, 2, 2, 3, 1, 3, 2])) === 5);
console.log(minGroupsForValidAssignment((balls = [10, 10, 10, 3, 1, 1]))===4);
console.log(minGroupsForValidAssignment((balls = [3, 2, 3, 2, 3])) === 2);
