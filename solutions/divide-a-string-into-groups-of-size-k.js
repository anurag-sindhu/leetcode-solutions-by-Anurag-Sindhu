var divideString = function (s, k, fill) {
    const out = [];
    let temp = '';
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        temp += element;
        if (temp.length === k) {
            out.push(temp);
            temp = '';
        }
    }
    if (temp.length) {
        if (temp.length < k) {
            let diff = k - temp.length;
            while (diff--) {
                temp += fill;
            }
        }
        out.push(temp);
    }
    return out;
};

console.log(divideString((s = 'abcdefghi'), (k = 3), (fill = 'x')));
console.log(divideString((s = 'abcdefghij'), (k = 3), (fill = 'x')));
