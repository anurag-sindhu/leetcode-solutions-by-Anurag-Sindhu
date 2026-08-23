function combinationSum(
    candidates,
    target,
    alreadyAddressed = {},
    string = '',
    result = [],
    lastIndex = 0,
) {
    if (alreadyAddressed[string]) {
        return;
    }
    const totalCandidatesUnderRoof = string.split('_');
    const totalCandidatesUnderRoofSum = totalCandidatesUnderRoof.reduce((sum, value, index) => {
        sum += Number(value);
        return sum;
    }, 0);
    const totalCandidatesUnderRoofLength = totalCandidatesUnderRoof.length;
    for (let index = lastIndex; index < candidates.length; index++) {
        const element = candidates[index];
        const newKey = `${string}_${element}`;
        const newSum = totalCandidatesUnderRoofSum + element;
        if (totalCandidatesUnderRoofSum + element == target) {
            const tt = newKey
                .split('_')
                .filter((value) => value.length)
                .map((value) => {
                    return Number(value);
                });
            result.push(tt);
        }
        if (newSum > target) {
            continue;
        }
        combinationSum(candidates, target, alreadyAddressed, newKey, result, index);
        alreadyAddressed[newKey] = true;
    }
    return result;
}

let res;

res = combinationSum((candidates = [2, 3, 5]), (target = 8));
console.log(res);
res = combinationSum((candidates = [2, 3, 6, 7]), (target = 7));
console.log(res);
res = combinationSum([100, 200, 4, 12], 400);
console.log(res);
res = combinationSum((candidates = [2]), (target = 1));
console.log(res);
