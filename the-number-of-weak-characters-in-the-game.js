var numberOfWeakCharacters = function (properties) {
    // properties.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
    properties.sort((a, b) => b[0] - a[0]);
    let count = 0,
        max = 0;
    for (let arr of properties) {
        if (arr[1] < max) {
            count++;
        }
        max = Math.max(max, arr[1]);
    }
    return count;
};

console.log(
    numberOfWeakCharacters(
        (properties = [
            [10, 7],
            [10, 4],
            [7, 9],
            [6, 9],
            [7, 5],
            [7, 10],
        ]),
    ) === 0,
);
console.log(
    numberOfWeakCharacters(
        (properties = [
            [5, 5],
            [6, 3],
            [3, 6],
        ]),
    ) === 0,
);
console.log(
    numberOfWeakCharacters(
        (properties = [
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 2],
        ]),
    ) === 1,
);
console.log(
    numberOfWeakCharacters(
        (properties = [
            [2, 2],
            [3, 3],
        ]),
    ) === 1,
);
console.log(
    numberOfWeakCharacters(
        (properties = [
            [1, 5],
            [10, 4],
            [4, 3],
        ]),
    ) === 1,
);
