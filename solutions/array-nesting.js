var arrayNesting = function (nums) {
    let output = 1;
    const arr = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (arr[element] == undefined) {
            const inProgress = {};
            let maxSize = 0;
            function hello(from, size = 0) {
                maxSize = Math.max(maxSize, size);
                if (arr[element] != undefined) {
                    maxSize = Math.max(maxSize, arr[element] + size - 1);
                    return;
                }
                if (inProgress[from] != undefined) {
                    return 0;
                }
                inProgress[from] = true;
                hello(nums[from], size + 1);
                arr[from] = maxSize;
            }
            hello(element);
        } else {
            output = Math.max(output, arr[element]);
        }
    }
    return output;
};

console.log(arrayNesting((nums = nums = [0, 1, 2])) === 1);
console.log(arrayNesting((nums = [5, 4, 0, 3, 1, 6, 2])) === 4);
