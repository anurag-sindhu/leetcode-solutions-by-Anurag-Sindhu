var minExtraChar1 = function (str, dictionary) {
    const config = [];
    for (let indexDict = 0; indexDict <= dictionary.length; indexDict++) {
        const element = dictionary[indexDict - 1];
        config[indexDict] = [];
        let tempStr = '';
        for (let index = 0; index <= str.length; index++) {
            if (indexDict == 0) {
                config[indexDict][index] = index;
                continue;
            }
            if (index == 0) {
                config[indexDict][index] = 0;
                continue;
            }
            tempStr += str[index - 1];
            if (tempStr.length > element.length) {
                tempStr = tempStr.split('').slice(1).join('');
            }
            if (element == tempStr) {
                config[indexDict][index] = Math.min(
                    config[indexDict - 1][index - tempStr.length],
                    config[indexDict][index - tempStr.length],
                );
            } else {
                // config[indexDict][index] = Math.min(config[indexDict - 1][index]);
                config[indexDict][index] = Math.min(
                    config[indexDict - 1][index],
                    1 + config[indexDict][index - 1],
                );
            }
        }
    }
    return config[config.length - 1][config[0].length - 1];
};

var minExtraChar = function (str, dictionary) {
    /**
     * Re call use single string
     * check all possibility
     */
};
console.log(minExtraChar((s = 'leetscodeleet'), (dictionary = ['leet', 'code', 'leetcode'])));

console.log(
    7 ==
        minExtraChar(
            (s = 'dwmodizxvvbosxxw'),
            (dictionary = [
                'ox',
                'lb',
                'diz',
                'gu',
                'v',
                'ksv',
                'o',
                'nuq',
                'r',
                'txhe',
                'e',
                'wmo',
                'cehy',
                'tskz',
                'ds',
                'kzbu',
            ]),
        ),
);
console.log(minExtraChar((s = 'leetscode'), (dictionary = ['leet', 'code', 'leetcode'])));
console.log(minExtraChar((s = 'sayhelloworld'), (dictionary = ['hello', 'world'])));
