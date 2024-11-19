var removeInvalidParentheses = function (s) {
    const memoization = {};
    const dict = {};
    function removeInvalidParenthesesHelper(s, index, open = 0, close = 0, str = '') {
        if (index >= s.length) {
            dict[str] = true;
            return;
        }
        if (s[index] === '(') {
            open += 1;
            str += s[index];
        } else if (s[index] === ')') {
            if (close + 1 > open) {
                console.log('object');
            } else {
                close += 1;
                str += s[index];
            }
        }
        removeInvalidParenthesesHelper(s, index + 1, open, close, str);
    }
    removeInvalidParenthesesHelper(s, 0);
    return dict;
};

console.log(removeInvalidParentheses((s = ')(')));
console.log(removeInvalidParentheses((s = '()())()')));
console.log(removeInvalidParentheses((s = '(a)())()')));
