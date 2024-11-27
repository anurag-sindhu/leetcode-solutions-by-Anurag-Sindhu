var removeDigit = function (number, digit) {
    const splittedNumber = number.split('');
    let num1 = '';
    let num2 = '';
    for (let index = 0; index < splittedNumber.length; index++) {
        if (splittedNumber[index] === digit) {
            num1 += number.substring(index + 1);
            break;
        } else {
            num1 += splittedNumber[index];
        }
    }
    for (let index = splittedNumber.length - 1; index >= 0; index--) {
        if (splittedNumber[index] === digit) {
            num2 = number.substring(0, index) + num2.split('').reverse().join('');
            break;
        } else {
            num2 += splittedNumber[index];
        }
    }

    if (num1.length > num2.length) {
        return num1;
    } else if (num1.length < num2.length) {
        return num2;
    } else if (num1 === num2) {
        return num2;
    }

    for (let index = 0; index < num1.length; index++) {
        if (Number(num1[index]) > Number(num2[index])) {
            return num1;
        } else if (Number(num1[index]) < Number(num2[index])) {
            return num2;
        }
    }
    return num1;
};

console.log(
    removeDigit(
        '7795478535679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878',
        '5',
    ) ===
        '779547853679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878',
);
console.log(removeDigit('83965', '8') === '3965');
console.log(removeDigit('133235', '3'));
