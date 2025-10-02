var minWindow = function (str, target) {
    const sourceConfig = (function () {
        const config = [{}];
        for (let index = 1; index <= str.length; index++) {
            const temp = { ...config[index - 1] };
            if (!temp[str[index - 1]]) {
                temp[str[index - 1]] = 1;
            } else {
                temp[str[index - 1]] += 1;
            }
            config[index] = temp;
        }
        return config.slice(1);
    })();
    const destinationConfig = (function () {
        const config = [{}];
        for (let index = 1; index <= target.length; index++) {
            const temp = { ...config[index - 1] };
            if (!temp[target[index - 1]]) {
                temp[target[index - 1]] = 1;
            } else {
                temp[target[index - 1]] += 1;
            }
            config[index] = temp;
        }
        return config[config.length - 1];
    })();

    function isFrequencyMatching(source) {
        for (const iterator in destinationConfig) {
            if (!source[iterator] || source[iterator] < destinationConfig[iterator]) {
                return false;
            }
        }
        return true;
    }

    function getBalancedFrequency(fromConfig, toConfig) {
        const out = [];
        for (const key in toConfig) {
            const temp = toConfig[key] - ((fromConfig && fromConfig[key]) || 0);
            if (temp > 0) {
                out[key] = temp;
            }
        }
        return out;
    }
    const output = [];
    let leftIndex = -1;
    let rightIndex = target.length - 1;
    let isMatching = false;
    let minLen = Infinity;
    let leftIndexOut = null;
    let rightIndexOut = null;
    while (rightIndex < str.length) {
        const balance = getBalancedFrequency(sourceConfig[leftIndex], sourceConfig[rightIndex]);
        isMatching = isFrequencyMatching(balance);
        if (isMatching) {
            const netLength = rightIndex - leftIndex;
            if (minLen > netLength) {
                leftIndexOut = leftIndex + 1;
                rightIndexOut = rightIndex;
                minLen = netLength;
            }
            while (isMatching) {
                leftIndex += 1;
                const balance = getBalancedFrequency(
                    sourceConfig[leftIndex],
                    sourceConfig[rightIndex],
                );
                isMatching = isFrequencyMatching(balance);
                if (isMatching) {
                    const netLength = rightIndex - leftIndex;
                    if (minLen > netLength) {
                        leftIndexOut = leftIndex + 1;
                        rightIndexOut = rightIndex;
                        minLen = netLength;
                    }
                    output.push({ leftIndex: leftIndex + 1, rightIndex });
                }
            }
        }
        rightIndex++;
    }
    let out = '';
    if (leftIndexOut !== null && rightIndexOut !== null) {
        for (let index = leftIndexOut; index <= rightIndexOut; index++) {
            out += str[index];
        }
    }
    return out;
};
console.log(minWindow((s = 'a'), (t = 'aa')));
console.log(minWindow((s = 'ADOBECODEBANC'), (t = 'ABC')));
console.log(minWindow((s = 'ab'), (t = 'b')));
console.log(minWindow((s = 'a'), (t = 'a')));
