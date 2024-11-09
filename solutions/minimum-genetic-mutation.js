function frequencyDifferenceEqual(obj1, obj2) {
    let diff = 0;
    for (let index = 0; index < obj1.length; index++) {
        if (obj1[index] !== obj2[index]) {
            diff += 1;
        }
    }
    return diff;
}

var minMutation = function (start, end, bank) {
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

console.log(
    minMutation('AAAACCCC', 'CCCCCCCC', [
        'AAAACCCA',
        'AAACCCCA',
        'AACCCCCA',
        'AACCCCCC',
        'ACCCCCCC',
        'CCCCCCCC',
        'AAACCCCC',
        'AACCCCCC'
    ]) === 2
);

console.log(
    minMutation(
        (start = 'AACCGGTT'),
        (end = 'AAACGGTA'),
        (bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])
    ) === 2
);

console.log(
    minMutation(
        (start = 'AACCGGTT'),
        (end = 'AAACGGTA'),
        (bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])
    ) === 2
);

console.log(
    minMutation(
        (start = 'AAAAACCC'),
        (end = 'AACCCCCC'),
        (bank = ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'])
    ) === 3
);

console.log(minMutation((start = 'AACCGGTT'), (end = 'AACCGGTA'), (bank = ['AACCGGTA'])) === 1);
