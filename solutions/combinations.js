var combine = function (n, maxLength) {
    const nums = [];
    for (let index = 1; index <= n; index++) {
        nums.push(index);
    }
    let output = [];
    let index = 0;
    while (index < nums.length) {
        const tempArr = [];
        if (index === 0) {
            output.push([]);
        }
        for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
            let res = [...output[outputIndex], nums[index]];
            if (res.length <= maxLength) {
                tempArr.push(res);
            }
        }
        output = [...output, ...tempArr];
        index++;
    }
    // const finalOutput = output.filter((value) => value.length === maxLength);
    return output;
};

console.log(combine((nums = 4), 10));
// console.log(combine((nums = 20), 16));
// console.log(combine((nums = 20), 16));
// console.log(combine((nums = 20), 4));
// console.log(combine((nums = 20), 4));
