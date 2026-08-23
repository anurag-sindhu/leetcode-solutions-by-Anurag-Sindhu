function gcd(firstNumber, secondNumber) {
    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    while (secondNumber) {
        const remainder = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = remainder;
    }
    return firstNumber;
}

var maxPoints = function (points) {
    const pointsLength = points.length;
    if (pointsLength <= 2) {
        return pointsLength;
    }

    let maxPointsOnALine = 1;

    for (let originIndex = 0; originIndex < pointsLength; originIndex++) {
        const pointsCountBySlope = {};
        let maxPointsOnSameSlope = 0;
        let duplicatePointCount = 1;

        for (let otherIndex = originIndex + 1; otherIndex < pointsLength; otherIndex++) {
            let xDiff = points[otherIndex][0] - points[originIndex][0];
            let yDiff = points[otherIndex][1] - points[originIndex][1];

            if (xDiff === 0 && yDiff === 0) {
                duplicatePointCount += 1;
                continue;
            }

            const greatestCommonDivisor = gcd(xDiff, yDiff);
            xDiff /= greatestCommonDivisor;
            yDiff /= greatestCommonDivisor;

            if (xDiff < 0 || (xDiff === 0 && yDiff < 0)) {
                xDiff = -xDiff;
                yDiff = -yDiff;
            }

            const slopeKey = `${xDiff}/${yDiff}`;
            pointsCountBySlope[slopeKey] = (pointsCountBySlope[slopeKey] || 0) + 1;
            if (pointsCountBySlope[slopeKey] > maxPointsOnSameSlope) {
                maxPointsOnSameSlope = pointsCountBySlope[slopeKey];
            }
        }

        maxPointsOnALine = Math.max(
            maxPointsOnALine,
            maxPointsOnSameSlope + duplicatePointCount,
        );
    }

    return maxPointsOnALine;
};

console.log(
    maxPoints([
        [2, 3],
        [3, 3],
        [-5, 3],
    ]),
);
console.log(
    maxPoints([
        [0, 0],
        [1, -1],
        [1, 1],
    ]),
);

console.log(
    maxPoints([
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
    ]),
);

console.log(
    maxPoints([
        [2, 3],
        [3, 3],
        [-5, 3],
    ]),
);
console.log(maxPoints([[1, 1]]));
console.log(
    maxPoints([
        [1, 1],
        [2, 2],
        [3, 3],
    ]),
);
