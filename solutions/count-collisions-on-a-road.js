var countCollisions = function (directions) {
    let collisions = 0;
    let lastDirection = directions[0];
    let rightCount = directions[0] === 'R' ? 1 : 0;
    for (let index = 1; index < directions.length; index++) {
        if (directions[index] === 'L') {
            if (lastDirection === 'L') {
                lastDirection = directions[index];
            } else if (lastDirection === 'R') {
                lastDirection = 'S';
                collisions += rightCount + 1;
                rightCount = 0;
            } else if (lastDirection === 'S') {
                lastDirection = 'S';
                collisions += 1;
            }
        } else if (directions[index] === 'R') {
            rightCount += 1;
            lastDirection = directions[index];
        } else if (directions[index] === 'S') {
            if (lastDirection === 'L') {
                lastDirection = directions[index];
            } else if (lastDirection === 'R') {
                lastDirection = 'S';
                collisions += rightCount;
                rightCount = 0;
            } else if (lastDirection === 'S') {
                lastDirection = 'S';
            }
        }
    }
    return collisions;
};

console.log(countCollisions((directions = 'RSLSLRRS')) === 5);
console.log(countCollisions((directions = 'RLRSLL')) === 5);
console.log(countCollisions((directions = 'SRRLRLRSRLRSSRRLSLRLLRSLSLLSSRRLSRSLSLRRS')) === 28);
console.log(countCollisions((directions = 'LLRRRLSSRR')) === 4);
console.log(countCollisions((directions = 'LLRRLSSRR')) === 3);
console.log(countCollisions((directions = 'SSRSSRLL')) === 4);
console.log(countCollisions((directions = 'LLRSLLRSR')) === 4);
console.log(countCollisions((directions = 'SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR')) === 20);
console.log(countCollisions((directions = 'LLRR')) === 0);
