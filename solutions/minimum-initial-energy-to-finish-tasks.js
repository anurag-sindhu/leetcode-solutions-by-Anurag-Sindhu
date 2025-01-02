var minimumEffort = function (tasks) {
    // tasks.sort(([a, b], [c, d]) => {
    //     return (a - b - (c - d)) * -1;
    // });
    let energy = null;
    let prevEnergy = 0;
    for (let index = tasks.length - 1; index >= 0; index--) {
        const [a, b] = tasks[index];
        if (energy == null) {
            energy = b;
        } else if (prevEnergy < b) {
            energy += b - prevEnergy;
        }
        prevEnergy = b;
        prevEnergy -= a;
    }

    return energy;
};

console.log(
    minimumEffort(
        (tasks = [
            [2, 2],
            [1, 2],
            [2, 3],
            [1, 7],
            [5, 9],
        ]),
    ) === 11,
);
console.log(
    minimumEffort(
        (tasks = [
            [1, 3],
            [2, 4],
            [8, 9],
            [10, 11],
            [10, 12],
        ]),
    ) === 32,
);
console.log(
    minimumEffort(
        (tasks = [
            [1, 7],
            [2, 8],
            [3, 9],
            [4, 10],
            [5, 11],
            [6, 12],
        ]),
    ) === 27,
);
console.log(
    minimumEffort(
        (tasks = [
            [1, 2],
            [2, 4],
            [4, 8],
        ]),
    ) === 8,
);
