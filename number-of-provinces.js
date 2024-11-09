var findCircleNum = function (isConnected) {
    const config = {};
    let firstKey = null;
    for (let index = 0; index < isConnected.length; index++) {
        for (
            let childIndex = 0;
            childIndex < isConnected[index].length;
            childIndex++
        ) {
            if (index !== childIndex && isConnected[index][childIndex]) {
                if (!config[index]) {
                    if (firstKey === null) {
                        firstKey = index;
                    }
                    config[index] = [];
                }
                config[index].push(childIndex);
            }
        }
    }

    let count = 0;
    const encounteredKeys = {};
    function explore(key) {
        if (encounteredKeys[key]) {
            return;
        }
        encounteredKeys[key] = true;
        if (config[key] && config[key].length) {
            for (const key1 of config[key]) {
                explore(key1);
            }
        }
    }

    for (let index = 0; index < isConnected.length; index++) {
        if (!encounteredKeys[index]) {
            count++;
            explore(index);
        }
    }

    return count;
};

console.log(
    findCircleNum(
        (isConnected = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1]
        ])
    ) === 2
);
console.log(
    findCircleNum([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1]
    ]) === 1
);

console.log(
    findCircleNum(
        (isConnected = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ])
    ) === 3
);
