var minimumDeletions = function (s) {
    let forwardAFrequency = 0;
    let forwardBFrequency = 0;
    let backwardAFrequency = 0;
    let backwardBFrequency = 0;
    const forwardFrequency = { a: [], b: [] };
    const backwardFrequency = { a: [], b: [] };
    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            forwardAFrequency += 1;
        } else {
            forwardBFrequency += 1;
        }
        forwardFrequency.a.push(forwardAFrequency);
        forwardFrequency.b.push(forwardBFrequency);
    }

    for (let index = s.length - 1; index >= 0; index--) {
        if (s[index] === 'a') {
            backwardAFrequency += 1;
        } else {
            backwardBFrequency += 1;
        }
        backwardFrequency.b.push(backwardBFrequency);
        backwardFrequency.a.push(backwardAFrequency);
    }

    backwardFrequency.b = backwardFrequency.b.reverse();
    backwardFrequency.a = backwardFrequency.a.reverse();

    let max = -Infinity;
    for (let index = 0; index < s.length; index++) {
        const tempMax = forwardFrequency.a[index] + backwardFrequency.b[index];
        if (max < tempMax) {
            max = tempMax;
        }
    }
    return s.length - max;
};

console.log(
    minimumDeletions(
        (s =
            'aabbaababbababaabbbaabbbbaababababbabbbababbabbaabaaabbbbbbaaabbbbabaababbaaabbbbaaabababbbaaa'),
    ) === 41,
);
console.log(minimumDeletions((s = 'aababbab')) === 2);
console.log(minimumDeletions((s = 'bbaaaaabb')) === 2);
