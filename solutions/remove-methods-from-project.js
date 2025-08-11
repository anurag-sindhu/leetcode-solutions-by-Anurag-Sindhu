var remainingMethods = function (n, k, invocations) {
    const suspicious = {};
    for (let index = 0; index < n; index++) {
        suspicious[index] = false;
    }
    const forwardMapping = (() => {
        const obj = {};
        for (const [from, to] of invocations) {
            if (obj[from] == undefined) {
                obj[from] = {};
            }
            obj[from][to] = true;
        }
        return obj;
    })();
    const reverseMapping = (() => {
        const obj = {};
        for (const [from, to] of invocations) {
            if (obj[to] == undefined) {
                obj[to] = {};
            }
            obj[to][from] = true;
        }
        return obj;
    })();
    const underSuspicious = (function () {
        let temp = forwardMapping[k];
        let keyInProgress = { k: true };
        suspicious[k] = true;
        function render(temp, keyInProgress) {
            if (!temp) {
                return;
            }
            for (const key in temp) {
                if (keyInProgress[key] != true) {
                    keyInProgress[key] = true;
                    suspicious[key] = true;
                    temp = forwardMapping[key];
                    render(temp, keyInProgress);
                }
            }
        }
        render(temp, keyInProgress);
    })();
    const isDismantle = (function () {
        for (const key in suspicious) {
            if (suspicious[key] == true) {
                for (const reverseMappingKey in reverseMapping[key]) {
                    if (suspicious[reverseMappingKey] == false) {
                        return true;
                    }
                }
            }
        }
        return false;
    })();
    const output = [];
    for (const key in suspicious) {
        if (isDismantle) {
            output.push(Number(key));
        } else {
            if (suspicious[key] == false) {
                output.push(Number(key));
            }
        }
    }
    return output;
};

console.log(
    remainingMethods(
        3,
        2,
        (invocations = [
            [1, 0],
            [2, 0],
        ]),
    ),
);
//[0,1,2]
console.log(remainingMethods((n = 2), (k = 0), (invocations = [])));
console.log(
    remainingMethods(
        (n = 3),
        (k = 2),
        (invocations = [
            [1, 2],
            [0, 1],
            [2, 0],
        ]),
    ),
);
console.log(
    remainingMethods(
        (n = 4),
        (k = 1),
        (invocations = [
            [1, 2],
            [0, 1],
            [3, 2],
        ]),
    ),
);
console.log(
    remainingMethods(
        (n = 5),
        (k = 0),
        (invocations = [
            [1, 2],
            [0, 2],
            [0, 1],
            [3, 4],
        ]),
    ),
);
