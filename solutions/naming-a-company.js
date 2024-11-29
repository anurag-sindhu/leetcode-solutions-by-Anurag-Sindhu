var distinctNames = function (ideas) {
    const withFirstLetter = (function () {
        const config = {};
        for (let index = 0; index < ideas.length; index++) {
            if (!config[ideas[index][0]]) {
                config[ideas[index][0]] = {};
            }
            config[ideas[index][0]][ideas[index]] = 1;
        }
        return config;
    })();
    const withoutFirstLetter = (function () {
        const config = {};
        for (let index = 0; index < ideas.length; index++) {
            const sub = ideas[index].substring(1);
            if (!config[sub]) {
                config[sub] = 0;
            }
            config[sub] += 1;
        }
        return config;
    })();
    const ideasObj = (function () {
        const config = {};
        for (let index = 0; index < ideas.length; index++) {
            config[ideas[index]] = 1;
        }
        return config;
    })();
    let count = 0;
    for (let index = 0; index < ideas.length; index++) {
        const givenFirstLetter = ideas[index][0];
        const restLetters = ideas[index].substring(1);
        for (const takenFirstLetter in withFirstLetter) {
            const takenFirstLetterString = `${takenFirstLetter}${restLetters}`;
            if (takenFirstLetter !== givenFirstLetter) {
                if (!ideasObj[takenFirstLetterString] && !ideasObj[takenFirstLetterString]) {
                    for (const key in withFirstLetter[takenFirstLetter]) {
                        if (Object.prototype.hasOwnProperty.call(object, key)) {
                            const element = object[key];
                        }
                    }
                }
            }
        }
    }
    return count;
};

console.log(distinctNames((ideas = ['coffee', 'joffee', 'time', 'toffee'])));
console.log(
    distinctNames((ideas = ['anu', 'rag', 'sin', 'dhu', 'abh', 'ish', 'eks', 'ind'])) == 52,
);
console.log(
    distinctNames(
        (ideas = [
            'aslacak',
            'lacak',
            'mnlacak',
            'zxlacak',
            'wqcqweryuk',
            'back',
            'bacqweryuk',
            'bwqwsack',
        ]),
    ) == 50,
);
console.log(
    distinctNames(
        (ideas = ['aslacak', 'lacak', 'wqcqweryuk', 'back', 'bacqweryuk', 'bwqwsack']) == 36,
    ),
);
console.log(distinctNames((ideas = ['lacka', 'back'])));
console.log(distinctNames((ideas = ['lack', 'back'])));
console.log(distinctNames((ideas = ['coffee', 'cosqffee', 'donuts', 'time', 'toffee'])));
console.log(distinctNames((ideas = ['coffee', 'donuts', 'time', 'toffee'])));
/**
 * 2=> 2
 * 3=> 6
 * 4=> 12
 * 5=> 20
 * 6=> 30
 * 7=> 42
 * 8=> 56 (1-> 50)
 * 9=> 72 (1-> 50)
 */
