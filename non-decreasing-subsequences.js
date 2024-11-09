function findSmartSubset(nums) {
    let out = [[]];
    let numIndex = 0;
    while (numIndex < nums.length) {
        let tempArr = [];
        for (let index = 0; index < out.length; index++) {
            let arr = [...out[index], nums[numIndex]];
            tempArr.push(arr);
        }
        out = [...out, ...tempArr];
        numIndex++;
    }
    return out;
}

var findSubsequences = function (nums) {
    const subsets = findSmartSubset(nums);
    const config = {};
    let iterator;
    for (iterator of subsets) {
        let key = '';
        if (iterator.length > 1) {
            for (let index = 0; index < iterator.length; index++) {
                const iterate = iterator[index];
                key += `${iterate}`;
                if (iterator[index] < iterator[index - 1]) {
                    iterator = null;
                    break;
                }
            }
            config[key] = iterator;
        }
    }
    const output = [];
    for (const key in config) {
        if (config[key]) {
            output.push(config[key]);
        }
    }
    console.log(output.length);
    return output;
};

console.log(findSubsequences((nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])));
console.log(findSubsequences((nums = [4, 3, 2, 1, 6, 7, 8, 6, 5])));
console.log(findSubsequences((nums = [4, 4, 3, 2, 1])));
console.log(findSubsequences((nums = [4, 6, 7, 7])));
console.log(findSubsequences((nums = [0, 1, 4, 2, 3]))); //32
console.log(findSubsequences((nums = [0]))); //2
console.log(findSubsequences((nums = [0, 1]))); //4
console.log(findSubsequences((nums = [0, 1, 2]))); //8
console.log(findSubsequences((nums = [0, 1, 2, 3]))); //16
console.log(findSubsequences((nums = [0, 1, 5, 5, 2, 3])));
console.log(findSubsequences((nums = [4, 6, 7, 7, 4, 6, 7, 7, 4, 6, 7, 7, 4, 6, 7])));
console.log(findSubsequences((nums = [0, 1, 2, 3])));
