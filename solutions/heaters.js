function bucketSort(arr) {
    if (arr.length === 0) {
        return arr;
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const bucketCount = Math.floor(Math.sqrt(arr.length));
    const bucketSize = Math.ceil((max - min + 1) / bucketCount);
    const buckets = Array.from({ length: bucketCount }, () => []);

    arr.forEach((element) => {
        const bucketIndex = Math.floor((element - min) / bucketSize);
        buckets[bucketIndex].push(element);
    });

    const sorted = buckets.reduce((acc, bucket) => {
        bucket.sort((a, b) => a - b);
        return [...acc, ...bucket];
    }, []);

    return sorted;
}

var findRadius = function (houses, heaters) {
    const housesPositions = (function () {
        const config = {};
        for (const iterator of houses) {
            config[iterator] = true;
        }
        return config;
    })();
    const heatersPositions = (function () {
        const config = {};
        for (const iterator of heaters) {
            config[iterator] = true;
        }
        return config;
    })();
    let radius = 0;
    let previousHousePosition = null;
    let previousHeaterPosition = null;
    let farthestHousePosition = null;
    const sorted = bucketSort([...houses, ...heaters]);
    let ind = 1;
    for (; ind < sorted.length; ind++) {
        index = sorted[ind];
        if (farthestHousePosition === null && housesPositions[index]) {
            farthestHousePosition = index;
        }
        if (heatersPositions[index]) {
            const totalHousesInBetween = index - farthestHousePosition;
            if (farthestHousePosition) {
                if (previousHeaterPosition !== null) {
                    if (totalHousesInBetween > 0) {
                        radius = Math.max(
                            radius,
                            Math.min(
                                Math.ceil(totalHousesInBetween / 2),
                                previousHousePosition - previousHeaterPosition,
                            ),
                        );
                    }
                } else {
                    radius = Math.max(radius, totalHousesInBetween);
                }
            }
            previousHeaterPosition = index;
            farthestHousePosition = null;
        }
        if (housesPositions[index]) {
            previousHousePosition = index;
        }
    }
    if (farthestHousePosition) {
        radius = Math.max(radius, previousHousePosition - previousHeaterPosition);
    }
    return radius;
};

console.log(
    findRadius(
        [282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923],
        [
            823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729,
            823378840, 143542612,
        ],
    ) === 161834419,
);
console.log(findRadius([1, 2, 3, 5, 15], [2, 30]) === 13);
console.log(findRadius((houses = [1]), (heaters = [1, 2, 3, 4])) === 0);
console.log(findRadius((houses = [1, 5]), (heaters = [10])) === 9);
console.log(findRadius((houses = [1, 5]), (heaters = [2])) === 3);
console.log(findRadius((houses = [1, 2, 3, 4]), (heaters = [1, 4])) === 1);
console.log(findRadius((houses = [1, 2, 3]), (heaters = [2])) === 1);
