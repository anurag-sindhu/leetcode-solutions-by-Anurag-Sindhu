/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    const getAllCombinations = (str) => {
        const config = {};
        config[str] = true;
        for (let index = 0; index < 3; index++) {
            for (let childIndex = index + 1; childIndex < 4; childIndex++) {
                let splittedString = str.split('');
                const store = splittedString[index];
                splittedString[index] = splittedString[childIndex];
                splittedString[childIndex] = store;
                config[splittedString.join('')] = true;
            }
        }
        return config;
    };
    const s1Combinations = getAllCombinations(s1);
    const s2Combinations = getAllCombinations(s2);
    for (const key in s1Combinations) {
        if (s2Combinations[key]) {
            return true;
        }
    }
    for (const key in s2Combinations) {
        if (s1Combinations[key]) {
            return true;
        }
    }
    return false;
};

console.log(canBeEqual((s1 = 'abcd'), (s2 = 'dacb')));
console.log(canBeEqual('bnxw', 'bwxn'));
console.log(canBeEqual((s1 = 'abcd'), (s2 = 'cdab')));
