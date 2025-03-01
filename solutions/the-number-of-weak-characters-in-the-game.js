var numberOfWeakCharacters = function (properties) {
    // properties.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
    properties.sort((a, b) => (b[0] == a[0] ? a[1] - b[1] : b[0] - a[0]));
    let count = 0,
        lastMaxXForY = properties[0][0],
        lastY = properties[0][1];
    for (let index = 1; index < properties.length; index++) {
        if (properties[index][1] < lastY && lastMaxXForY != properties[index][0]) {
            count += 1;
        } else if (properties[index][1] > lastY) {
            lastY = properties[index][1];
            lastMaxXForY = properties[index][0];
        }
    }
    return count;
};

console.log(
    numberOfWeakCharacters(
        (properties = [
            [2, 5],
            [4, 3],
            [4, 9],
            [1, 2],
            [10, 4],
        ]),
    ) === 3,
);

console.log(
    numberOfWeakCharacters(
        (properties = [
            [10, 7],
            [10, 4],
            [7, 9],
            [7, 5],
            [7, 10],
            [6, 9],
        ]),
    ) === 2,
);
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
    ) === 2,
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
