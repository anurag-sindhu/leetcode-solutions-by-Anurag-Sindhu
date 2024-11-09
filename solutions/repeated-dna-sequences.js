var findRepeatedDnaSequences = function (s) {
    const output = {};
    const storage = {};
    const characterFrequencyStorage = {};
    if (s.length < 10) {
        return [];
    }
    let initString = (function () {
        let str = ``;
        for (let index = 0; index < 9; index++) {
            str += s[index];
            if (!characterFrequencyStorage[s[index]]) {
                characterFrequencyStorage[s[index]] = {};
            }
            characterFrequencyStorage[s[index]][index] = true;
        }
        return str;
    })();
    for (let index = 9; index < s.length; index++) {
        initString = (function () {
            let arr = new Array(10);
            for (const key in characterFrequencyStorage) {
                for (const frequencyKey in characterFrequencyStorage[key]) {
                    if (characterFrequencyStorage[key][frequencyKey]) {
                        if (index - 9 - frequencyKey < 0) {
                            arr[frequencyKey] = key;
                        } else {
                            arr[(index - 9 - frequencyKey) % 10] = key;
                        }
                    }
                }
            }
            arr[index] = s[index];
            if (!characterFrequencyStorage[s[index]]) {
                characterFrequencyStorage[s[index]] = {};
            }
            characterFrequencyStorage[s[index]][index] = true;
            const resp = arr.join(``);
            return resp;
        })();
        if (!storage[initString]) {
            storage[initString] = 0;
        }
        storage[initString] += 1;
        if (storage[initString] > 1) {
            output[initString] = storage[initString];
        }
        delete characterFrequencyStorage[s[index - 9]][index - 9];
    }
    return Object.keys(output);
};

console.log(findRepeatedDnaSequences((s = '"AAAA"')));
console.log(findRepeatedDnaSequences((s = 'AAAAAAAAAAAAA')));
console.log(findRepeatedDnaSequences((s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')));
console.log(findRepeatedDnaSequences((s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')));
console.log(findRepeatedDnaSequences((s = 'ACGTACGTACGT')));
console.log(findRepeatedDnaSequences((s = 'AAAAAAAAAAA')));
