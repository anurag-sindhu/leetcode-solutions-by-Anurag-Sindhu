var canCompleteCircuit = function (gas, cost) {
    let index = 0;
    let startIndex = 0;
    let count = 0;
    let isStarting = true;
    let netGas = 0;
    // Is route Possible
    for (let index = 0; index < gas.length; index++) {
        if (!isStarting) {
            netGas -= cost[index - 1];
        }
        netGas += gas[index];
        isStarting = false;
    }
    if (!(netGas - cost[gas.length - 1] >= 0)) {
        return -1;
    }

    // Is route Possible
    isStarting = true;
    netGas = 0;
    while (count < gas.length) {
        if (!isStarting) {
            netGas -= cost[(index - 1) % gas.length];
        }
        index = index % gas.length;
        if (netGas < 0) {
            //Resetting to the next possibility
            while (gas[index] < cost[index]) {
                index++;
            }
            netGas = 0;
            count = 0;
            startIndex = index;
        }
        netGas += gas[index];
        isStarting = false;
        count++;
        index++;
    }
    return startIndex;
};

console.log(canCompleteCircuit((gas = [3, 2, 1, 0]), (cost = [1, 2, 2, 1])) === 0);
console.log(canCompleteCircuit((gas = [2, 1, 0, 1, 4]), (cost = [3, 2, 2, 2, 3])) === -1);
console.log(canCompleteCircuit((gas = [7, 1, 0, 11, 5]), (cost = [5, 9, 1, 2, 5])) === 3);
console.log(canCompleteCircuit((gas = [0, 2, 1, 3]), (cost = [1, 2, 2, 1])) === 3);
console.log(canCompleteCircuit((gas = [1, 2, 3, 4, 5]), (cost = [3, 4, 5, 1, 2])) === 3);
console.log(canCompleteCircuit((gas = [2, 3, 4]), (cost = [3, 4, 3])) === -1);
console.log(canCompleteCircuit((gas = [1, 2, 1, 0]), (cost = [1, 2, 2, 1])) === -1);
