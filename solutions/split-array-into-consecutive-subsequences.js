var isPossible = function (nums) {
    const vacancyMap = {};
    const config = (function () {
        const config = {};
        for (const element of nums) {
            if (config[element] == undefined) {
                config[element] = 0;
            }
            config[element] += 1;
        }
        return config;
    })();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (config[element] > 0) {
            if (vacancyMap[element]) {
                vacancyMap[element] -= 1;
                config[element] -= 1;
                if (vacancyMap[element + 1] == undefined) {
                    vacancyMap[element + 1] = 0;
                }
                vacancyMap[element + 1] += 1;
            } else {
                const firstElement = element;
                const secondElement = element + 1;
                const thirdElement = element + 1 + 1;
                if (config[secondElement] && config[thirdElement]) {
                    config[firstElement] -= 1;
                    config[secondElement] -= 1;
                    config[thirdElement] -= 1;
                    if (vacancyMap[thirdElement + 1] == undefined) {
                        vacancyMap[thirdElement + 1] = 0;
                    }
                    vacancyMap[thirdElement + 1] += 1;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(isPossible((nums = [1, 2, 3, 4, 4, 5])));
console.log(isPossible((nums = [1, 2, 3, 3, 4, 4, 5, 5])));
console.log(isPossible((nums = [1, 2, 3])));
console.log(isPossible((nums = [1, 2, 3, 3, 4, 5])));
