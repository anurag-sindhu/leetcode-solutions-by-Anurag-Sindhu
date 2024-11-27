const ord = (c) => c.charCodeAt();

const appealSum = (s) => {
    let last = Array(26).fill(0),
        res = 0;
    for (let i = 0; i < s.length; i++) {
        last[ord(s[i]) - 97] = i + 1;
        for (let j = 0; j < 26; j++) {
            res += last[j];
        }
    }
    return res;
};
console.log(appealSum((s = 'abbca')));
console.log(appealSum((s = 'code')));
1, 2, 3, 4, 5
1
3
6
10
15