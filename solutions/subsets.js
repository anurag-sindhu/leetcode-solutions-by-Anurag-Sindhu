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

console.log(subsets((nums = [1, 2, 1, 3])));

console.log(
    subsets((nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])),
);
