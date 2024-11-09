var checkStrings = function (s1, s2) {
    const s1FreqEven = (function () {
        const config = {};
        for (let index = 0; index < s1.length; index += 2) {
            if (!config[s1[index]]) {
                config[s1[index]] = 0;
            }
            config[s1[index]] += 1;
        }
        return config;
    })();
    const s1FreqOdd = (function () {
        const config = {};
        for (let index = 1; index < s1.length; index += 2) {
            if (!config[s1[index]]) {
                config[s1[index]] = 0;
            }
            config[s1[index]] += 1;
        }
        return config;
    })();
    const s2FreqEven = (function () {
        const config = {};
        for (let index = 0; index < s2.length; index += 2) {
            if (!config[s2[index]]) {
                config[s2[index]] = 0;
            }
            config[s2[index]] += 1;
        }
        return config;
    })();
    const s2FreqOdd = (function () {
        const config = {};
        for (let index = 1; index < s2.length; index += 2) {
            if (!config[s2[index]]) {
                config[s2[index]] = 0;
            }
            config[s2[index]] += 1;
        }
        return config;
    })();
    for (const key in s1FreqEven) {
        if (s1FreqEven[key] !== s2FreqEven[key]) {
            return false;
        }
    }
    for (const key in s1FreqOdd) {
        if (s1FreqOdd[key] !== s2FreqOdd[key]) {
            return false;
        }
    }
    return true;
};

console.log(checkStrings((s1 = 'abcdba'), (s2 = 'cabdab')) === true);
console.log(checkStrings((s1 = 'abe'), (s2 = 'bea')) === false);
