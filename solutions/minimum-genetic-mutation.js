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

function isSingleCharacterChange(from, to) {
    if (from.length !== to.length) return false;

    let diff = 0;
    for (let i = 0; i < from.length; i++) {
        if (from[i] !== to[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}

var minMutation = function (start, end, bank) {
    const bankMap = {};
    for (const gene of bank) {
        bankMap[gene] = true;
    }

    // end must exist in bank
    if (!bankMap[end]) return -1;

    let minSteps = Infinity;

    function dfs(current, visited, steps) {
        if (current === end) {
            minSteps = Math.min(minSteps, steps);
            return;
        }

        for (const gene of bank) {
            if (!visited[gene] && isSingleCharacterChange(current, gene)) {
                visited[gene] = true;
                dfs(gene, visited, steps + 1);
                delete visited[gene]; // backtrack
            }
        }
    }

    const visited = {};
    visited[start] = true;

    dfs(start, visited, 0);

    return minSteps === Infinity ? -1 : minSteps;
};

/**
 * AAAACCCC -> [] -> 'AAAACCCA''AAACCCCC -> AAACCCCA 
'AAAACCCA'
'AACCCCCA'
'AAACCCCC'
 */
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
    ]) === 4,
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
