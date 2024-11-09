var minimumSteps = function (array) {
    let count = 0;
    let collapsedCount = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] === '1') {
            collapsedCount += 1;
        } else {
            count += collapsedCount;
        }
    }
    return count;
};

console.log(minimumSteps((s = '011100')));
console.log(minimumSteps((s = '101')));
console.log(minimumSteps((s = '100')));
console.log(minimumSteps((s = '0111')));
