var evaluate = function (str, knowledge) {
    const obj = (function () {
        const config = {};
        for (const [key, value] of knowledge) {
            config[key] = value;
        }
        return config;
    })();
    let key = '';
    let isUnderBraces = false;
    let output = ``;
    for (let index = 0; index < str.length; index++) {
        if (str[index] === '(') {
            isUnderBraces = true;
        } else if (str[index] === ')') {
            output += obj[key] || '?';
            isUnderBraces = false;
            key = '';
        } else if (isUnderBraces === false) {
            output += str[index];
        } else {
            key += str[index];
        }
    }
    return output;
};

console.log(
    evaluate(
        (s = '(name)is(age)yearsold'),
        (knowledge = [
            ['name', 'bob'],
            ['age', 'two'],
        ]),
    ) === 'bobistwoyearsold',
);

console.log(evaluate((s = 'hi(name)'), (knowledge = [['a', 'b']])) === 'hi?');

console.log(evaluate((s = '(a)(a)(a)aaa'), (knowledge = [['a', 'yes']])) === 'yesyesyesaaa');
