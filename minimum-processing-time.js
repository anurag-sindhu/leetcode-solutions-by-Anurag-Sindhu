var minProcessingTime = function (processorTime, tasks) {
    processorTime.sort((a, b) => b - a); //reverse sorting
    tasks.sort((a, b) => a - b); //sorting
    let out = -Infinity;
    for (let index = 0; index < processorTime.length; index++) {
        let cnt = 4;
        let tempMax = -Infinity;
        let tempIndex = 0;
        while (cnt--) {
            tempMax = Math.max(tempMax, tasks[index * 4 + tempIndex++]);
        }
        out = Math.max(out, processorTime[index] + tempMax);
    }
    return out;
};

console.log(minProcessingTime((processorTime = [8, 10]), (tasks = [2, 2, 3, 1, 8, 7, 4, 5])));
console.log(minProcessingTime((processorTime = [10, 20]), (tasks = [2, 3, 1, 2, 5, 8, 4, 3])));
