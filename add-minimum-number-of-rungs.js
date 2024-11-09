var addRungs = function (rungs, dist) {
    let currentRung = 0;
    let rungsRequired = 0;
    for (let index = 0; index < rungs.length; index++) {
        if (!(rungs[index] <= currentRung + dist)) {
            const diff = rungs[index] - currentRung;
            rungsRequired += Math.ceil(diff / dist) - 1;
        }
        currentRung = rungs[index];
    }
    return rungsRequired;
};

console.log(addRungs([12, 24], 4) === 4);
console.log(addRungs([1], 1) === 0);
console.log(addRungs([11], 3) === 3);
console.log(addRungs([8], 3) === 2);
console.log(addRungs([3], 1) === 2);
console.log(addRungs((rungs = [1, 3, 5, 10]), (dist = 2)) === 2);
console.log(addRungs((rungs = [3, 6, 8, 10]), (dist = 3)) === 0);
console.log(addRungs((rungs = [3, 4, 6, 7]), (dist = 2)) === 1);
