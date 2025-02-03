var findMinDifference = function (timePoints) {
    const arr = [];
    const obj = {};
    let arrIndex = 0;
    for (let hourIndex = 0; hourIndex < 24; hourIndex++) {
        hourIndex = String(hourIndex).length === 1 ? `0${hourIndex}` : `${hourIndex}`;
        for (let minutesIndex = 0; minutesIndex < 60; minutesIndex++) {
            minutesIndex =
                String(minutesIndex).length === 1 ? `0${minutesIndex}` : `${minutesIndex}`;
            obj[`${hourIndex}:${minutesIndex}`] = arrIndex++;
        }
    }
    for (const element of timePoints) {
        if (arr[obj[element]]) {
            return 0;
        }
        arr[obj[element]] = 1;
    }
    let firstIndex = null;
    let index = 0;
    let lastIndex = null;
    let minDistance = Infinity;
    while (true) {
        if (arr[index]) {
            if (lastIndex != null) {
                minDistance = Math.min(
                    minDistance,
                    Math.min(
                        1440 - index + lastIndex,
                        Math.abs(index - lastIndex),
                        1440 - lastIndex + index,
                    ),
                );
            }
            if (firstIndex == index) {
                break;
            }
            if (firstIndex == null) {
                firstIndex = index;
            }
            lastIndex = index;
        }
        index = ++index % arr.length;
    }
    return minDistance;
};

console.log(findMinDifference((timePoints = ['02:39', '10:26', '21:43'])) === 296);
console.log(findMinDifference((timePoints = ['13:26', '10:59'])) === 147);
console.log(findMinDifference((timePoints = ['23:59', '00:00'])) === 1);
console.log(findMinDifference((timePoints = ['10:59', '13:26'])) === 147);
console.log(findMinDifference((timePoints = ['00:00', '23:59', '00:00'])) === 0);
