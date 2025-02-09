var flipLights = function (n, presses) {
    if (presses == 0) {
        return 1;
    }
    if (n >= 3) {
        if (presses === 1) {
            return 4;
        } else if (presses === 2) {
            return 7;
        }
        return 8;
    }
    if (n === 1) {
        return 2;
    }
    if (n === 2) {
        if (presses === 1) {
            return 3;
        }
        return 4;
    }
};
console.log(bulbSwitch(8));
console.log(bulbSwitch(9));
console.log(bulbSwitch(10));
console.log(bulbSwitch(2));
console.log(bulbSwitch(3));
console.log(bulbSwitch(4));
console.log(bulbSwitch(5));
console.log(bulbSwitch(6));
console.log(bulbSwitch(7));
console.log(bulbSwitch(3));
console.log(bulbSwitch(4));
