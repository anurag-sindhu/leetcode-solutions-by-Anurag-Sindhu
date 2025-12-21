var minWindow = function (str, target) {
    const sourceConfig = (function () {
        const config = {};
        for (let index = 0; index < target.length; index++) {
            if (!config[target[index]]) {
                config[target[index]] = 1;
            } else {
                config[target[index]] += 1;
            }
        }
        return config;
    })();
    const output = [];
    let leftIndex = -1;
    let rightIndex = target.length - 1;
    let isMatching = false;
    let minLen = Infinity;
    let leftIndexOut = null;
    let rightIndexOut = null;

    while (rightIndex < str.length) {
        console.log('object');
        // const balance = getBalancedFrequency(sourceConfig[leftIndex], sourceConfig[rightIndex]);
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
console.log(minWindow((s = 'ADOBECODEBANC'), (t = 'ABC')));
console.log(minWindow((s = 'a'), (t = 'aa')));
console.log(minWindow((s = 'ab'), (t = 'b')));
console.log(minWindow((s = 'a'), (t = 'a')));
