function frequencyDifferenceEqual(obj1, obj2) {
    let diff = 0;
    for (let index = 0; index < obj1.length; index++) {
        if (obj1[index] !== obj2[index]) {
            diff += 1;
        }
    }
    return diff;
}

var minMutation1 = function (start, end, bank) {
    if (bank.length === 1) {
        return 1;
    }

    let mutation = Infinity;
    function explore(from, hasExplored = {}, avoidBankIndex = null, totalMutations = 0) {
        hasExplored[from] = true;
        if (from === end) {
            if (mutation > totalMutations) {
                mutation = totalMutations;
            }
            return;
        }
        for (let index = 0; index < bank.length; index++) {
            if (avoidBankIndex !== index) {
                if (
                    frequencyDifferenceEqual(from, bank[index]) === 1 &&
                    !hasExplored[bank[index]]
                ) {
                    console.log(bank[index]);
                    explore(bank[index], hasExplored, index, totalMutations + 1);
                    console.log(hasExplored);
                    hasExplored[bank[index]] = false;
                }
            }
        }
    }
    explore(start);
    if (mutation === Infinity) {
        return -1;
    }
    return mutation;
};

function isSingleCharacterChange(from, end) {
    const m = from.length;
    const n = end.length;

    // Length difference > 1 → impossible
    if (Math.abs(m - n) > 1) return false;

    let i = 0,
        j = 0;
    let changes = 0;

    while (i < m && j < n) {
        if (from[i] === end[j]) {
            i++;
            j++;
        } else {
            if (changes === 1) return false;
            changes++;

            if (m > n) {
                i++; // deletion
            } else if (m < n) {
                j++; // insertion
            } else {
                i++;
                j++; // replacement
            }
        }
    }

    // Extra char at the end
    if (i < m || j < n) changes++;

    return changes === 1;
}

function findSingleCharacterChangeArray(array, from) {
    return array.filter((value) => isSingleCharacterChange(from, value) === true);
}

var minMutation = function (start, end, bank) {
    const bankConfig = (function () {
        const config = {};
        for (const element of bank) {
            config[element] = true;
        }
        return config;
    })();

    if (bankConfig[end] == undefined) {
        return -1;
    }

    function explore(exploring, inProgress = {}) {
        let steps = Infinity;
        const arr = findSingleCharacterChangeArray(bank, exploring);
        for (const element of arr) {
            if (element == end) {
                return 1;
            }
            if (!inProgress[element]) {
                inProgress[element] = true;
                const temp = explore(element, inProgress);
                steps = Math.min(steps, 1 + temp);
            }
        }
        return steps;
    }
    const resp = explore(start);
    console.log({ resp });
    return bankConfig;
};

console.log(
    minMutation('AAAACCCC', 'CCCCCCCC', [
        'AAAACCCA',
        'AAACCCCA',
        'AACCCCCA',
        'AACCCCCC',
        'ACCCCCCC',
        'CCCCCCCC',
        'AAACCCCC',
        'AACCCCCC',
    ]) === 2,
);
console.log(minMutation((start = 'AACCGGTT'), (end = 'AACCGGTA'), (bank = ['AACCGGTA'])) === 1);

console.log(
    minMutation(
        (start = 'AACCGGTT'),
        (end = 'AAACGGTA'),
        (bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']),
    ) === 2,
);

console.log(
    minMutation(
        (start = 'AACCGGTT'),
        (end = 'AAACGGTA'),
        (bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']),
    ) === 2,
);

console.log(
    minMutation(
        (start = 'AAAAACCC'),
        (end = 'AACCCCCC'),
        (bank = ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']),
    ) === 3,
);
