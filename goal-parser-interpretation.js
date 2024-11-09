var interpret = function (command) {
    let str = '';
    for (let index = 0; index < command.length; index++) {
        if (command[index] === 'G') {
            str += 'G';
        } else if (command[index] === '(' && command[index + 1] === ')') {
            str += 'o';
            index += 1;
        } else if (
            command[index] === '(' &&
            command[index + 1] === 'a' &&
            command[index + 1 + 1] === 'l' &&
            command[index + 1 + 1 + 1] === ')'
        ) {
            str += 'al';
            index += 2;
        }
    }
    return str;
};

console.log(interpret('G()(al)') === 'Goal');
console.log(interpret('G()()()()(al)') === 'Gooooal');
console.log(interpret('(al)G(al)()()G') === 'alGalooG');
