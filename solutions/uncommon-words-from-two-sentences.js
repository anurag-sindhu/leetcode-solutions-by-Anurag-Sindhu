/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const splittedS1 = s1.split(' ');
    const splittedS2 = s2.split(' ');
    const config = {};
    for (const iterator of splittedS1) {
        if (!config[iterator]) {
            config[iterator] = 0;
        }
        config[iterator] += 1;
    }

    for (const iterator of splittedS2) {
        if (!config[iterator]) {
            config[iterator] = 0;
        }
        config[iterator] += 1;
    }

    const uncommon = [];
    for (const key in config) {
        if (config[key] === 1) {
            uncommon.push(key);
        }
    }
    return uncommon;
};

console.log(uncommonFromSentences('apple apple', 'banana'));
console.log(uncommonFromSentences((s1 = 'this apple is sweet'), (s2 = 'this apple is sour')));
