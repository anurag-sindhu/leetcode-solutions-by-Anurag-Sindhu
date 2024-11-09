function merge(a, b) {
    let prevBIndex = [];
    let prevCurrentIndex = 0;
    let bIndex = 0;
    for (let index = 0; index < a.length; index++) {
        let element = a[index];
        if (element === b[0]) {
            prevBIndex.push(index);
        }
        if (element === b[bIndex]) {
            bIndex++;
        } else {
            bIndex = 0;
            if (prevBIndex[prevCurrentIndex + 1]) {
                index = prevBIndex[++prevCurrentIndex];
            }
            element = a[index];
            if (element === b[0]) {
                bIndex++;
            }
        }
        if (bIndex === b.length) {
            break;
        }
    }
    let out = a;
    if (bIndex - 1 >= 0) {
        for (let index = bIndex; index < b.length; index++) {
            out += b[index];
        }
    } else {
        for (let index = 0; index < b.length; index++) {
            out += b[index];
        }
    }
    return out;
}

var minimumString = function (a, b, c) {
    const abc = merge(merge(a, b), c);
    const cab = merge(merge(c, a), b);
    const bac = merge(merge(b, a), c);
    const cba = merge(merge(c, b), a);
    const bca = merge(merge(b, c), a);
    const acb = merge(merge(a, c), b);
    const obj = {};
    const joinedElements = [abc, cab, bac, cba, bca, acb];
    for (const iterator of joinedElements) {
        const len = iterator.length;
        if (!obj[len]) {
            obj[len] = [];
        }
        obj[len].push(iterator);
    }
    let minLength = Infinity;
    for (const key in obj) {
        minLength = Math.min(Number(key), minLength);
    }
    const charMap = {};
    if (obj[minLength].length > 1) {
        function charMapper(char, charMapping, index = 0) {
            if (!char[index]) {
                return;
            }
            if (!charMapping[char[index]]) {
                charMapping[char[index]] = {};
            }
            charMapper(char, charMapping[char[index]], index + 1);
        }
        for (const iterator of obj[minLength]) {
            charMapper(iterator, charMap, 0);
        }
        let out = '';
        function explore(charMap) {
            if (!charMap) {
                return;
            }
            let minKey = ``;
            for (const key in charMap) {
                if (minKey === ``) {
                    minKey = key;
                }
                if (key < minKey) {
                    minKey = key;
                }
            }
            out += minKey;
            explore(charMap[minKey]);
        }
        explore(charMap);
        return out;
    }
    return obj[minLength][0];
};

console.log(minimumString('cab', 'a', 'b') === 'cab');
console.log(minimumString('c', 'ccc', 'cca') === 'ccca');
console.log(minimumString('abc', 'a', 'c') === 'abc');
console.log(minimumString((a = 'abc'), (b = 'bca'), (c = 'aaa')) === 'aaabca');
console.log(minimumString((a = 'ab'), (b = 'ba'), (c = 'aba')) === 'aba');
