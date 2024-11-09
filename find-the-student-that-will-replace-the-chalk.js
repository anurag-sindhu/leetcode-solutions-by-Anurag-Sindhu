var chalkReplacer = function (chalk, k) {
    const chalksRequiredForOneIteration = chalk.reduce(
        (accumulator, current) => accumulator + current,
        0
    );
    let leftChalk = k % chalksRequiredForOneIteration;
    if (!leftChalk) {
        return 0;
    }
    for (let index = 0; index < chalk.length; index++) {
        if (!leftChalk) {
            return index;
        }
        if (leftChalk - chalk[index] < 0) {
            return index;
        }
        leftChalk -= chalk[index];
    }
    if (!leftChalk) {
        return 0;
    }
};
console.log(chalkReplacer((chalk = [3, 4, 1, 2]), (k = 25)));
console.log(chalkReplacer((chalk = [5, 1, 5]), (k = 22)));
