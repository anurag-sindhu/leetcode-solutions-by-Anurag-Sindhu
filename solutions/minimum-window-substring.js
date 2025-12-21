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
    let leftIndex = 0;
    let rightIndex = 0;
    let minLen = Infinity;
    let leftIndexOut = null;
    let rightIndexOut = null;
    let missing = target.length;

    while (rightIndex < str.length) {
        if (sourceConfig[str[rightIndex]] > 0) {
            missing -= 1;
        }
        sourceConfig[str[rightIndex]] = (sourceConfig[str[rightIndex]] || 0) - 1;
        while (missing == 0) {
            const netLength = rightIndex - leftIndex + 1;
            if (minLen > netLength) {
                leftIndexOut = leftIndex;
                rightIndexOut = rightIndex;
                minLen = netLength;
            }
            sourceConfig[str[leftIndex]] = (sourceConfig[str[leftIndex]] || 0) + 1;
            if (sourceConfig[str[leftIndex]] > 0) {
                missing += 1;
            }
            leftIndex += 1;
        }
        rightIndex++;
    }
    return minLen != Infinity ? str.substring(leftIndexOut, rightIndexOut + 1) : '';
};

console.log(minWindow((s = 'ADOBECODEBANC'), (t = 'ABC')));
console.log(minWindow((s = 'a'), (t = 'aa')));
console.log(minWindow((s = 'ab'), (t = 'b')));
console.log(minWindow((s = 'a'), (t = 'a')));
