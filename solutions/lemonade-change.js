var lemonadeChange = function (bills) {
    let fiveDenominationsCount = 0;
    let tenDenominationsCount = 0;
    let twentyDenominationsCount = 0;
    for (const iterator of bills) {
        if (iterator === 5) {
            fiveDenominationsCount += 1;
        } else if (iterator === 10) {
            if (!fiveDenominationsCount) {
                return false;
            }
            fiveDenominationsCount -= 1;
            tenDenominationsCount += 1;
        } else {
            let require = 15;
            if (tenDenominationsCount) {
                tenDenominationsCount -= 1;
                require -= 10;
            }
            if (!fiveDenominationsCount) {
                return false;
            }
            if (require / 5 <= fiveDenominationsCount) {
                fiveDenominationsCount -= require / 5;
            } else {
                return false;
            }
            twentyDenominationsCount += 1;
        }
    }
    return true;
};
console.log(lemonadeChange((bills = [5, 5, 5, 10, 20])));
console.log(lemonadeChange((bills = [5, 5, 10, 10, 20])));
