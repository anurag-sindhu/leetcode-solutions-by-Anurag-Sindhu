var mergeTriplets = function (triplets, t) {
    let res = [0, 0, 0];

    for (let s of triplets) {
        if (s[0] <= t[0] && s[1] <= t[1] && s[2] <= t[2]) {
            res = [Math.max(res[0], s[0]), Math.max(res[1], s[1]), Math.max(res[2], s[2])];
        }
    }

    return res[0] === t[0] && res[1] === t[1] && res[2] === t[2];
};

console.log(
    mergeTriplets(
        (triplets = [
            [3, 4, 5],
            [4, 5, 6],
        ]),
        (target = [3, 2, 5]),
    ),
);

console.log(
    mergeTriplets(
        (triplets = [
            [2, 5, 3],
            [2, 3, 4],
            [1, 2, 5],
            [5, 2, 3],
        ]),
        (target = [5, 5, 5]),
    ),
);

console.log(
    mergeTriplets(
        (triplets = [
            [2, 5, 3],
            [1, 8, 4],
            [1, 7, 5],
        ]),
        (target = [2, 7, 5]),
    ),
);
