var findMatrix = function(nums) {
    const arr = [];
    for (const iterator of nums) {
        if (!arr[iterator]) {
            arr[iterator] = 0;
        }
        arr[iterator] += 1;
    }

    let anyValueFound = true;
    const output = [];
    let tempOutput = [];
    while (anyValueFound) {
        anyValueFound = false;
        tempOutput = [];
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] > 0) {
                tempOutput.push(index);
                arr[index] -= 1;
                anyValueFound = true;
            }
        }
        if (anyValueFound) {
            output.push(tempOutput);
        }
    }
    return output;
};

console.log(findMatrix((nums = [1, 3, 4, 1, 2, 3, 1])));
console.log(findMatrix((nums = [1, 2, 3, 4])));
