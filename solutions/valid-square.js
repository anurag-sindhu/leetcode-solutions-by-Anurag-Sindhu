var validSquare = function (p1, p2, p3, p4) {
    const distanceBetweenTwoPoints = (p1, p2) => {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    };
    let diagonal = [];
    const p1_p2 = distanceBetweenTwoPoints(p1, p2);
    const p1_p3 = distanceBetweenTwoPoints(p1, p3);
    const p1_p4 = distanceBetweenTwoPoints(p1, p4);
    if (p1_p2 === 0 && p1_p3 === 0) {
        return false;
    }
    if (p1_p2 === 0 && p1_p4 === 0) {
        return false;
    }
    if (p1_p2 === p1_p3) {
        diagonal = ['p1', 'p4'];
        if (
            distanceBetweenTwoPoints(p1, p4) !== distanceBetweenTwoPoints(p3, p2) ||
            distanceBetweenTwoPoints(p2, p4) !== distanceBetweenTwoPoints(p4, p3) ||
            Math.sqrt(
                Math.pow(distanceBetweenTwoPoints(p1, p2), 2) +
                    Math.pow(distanceBetweenTwoPoints(p2, p4), 2),
            ).toFixed(4) !== distanceBetweenTwoPoints(p1, p4).toFixed(4)
        ) {
            return false;
        }
        return true;
    } else if (p1_p2 === p1_p4) {
        diagonal = ['p1', 'p3'];
        if (distanceBetweenTwoPoints(p1, p3) !== distanceBetweenTwoPoints(p2, p4)) {
            return false;
        }
        if (
            distanceBetweenTwoPoints(p1, p3) !== distanceBetweenTwoPoints(p2, p4) ||
            distanceBetweenTwoPoints(p3, p2) !== distanceBetweenTwoPoints(p4, p3)
        ) {
            return false;
        }
        if (
            distanceBetweenTwoPoints(p1, p3) !== distanceBetweenTwoPoints(p2, p4) ||
            distanceBetweenTwoPoints(p3, p2) !== distanceBetweenTwoPoints(p4, p3) ||
            Math.sqrt(
                Math.pow(distanceBetweenTwoPoints(p1, p2), 2) +
                    Math.pow(distanceBetweenTwoPoints(p2, p3), 2),
            ).toFixed(4) !== distanceBetweenTwoPoints(p1, p3).toFixed(4)
        ) {
            return false;
        }
        return true;
    } else if (p1_p4 === p1_p3) {
        diagonal = ['p1', 'p2'];
        if (
            distanceBetweenTwoPoints(p1, p2) !== distanceBetweenTwoPoints(p3, p4) ||
            distanceBetweenTwoPoints(p2, p4) !== distanceBetweenTwoPoints(p2, p3) ||
            Math.sqrt(
                Math.pow(distanceBetweenTwoPoints(p1, p3), 2) +
                    Math.pow(distanceBetweenTwoPoints(p3, p2), 2),
            ).toFixed(4) !== distanceBetweenTwoPoints(p1, p2).toFixed(4)
        ) {
            return false;
        }
        return true;
    }
    return false;
};

console.log(
    validSquare(
        (p1 = [1134, -2539]),
        (p2 = [492, -1255]),
        (p3 = [-792, -1897]),
        (p4 = [-150, -3181]),
    ) === true,
);
console.log(validSquare((p1 = [1, 0]), (p2 = [0, 1]), (p3 = [-1, 0]), (p4 = [0, -1])) === true);
console.log(validSquare((p1 = [2, 1]), (p2 = [2, 2]), (p3 = [2, 0]), (p4 = [0, 1])) === false);
console.log(validSquare((p1 = [0, 0]), (p2 = [0, 0]), (p3 = [0, 0]), (p4 = [0, 0])) === false);
console.log(validSquare((p1 = [0, 0]), (p2 = [1, 1]), (p3 = [1, 0]), (p4 = [0, 12])) === false);
console.log(validSquare((p1 = [1, 0]), (p2 = [-1, 0]), (p3 = [0, 1]), (p4 = [0, -1])) === true);
console.log(validSquare((p1 = [0, 0]), (p2 = [1, 1]), (p3 = [1, 0]), (p4 = [0, 1])) === true);
