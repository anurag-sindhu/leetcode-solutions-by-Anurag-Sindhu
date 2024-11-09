var minLength = function(s) {
    let pointer1 = 0;
    let stack = [];
    while (pointer1 < s.length) {
        if (stack[stack.length - 1] === 'B' && stack[stack.length - 1 - 1] === 'A') {
            stack.pop();
            stack.pop();
        } else if (stack[stack.length - 1] === 'D' && stack[stack.length - 1 - 1] === 'C') {
            stack.pop();
            stack.pop();
        } else {
            stack.push(s[pointer1++]);
        }
    }
    if (stack[stack.length - 1] === 'B' && stack[stack.length - 1 - 1] === 'A') {
        stack.pop();
        stack.pop();
    } else if (stack[stack.length - 1] === 'D' && stack[stack.length - 1 - 1] === 'C') {
        stack.pop();
        stack.pop();
    }
    return stack.length;
};

console.log(minLength('ABFCACDB'));
console.log(minLength('ACBBD'));
