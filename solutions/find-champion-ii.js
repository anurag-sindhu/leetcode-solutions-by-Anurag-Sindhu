var findChampion = function (n, edges) {
    const edge = {};
    let winner = -1;
    for (let index = 0; index < n; index++) {
        edge[index] = true;
    }
    for (let rowIndex = 0; rowIndex < edges.length; rowIndex++) {
        edge[edges[rowIndex][1]] = false;
    }
    for (const key in edge) {
        if (edge[key] === true) {
            if (winner !== -1) {
                return -1;
            }
            winner = Number(key);
        }
    }
    return winner;
};

console.log(findChampion(3, [[0, 1]]));
console.log(findChampion(1, []));
console.log(
    findChampion(
        (n = 3),
        (edges = [
            [0, 1],
            [1, 2],
        ]),
    ),
);
console.log(
    findChampion(
        (n = 4),
        (edges = [
            [0, 2],
            [1, 3],
            [1, 2],
        ]),
    ),
);
