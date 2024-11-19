var maxProduct = function (words) {
    const set = words.map((word) => new Set(word));
    let max = 0;
    for (let i = 0; i < words.length - 1; ++i) {
        for (let j = i + 1; j < words.length; ++j) {
            const newLen = words[i].length * words[j].length;
            let hasCommon = false;
            if (newLen <= max) {
                continue;
            }
            for (let k = 97; k <= 122; ++k) {
                const char = String.fromCharCode(k);
                if (!set[i].has(char) || !set[j].has(char)) {
                    continue;
                }
                hasCommon = true;
                break;
            }
            !hasCommon && (max = newLen);
        }
    }
    return max;
};

console.log(maxProduct((words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])));
console.log(maxProduct((words = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'])));
console.log(maxProduct((words = ['a', 'aa', 'aaa', 'aaaa'])));
