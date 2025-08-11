function dotCount(s) {
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '.') {
            count += 1;
        }
    }
    return count;
}

function isValid(s) {
    if (s[0] === '0') {
        return false;
    }
    return true;
}

var addOperators = function (num, target) {
    const symbols = ['+', '*', '-'];
    function addOperatorsHelper(num, target, temp = '', lastIndex = 0, numIndex = 0) {
        for (let index = 0; index < symbols.length; index++) {
            for (; numIndex < num.length; numIndex++) {
                const cutIndexCharFromLast = num.slice(lastIndex - numIndex + 1, lastIndex + 1);
                if (isValid(cutIndexCharFromLast)) {
                    addOperatorsHelper(num, target, temp + symbols[index] + cutIndexCharFromLast);
                }
            }
            const element = array[index];
        }
    }
    addOperatorsHelper(num, target);
};

console.log(addOperators((num = '123'), (target = 6)));
console.log(addOperators((num = '232'), (target = 8)));
console.log(addOperators((num = '3456237490'), (target = 9191)));
