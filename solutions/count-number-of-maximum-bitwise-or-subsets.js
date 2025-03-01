var subsets = function (nums) {
    let output = [];
    let index = 0;
    while (index < nums.length) {
        const tempArr = [];
        if (index === 0) {
            output.push([]);
        }
        for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
            let res = [...output[outputIndex], nums[index]];
            tempArr.push(res);
        }
        output = [...output, ...tempArr];
        index++;
    }
    return output;
};
var countMaxOrSubsets = function (nums) {
    const getSubset = subsets(nums);
    const subsetConfig = {};
    for (const element of getSubset) {
        if (element.length) {
            let prod = 0;
            for (const element1 of element) {
                prod = element1 | prod;
            }
            if (!subsetConfig[prod]) {
                subsetConfig[prod] = 0;
            }
            subsetConfig[prod] += 1;
        }
    }
    let max = -Infinity;
    for (const key in subsetConfig) {
        max = Math.max(max, subsetConfig[key]);
    }
    return max;
};

console.log(countMaxOrSubsets((nums = [3, 2, 1, 5, 3, 2, 1, 5, 3, 2, 1, 5])));
console.log(countMaxOrSubsets((nums = [3, 2, 1, 5])));
console.log(countMaxOrSubsets((nums = [3, 1])));
