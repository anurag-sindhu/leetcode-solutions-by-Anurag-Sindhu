var maxScoreSightseeingPair = function (values) {
    let max = 0;
    let maxTillHere = values[0];
    for (let index = 1; index < values.length; index++) {
        const element = values[index];
        maxTillHere--;
        max = Math.max(max, maxTillHere + element);
        maxTillHere = Math.max(maxTillHere, element);
    }
    return max;
};

console.log(maxScoreSightseeingPair((values = [8, 1, 5, 2, 6])));
console.log(maxScoreSightseeingPair((values = [1, 2])));
