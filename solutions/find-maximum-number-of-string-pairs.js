var maximumNumberOfStringPairs = function (words) {
    const config = (function () {
        const config = {};
        for (let index = 0; index < words.length; index++) {
            const iterator = words[index];
            const reversed = iterator.split('').reverse().join('');
            if (reversed !== iterator) {
                if (!config[iterator]) {
                    config[iterator] = {};
                }
                config[iterator][index] = true;
                if (!config[iterator]) {
                    config[iterator] = {};
                }
                config[iterator][index] = true;
            }
        }
        return config;
    })();
    let count = 0;
    const encountered = {};
    for (const iterator of words) {
        const reversed = iterator.split('').reverse().join('');
        if (
            !encountered[reversed] &&
            !encountered[iterator] &&
            config[iterator] &&
            config[reversed]
        ) {
            count += Object.keys(config[iterator]).length * Object.keys(config[reversed]).length;
            encountered[iterator] = true;
            encountered[reversed] = true;
        }
    }
    return count;
};

console.log(maximumNumberOfStringPairs((words = ['cd', 'ac', 'dc', 'ca', 'zz'])) === 2);
console.log(maximumNumberOfStringPairs((words = ['ab', 'ba', 'cc'])) === 1);
console.log(maximumNumberOfStringPairs((words = ['aa', 'ab'])) === 0);
