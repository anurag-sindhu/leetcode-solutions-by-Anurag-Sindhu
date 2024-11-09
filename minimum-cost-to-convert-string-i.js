var minimumCost = function (source, target, original, changed, cost) {
    const objOriginal = {};
    const originalToChangedCost = {};

    for (let index = 0; index < original.length; index++) {
        const key = `${original[index]}-${changed[index]}`;
        if (originalToChangedCost[key]) {
            originalToChangedCost[key] = Math.min(originalToChangedCost[key], cost[index]);
        } else {
            originalToChangedCost[`${original[index]}-${changed[index]}`] = cost[index];
        }
    }

    for (let index = 0; index < original.length; index++) {
        const element = original[index];
        if (!objOriginal[element]) {
            objOriginal[element] = [];
        }
        objOriginal[element].push(changed[index]);
    }

    const costa = {};
    for (let parentIndex = 97; parentIndex <= 122; parentIndex++) {
        costa[String.fromCharCode(parentIndex)] = {};
        for (let index = 97; index <= 122; index++) {
            costa[String.fromCharCode(parentIndex)][String.fromCharCode(index)] = Infinity;
        }
    }
    for (const key in objOriginal) {
        function iterate(iterateKey, covered = {}, cost = 0, chain = '') {
            if (covered[iterateKey]) {
                return;
            }
            covered[iterateKey] = true;
            if (objOriginal[iterateKey]) {
                for (const element of objOriginal[iterateKey]) {
                    if (originalToChangedCost[`${iterateKey}-${element}`] === undefined) {
                        return;
                    }
                    if (key === element) {
                        continue;
                    }
                    if (key === 'a') {
                        console.log('object');
                    }
                    costa[key][element] = Math.min(
                        costa[key][element],
                        cost + originalToChangedCost[`${iterateKey}-${element}`],
                    );
                    iterate(element, covered, costa[key][element], chain + '-' + element);
                    console.log('object');
                }
            }
        }
        iterate(key);
    }
    let totalCost = 0;
    for (let index = 0; index < source.length; index++) {
        if (source[index] === target[index]) {
            continue;
        }
        if (costa[source[index]][target[index]] === Infinity) {
            return -1;
        }
        totalCost += costa[source[index]][target[index]];
    }
    return totalCost;
};
/**
 * 
'a  a   a   d     b   d    c    d   a   c',
'c  d   b   a     b   a    d    d   b   a',
7 + 2 + 1 + 11 +  0 + 11 + 4 +  0 + 1 + 2
 */
console.log(
    minimumCost(
        'aaadbdcdac',
        'cdbabaddba',
        ['a', 'c', 'b', 'd', 'b', 'a', 'c'],
        ['c', 'a', 'd', 'b', 'c', 'b', 'd'],
        [7, 2, 1, 3, 6, 1, 7],
    ) === 39,
);

console.log(
    minimumCost(
        (source = 'abcd'),
        (target = 'acbe'),
        (original = ['a', 'b', 'c', 'c', 'e', 'd']),
        (changed = ['b', 'c', 'b', 'e', 'b', 'e']),
        (cost = [2, 5, 5, 1, 2, 20]),
    ) === 28,
);
console.log(
    minimumCost(
        (source = 'aaaa'),
        (target = 'bbbb'),
        (original = ['a', 'c']),
        (changed = ['c', 'b']),
        (cost = [1, 2]),
    ) === 28,
);
console.log(
    minimumCost(
        (source = 'abcd'),
        (target = 'abce'),
        (original = ['a']),
        (changed = ['e']),
        (cost = [10000]),
    ) === 28,
);
