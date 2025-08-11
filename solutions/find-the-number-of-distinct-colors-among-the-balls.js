var queryResults = function (limit, queries) {
    const distinctColors = {};
    let distinctColorsCount = 0;
    const ballsAddressed = {};
    const output = [];
    for (let index = 0; index < queries.length; index++) {
        const [ball, color] = queries[index];
        if (distinctColors[color] == undefined) {
            distinctColors[color] = 0;
        }
        if (ballsAddressed[ball] == undefined || ballsAddressed[ball] == 0) {
            ballsAddressed[ball] = color;
        } else {
            const previousColorMapped = ballsAddressed[ball];
            distinctColors[previousColorMapped] -= 1;
            if (distinctColors[previousColorMapped] === 0) {
                distinctColorsCount -= 1;
            }
            ballsAddressed[ball] = color;
        }
        if (distinctColors[color] == undefined || distinctColors[color] == 0) {
            distinctColorsCount += 1;
        }
        distinctColors[color] += 1;
        output.push(distinctColorsCount);
    }
    return output;
};

console.log(
    queryResults(
        (limit = 1),
        (queries = [
            [0, 1],
            [1, 4],
            [1, 1],
            [1, 4],
            [1, 1],
        ]),
    ),
); //[1,2,1,2,1]

console.log(
    queryResults(
        (limit = 1),
        (queries = [
            [0, 1],
            [0, 4],
            [1, 2],
            [1, 5],
            [1, 4],
        ]),
    ),
); //[1,1,2,2,1]
console.log(
    queryResults(
        (limit = 4),
        (queries = [
            [0, 1],
            [1, 2],
            [2, 2],
            [3, 4],
            [4, 5],
        ]),
    ),
); //[1,2,2,3,4]

console.log(
    queryResults(
        (limit = 4),
        (queries = [
            [1, 4],
            [2, 5],
            [1, 3],
            [3, 4],
        ]),
    ),
); //[1,2,2,3]
