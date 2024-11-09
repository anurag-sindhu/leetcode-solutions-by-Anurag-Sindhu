function merge(leftContent, rightContent) {
    const left = leftContent.arr || [];
    const leftScore = leftContent.scores;
    const right = rightContent.arr || [];
    const rightScore = rightContent.scores;
    let leftIndex = 0;
    let rightIndex = 0;
    const resp = [];
    const scores = [];
    while (leftIndex < left.length || rightIndex < right.length) {
        if (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] > right[rightIndex]) {
                resp.push(right[rightIndex]);
                scores.push(rightScore[rightIndex]);
                rightIndex++;
            } else {
                resp.push(left[leftIndex]);
                scores.push(leftScore[leftIndex]);
                leftIndex++;
            }
        } else if (leftIndex < left.length) {
            resp.push(left[leftIndex]);
            scores.push(leftScore[leftIndex]);
            leftIndex++;
        } else {
            resp.push(right[rightIndex]);
            scores.push(rightScore[rightIndex]);
            rightIndex++;
        }
    }
    return { ages: resp, scores };
}

function mergeSort(arr, scores) {
    if (!arr.length || arr.length === 1) {
        return { arr, scores };
    }
    if (arr.length === 2) {
        if (arr[1] > arr[0]) {
            return { arr: [arr[0], arr[1]], scores: [scores[0], scores[1]] };
        }
        return { arr: [arr[1], arr[0]], scores: [scores[1], scores[0]] };
    }
    const mid = parseInt(arr.length / 2);
    return merge(
        mergeSort(arr.slice(0, mid), scores.slice(0, mid)),
        mergeSort(arr.slice(mid), scores.slice(mid)),
    );
}

var bestTeamScore = function (scores, ages) {
    const sorted = mergeSort(ages, scores);
    const sortedAges = sorted.ages;
    const sortedScores = sorted.scores;
    let max = sortedScores[0];
    let lastScore = sortedScores[0];
    let tempMax = sortedScores[0];
    for (let index = 1; index < sortedAges.length; index++) {
        if (sortedAges[index - 1] === sortedAges[index]) {
            if (lastScore === sortedScores[index]) {
                lastScore = sortedScores[index];
                tempMax += sortedScores[index];
            } else {
                let maxTempScore = sortedScores[index];
                while (sortedAges[index] === sortedAges[index + 1]) {
                    if (sortedScores[++index] > maxTempScore) {
                        maxTempScore = sortedScores[index];
                        lastScore = sortedScores[index];
                    }
                }
                tempMax += maxTempScore;
            }
        } else {
            let maxTempScore = sortedScores[index];
            while (sortedAges[index] === sortedAges[index + 1]) {
                if (sortedScores[++index] > maxTempScore) {
                    maxTempScore = sortedScores[index];
                }
            }
            if (maxTempScore > lastScore) {
                tempMax += maxTempScore;
            } else {
                max = Math.max(max, tempMax);
                tempMax = sortedScores[index];
            }
            lastScore = sortedScores[index];
        }
    }
    max = Math.max(max, tempMax);
    return max;
};

console.log(
    bestTeamScore((scores = [1, 3, 5, 10, 1, 3, 5, 10]), (ages = [1, 2, 3, 4, 1, 2, 3, 4])),
);
console.log(bestTeamScore((scores = [1, 3, 5, 10]), (ages = [1, 2, 3, 4])));
console.log(bestTeamScore((scores = [1, 3, 5, 10, 15]), (ages = [1, 2, 3, 4, 5])));
console.log(bestTeamScore((scores = [4, 5, 6, 5]), (ages = [2, 1, 2, 1])));
console.log(bestTeamScore((scores = [1, 2, 3, 5]), (ages = [8, 9, 10, 1])));
