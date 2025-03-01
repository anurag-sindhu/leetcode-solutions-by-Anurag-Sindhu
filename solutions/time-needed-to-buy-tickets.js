var timeRequiredToBuy = function (tickets, k) {
    let step = 0;
    while (true) {
        for (let index = 0; index < tickets.length; index++) {
            if (index == k && tickets[index] == 1) {
                return step + 1;
            } else {
                if (tickets[index] >= 1) {
                    tickets[index] -= 1;
                    step += 1;
                }
            }
        }
    }
};

console.log(timeRequiredToBuy((tickets = [1, 3, 4, 2, 1, 3]), (k = 3)));
console.log(timeRequiredToBuy((tickets = [2, 3, 2]), (k = 2)));
console.log(timeRequiredToBuy((tickets = [5, 1, 1, 1]), (k = 0)));
