var permute1 = function (nums) {
    let output = [];
    if (nums.length === 1) {
        return [nums];
    }
    for (let index = 0; index < nums.length; index++) {
        const getCombination = permute([...nums.slice(0, index), ...nums.slice(index + 1)]);
        for (const iterator of getCombination) {
            output.push([nums[index], ...iterator]);
        }
    }
    return output;
};

var permute11 = function (nums) {
    let output = [];
    if (nums.length === 1) {
        return [nums];
    }
    for (let index = 0; index < nums.length; index++) {
        const getCombination = permute([...nums.slice(0, index), ...nums.slice(index + 1)]);
        for (const iterator of getCombination) {
            const a = iterator.splice(0, 0, nums[index]);
            output.push(iterator);
        }
    }
    return output;
};

function permute(candidates, alreadyAddressed = {}, string = '', result = []) {
    function permuteHelper(candidates, alreadyAddressed = {}, string = '', result = []) {
        if (alreadyAddressed[string]) {
            return;
        }
        const totalCandidatesUnderRoof = string.split('_');
        const totalCandidatesUnderRoofSum = totalCandidatesUnderRoof.reduce((sum, value, index) => {
            sum += Number(value);
            return sum;
        }, 0);
        const totalCandidatesUnderRoofLength = totalCandidatesUnderRoof.length;
        for (let index = 0; index < candidates.length; index++) {
            const element = candidates[index];
            const newKey = `${string}_${element}`;
            const tt = string
                .split('_')
                .filter((value) => value.length)
                .map((value) => {
                    return Number(value);
                });
            if (tt.includes(element)) {
                continue;
            }
            const newSum = totalCandidatesUnderRoofSum + element;
            if (totalCandidatesUnderRoofLength == candidates.length) {
                result.push(
                    newKey
                        .split('_')
                        .filter((value) => value.length)
                        .map((value) => {
                            return Number(value);
                        }),
                );
                alreadyAddressed[newKey] = true;
            }
            permuteHelper(candidates, alreadyAddressed, newKey, result);
        }
        return result;
    }
    const resp = permuteHelper(
        candidates.sort((a, b) => a - b),
        (alreadyAddressed = {}),
        (string = ''),
        (result = []),
    );
    console.log(resp);
    return resp;
}

let resp = null;
resp = permute([1, 2, 3]);
console.log(resp);
resp = permute([1, 2, 1, 3]);
console.log(resp);
// resp = permute([1]);
// console.log(resp);
// resp = permute([1, 2, 3, 4]);
// console.log(resp);
// resp = permute([1, 2, 3, 4, 5]);
// console.log(resp);
// console.log(permute([1, 2, 3]));
// console.log(permute([0, 1]));
// console.log(permute([1]));
