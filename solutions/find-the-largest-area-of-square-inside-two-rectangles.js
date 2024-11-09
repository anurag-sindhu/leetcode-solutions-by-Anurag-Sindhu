var largestSquareArea = function (bottomLeft, topRight) {
    for (let secondaryIndex = 0; secondaryIndex < bottomLeft.length; secondaryIndex++) {
        const element = bottomLeft[secondaryIndex];
    }
    for (let primaryIndex = 0; primaryIndex < bottomLeft.length; primaryIndex++) {
        const [bottomLeftXElement, bottomLeftYElement] = bottomLeft[primaryIndex];
        const [topRightXElement, topRightYElement] = topRight[primaryIndex];
        const [bottomRightXElement, bottomRightYElement] = [topRightXElement, bottomLeftYElement];
        const [topLeftXElement, topLeftYElement] = [bottomLeftXElement, topRightYElement];
        for (let secondaryIndex = 0; secondaryIndex < bottomLeft.length; secondaryIndex++) {
            const [bottomLeftXElementSecondary, bottomLeftYElementSecondary] =
                bottomLeft[secondaryIndex];
            const [topRightXElementSecondary, topRightYElementSecondary] = topRight[secondaryIndex];
            const [bottomRightXElementSecondary, bottomRightYElementSecondary] = [
                topRightXElementSecondary,
                bottomLeftYElementSecondary,
            ];
            const [topLeftXElementSecondary, topLeftYElementSecondary] = [
                bottomLeftXElementSecondary,
                topRightYElementSecondary,
            ];
            if (
                bottomLeftXElementSecondary < topRightXElement &&
                bottomLeftYElementSecondary < topRightYElement
            ) {
                if (bottomLeftXElementSecondary < bottomLeftXElement) {
                    if (bottomLeftYElementSecondary > bottomLeftYElement) {
                        console.log('object');
                    } else if (bottomLeftYElementSecondary < bottomLeftYElement) {
                        console.log('object');
                    }
                } else if (bottomLeftXElementSecondary > bottomLeftXElement) {
                    if (bottomLeftYElementSecondary > bottomLeftYElement) {
                        console.log('object');
                    } else if (bottomLeftYElementSecondary < bottomLeftYElement) {
                        console.log('object');
                    }
                }
                // concern with left side
            }
            console.log('object');
        }
    }
    return;
};

console.log(
    largestSquareArea(
        (bottomLeft = [
            [1, 1],
            [2, 2],
            [3, 1],
        ]),
        (topRight = [
            [3, 3],
            [4, 4],
            [6, 6],
        ]),
    ),
);
console.log(
    largestSquareArea(
        (bottomLeft = [
            [1, 1],
            [1, 3],
            [1, 5],
        ]),
        (topRight = [
            [5, 5],
            [5, 7],
            [5, 9],
        ]),
    ),
);
console.log(
    largestSquareArea(
        (bottomLeft = [
            [1, 1],
            [2, 2],
            [1, 2],
        ]),
        (topRight = [
            [3, 3],
            [4, 4],
            [3, 4],
        ]),
    ),
);
console.log(
    largestSquareArea(
        (bottomLeft = [
            [1, 1],
            [3, 3],
            [3, 1],
        ]),
        (topRight = [
            [2, 2],
            [4, 4],
            [4, 2],
        ]),
    ),
);
