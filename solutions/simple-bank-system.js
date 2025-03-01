const { areTwoArrayEqual } = require('../javascript/compare-two-array');

var Bank = function (balance) {
    this.config = {};
    for (let index = 0; index < balance.length; index++) {
        if (this.config[index + 1] == undefined) {
            this.config[index + 1] = 0;
        }
        this.config[index + 1] = balance[index];
    }
    // for (let parentIndex = 0; parentIndex < balance.length; parentIndex++) {
    //     for (let index = 0; index < balance[parentIndex].length; index++) {
    //         if (this.config[index + 1] == undefined) {
    //             this.config[index + 1] += 0;
    //         }
    //         this.config[index + 1] = balance[parentIndex][index];
    //     }
    // }
    return null;
};

Bank.prototype.transfer = function (account1, account2, money) {
    if (this.config[account1] == undefined) {
        return false;
    }
    if (this.config[account2] == undefined) {
        return false;
    }
    if (this.config[account1] >= money) {
        this.config[account1] -= money;
        this.config[account2] += money;
        return true;
    }
    return false;
};

Bank.prototype.deposit = function (account, money) {
    if (this.config[account] == undefined) {
        return false;
    }
    this.config[account] += money;
    return true;
};

Bank.prototype.withdraw = function (account, money) {
    console.log(JSON.stringify(this.config));
    if (this.config[account] == undefined) {
        return false;
    }
    if (this.config[account] >= money) {
        this.config[account] -= money;
        return true;
    }
    return false;
};

var obj;
let operations;
let output;
let values;

output = [null];
values = [[[10, 100, 20, 50, 30]], [3, 10], [5, 1, 20], [5, 20], [3, 4, 15], [10, 50]];
obj = new Bank(values[0]);
operations = ['Bank', 'withdraw', 'transfer', 'deposit', 'transfer', 'withdraw'];
for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

areTwoArrayEqual([null, true, true, true, false, false], output);
console.log('object');
