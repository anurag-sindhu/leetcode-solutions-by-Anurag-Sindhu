var eliminateMaximum = function (dist, speed) {
    const reachingToTarget = [];
    for (let index = 0; index < dist.length; index++) {
        const store = dist[index] / speed[index];
        reachingToTarget.push(Math.ceil(store));
    }
    reachingToTarget.sort((a, b) => a - b);
    let monsterKilledCount = 0;
    let minutesConsumed = 0;
    for (const iterator of reachingToTarget) {
        if (minutesConsumed >= iterator) {
            break;
        }
        minutesConsumed++;
        monsterKilledCount++;
    }
    return monsterKilledCount;
};

console.log(eliminateMaximum([4, 2, 3], [2, 1, 1]) === 3);
console.log(eliminateMaximum((dist = [3, 2, 4]), (speed = [5, 3, 2])) === 1);
console.log(eliminateMaximum((dist = [1, 3, 4]), (speed = [1, 1, 1])) === 3);
console.log(eliminateMaximum((dist = [1, 1, 2, 3]), (speed = [1, 1, 1, 1])) === 1);
