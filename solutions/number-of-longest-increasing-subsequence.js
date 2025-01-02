var findNumberOfLIS = function (nums) {
    let count = 1;
    const arr = [{ num: nums[0], cnt: 1 }];
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (!arr.length) {
            arr.push({ num: element, cnt: 1 });
        } else {
            let lastElementOfArr = arr[arr.length - 1];
            let lastCount = lastElementOfArr.cnt;
            let lastElement = lastElementOfArr.num;
            if (element < lastElement) {
                while (arr.length && element < lastElement) {
                    arr.pop();
                    lastElementOfArr = arr[arr.length - 1];
                    lastCount = lastElementOfArr && lastElementOfArr.cnt;
                    lastElement = lastElementOfArr && lastElementOfArr.num;
                }
                if (lastCount) {
                    count = Math.max(count, lastCount + 1);
                    arr.push({ num: element, cnt: lastCount + 1 });
                } else {
                    arr.push({ num: element, cnt: 1 });
                }
            } else if (element > lastElement) {
                count = Math.max(count, lastCount + 1);
                arr.push({ num: element, cnt: lastCount + 1 });
            }
        }
    }
    return count;
};

console.log(findNumberOfLIS((nums = [2, 2, 2, 2, 2])));
console.log(findNumberOfLIS((nums = [4, 1, 5, 2, 4, 5, 3, 4, 5, 6])));
console.log(findNumberOfLIS((nums = [1, 3, 5, 4, 7])));
