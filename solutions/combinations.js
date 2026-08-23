function combine(nums, k) {
    function permuteHelper(
        candidates,
        alreadyAddressed = {},
        string = '',
        result = [],
        fromIndex = 0,
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
        for (let index = fromIndex; index < candidates.length; index++) {
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
            if (totalCandidatesUnderRoofLength == k) {
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
            permuteHelper(candidates, alreadyAddressed, newKey, result, index + 1);
        }
        return result;
    }
    const newArray = [];
    for (let index = 1; index <= nums; index++) {
        newArray.push(index);
    }
    const resp = permuteHelper(newArray);
    console.log(resp);
    return resp;
}

let resp;

resp = combine((nums = 4), 2);
console.log(resp);

resp = combine((nums = 4), 10);
console.log(resp);
// console.log(combine((nums = 20), 16));
// console.log(combine((nums = 20), 16));
// console.log(combine((nums = 20), 4));
// console.log(combine((nums = 20), 4));
