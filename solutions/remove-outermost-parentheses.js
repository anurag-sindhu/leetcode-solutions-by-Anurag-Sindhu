var removeOuterParentheses = function (s) {
    let hasOpen = false;
    let openingCount = 0;
    let out = '';
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '(' && hasOpen === false) {
            hasOpen = true;
            openingCount += 1;
        } else {
            if (element === '(') {
                out += element;
                openingCount += 1;
            } else {
                if (openingCount === 1) {
                    hasOpen = false;
                    openingCount = 0;
                } else {
                    out += element;
                    openingCount -= 1;
                }
            }
        }
    }
    return out;
};

console.log(removeOuterParentheses((s = '(()())(())')));
console.log(removeOuterParentheses((s = '(()())(())(()(()))')));
console.log(removeOuterParentheses((s = '()()')));
