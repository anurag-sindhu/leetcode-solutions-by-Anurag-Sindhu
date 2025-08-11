var countKConstraintSubstrings = function (s, k, queries) {
    queries.sort((a, b) => {
        if (a[0] == b[0]) {
            if (a[1] == b[1]) {
                return 0;
            }
            if (a[1] > b[1]) {
                return 1;
            }
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return -1;
    });
    let count = 0;
    let countOne = 0;
    let countZero = 0;
    let queriesIndex = 0;
    const arrZero = [];
    const arrOne = [];
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element == '1') {
            arrOne.push((arrOne[arrOne.length - 1] || 0) + 1);
            arrZero.push(arrZero[arrZero.length - 1] || 0);
        } else {
            arrOne.push(arrOne[arrOne.length - 1] || 0);
            arrZero.push((arrZero[arrZero.length - 1] || 0) + 1);
        }
    }
    for (let index = 0; index < s.length; index++) {
        const startIndex = queries[queriesIndex][0];
        const endIndex = queries[queriesIndex][1];
        while (!(index >= startIndex && index <= endIndex)) {
            console.log('object');
        }
        const element = s[index];
        if (element === '0') {
            countZero += 1;
        } else {
            countOne += 1;
        }
        while (countOne > k && countZero > k) {
            if (s[startIndex] === '1') {
                countOne--;
            } else {
                countZero--;
            }
            startIndex += 1;
        }
        count += index - startIndex + 1;
    }
    return count;
};

console.log(
    countKConstraintSubstrings(
        (s = '0001111'),
        (k = 2),
        (queries = [
            [2, 3],
            [0, 6],
            [0, 5],
            [1, 4],
        ]),
    ),
); //[3,26,20,10]
console.log(
    countKConstraintSubstrings(
        (s = '010101'),
        (k = 1),
        (queries = [
            [0, 5],
            [1, 4],
            [2, 3],
        ]),
    ),
);
console.log(countKConstraintSubstrings((s = '0001111'), (k = 2), (queries = [[0, 6]])));
console.log(countKConstraintSubstrings((s = '0001111'), (k = 2), (queries = [[0, 6]])));
