var canBeValid = function (str, locked) {
    if (!str.length) {
        return true;
    }
    if (str.length % 2 !== 0) {
        return false;
    }
    const lockedConfig = (function () {
        const config = {};
        for (let index = 0; index < locked.length; index++) {
            if (locked[index] === '0') {
                config[index] = true;
            }
        }
        return config;
    })();
    let g = 0;
    let openParenthesis = 0;
    let closeParenthesis = 0;
    for (let index = 0; index < str.length; index++) {}

    return;
};
console.log(canBeValid((s = '))()))'), (locked = '010100')));
console.log(canBeValid((s = '()()'), (locked = '0000')));
console.log(canBeValid((s = ')'), (locked = '0')));
