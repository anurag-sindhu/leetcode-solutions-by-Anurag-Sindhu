var maximumDetonation = function (bombs) {
    function findHypotenuse(length, breadth) {
        const sum = length * length + breadth * breadth;
        return Math.sqrt(sum);
    }

    let max = 0;
    for (let parentIndex = 0; parentIndex < bombs.length; parentIndex++) {
        const parentXIndex = bombs[parentIndex][0];
        const parentYIndex = bombs[parentIndex][1];
        const parentRadiusIndex = bombs[parentIndex][2];
        let tempMax = 0;
        for (let childIndex = 0; childIndex < bombs.length; childIndex++) {
            if (childIndex !== parentIndex) {
                const childXIndex = bombs[childIndex][0];
                const childYIndex = bombs[childIndex][1];
                const childRadiusIndex = bombs[childIndex][2];
                const hypotenuse = findHypotenuse(
                    parentXIndex - childXIndex,
                    parentYIndex - childYIndex
                );
                if (parentRadiusIndex >= hypotenuse) {
                    tempMax += 1;
                }
            }
        }
        if (tempMax > max) {
            max = tempMax;
        }
    }
    return max + 1;
};
console.log(
    maximumDetonation(
        (bombs = [
            [1, 2, 3],
            [2, 3, 1],
            [3, 4, 2], 
            [4, 5, 3],
            [5, 6, 4]
        ])
    )
);

console.log(
    maximumDetonation(
        (bombs = [
            [2, 1, 3],
            [6, 1, 4]
        ])
    )
);
console.log(
    maximumDetonation(
        (bombs = [
            [1, 1, 5],
            [10, 10, 5]
        ])
    )
);
