var maximumProduct = function (nums, k) {
    nums.sort((a, b) => a - b);
    let prod = 1;
    let lastConsecutiveFreq = 1;
    let lastConsecutive = nums[0];
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (element > lastConsecutive) {
            const diff = element - lastConsecutive;
            if (k > diff * lastConsecutiveFreq) {
                k -= diff * lastConsecutiveFreq;
                lastConsecutive = element;
                lastConsecutiveFreq++;
            } else {
                break;
            }
        } else if (element === lastConsecutive) {
            lastConsecutiveFreq++;
        }
    }
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (lastConsecutiveFreq) {
            if (k) {
                prod *= lastConsecutive + 1;
                k--;
            } else {
                prod *= lastConsecutive;
            }
            lastConsecutiveFreq--;
        } else {
            prod *= element;
        }
    }
    const resp = prod % (Math.pow(10, 9) + 7);
    return resp;
};

console.log(maximumProduct((nums = [9, 6, 3, 3, 3, 2, 1]), (k = 5)));
console.log(maximumProduct((nums = [6, 3, 3, 2]), (k = 2)));
console.log(maximumProduct((nums = [0, 4]), (k = 5)));
