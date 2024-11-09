var numOfPairs = function (nums, target) {
    function requiredStringFromFront(num) {
        let targetIndex = 0;
        let index = 0;
        for (; index < num.length; index++) {
            if (num[index] !== target[targetIndex]) {
                break;
            }
            targetIndex++;
        }
        if (index !== num.length) {
            return -1;
        }
        const result = target.substring(targetIndex);
        return result;
    }

    function requiredStringFromBack(num) {
        let targetIndex = target.length - 1;
        let index = num.length - 1;
        for (; index >= 0; index--) {
            if (num[index] !== target[targetIndex]) {
                break;
            }
            targetIndex--;
        }
        if (index !== -1) {
            return -1;
        }
        const result = target.substring(0, targetIndex + 1);
        return result;
    }

    const config = (function () {
        const config = {};
        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            if (!config[element]) {
                config[element] = {};
            }
            config[element][index] = true;
        }
        return config;
    })();
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const front = requiredStringFromFront(element);
        const back = requiredStringFromBack(element);
        if (config[front]) {
            const size = Object.keys(config[front]).length;
            if (config[front][index]) {
                count += size - 1;
            } else {
                count += size;
            }
        }
        if (config[back]) {
            const size = Object.keys(config[back]).length;
            if (config[back][index]) {
                count += size - 1;
            } else {
                count += size;
            }
        }
    }
    return count / 2;
};

console.log(numOfPairs(['88760205', '88', '8', '7602058'], '887602058') === 2);
console.log(numOfPairs((nums = ['236', '7', '77', '77']), (target = '7236')) === 1);
console.log(numOfPairs((nums = ['777', '7', '77', '77']), (target = '7777')) === 4);
console.log(numOfPairs((nums = ['123', '4', '12', '34']), (target = '1234')) === 2);
console.log(numOfPairs((nums = ['1', '1', '1']), (target = '11')) === 6);
