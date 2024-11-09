var scoreOfParentheses = function (paren) {
    let resp = null;
    let stack = [];
    for (let index = 0; index < paren.length; index++) {
        if (paren[index] === '(') {
            stack.push(0);
        } else {
            if (stack[stack.length - 1] != 0) {
                let sum = 0;
                while (stack.length && stack[stack.length - 1]) {
                    sum += stack.pop();
                }
                stack[stack.length - 1] = 2 * sum;
            } else {
                stack[stack.length - 1] = 1;
            }
        }
    }
    let sum = 0;
    while (stack.length) {
        sum += stack.pop();
    }
    return sum;
};

console.log(scoreOfParentheses((s = '((())())')) === 6);
console.log(scoreOfParentheses((s = '(()())()')) === 5);
console.log(scoreOfParentheses((s = '((()())())')) === 10);
console.log(scoreOfParentheses((s = '((()))')) === 4);
console.log(scoreOfParentheses((s = '(())')) === 2);
console.log(scoreOfParentheses((s = '()')) === 1);
console.log(scoreOfParentheses((s = '()()')) === 2);
console.log(scoreOfParentheses((s = '((()())())')) === 10);
console.log(scoreOfParentheses((s = '(()()())')) === 6);
