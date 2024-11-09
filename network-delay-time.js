var networkDelayTime = function (times, totalNodes, startNode) {
    const configCost = {};
    const nodeGraph = {};
    for (const [from, to, cost] of times) {
        if (!configCost[from]) {
            configCost[from] = {};
        }
        configCost[from][to] = cost;
    }

    function addCost(fromNode, prevCost = 0, alreadyEncountered = {}) {
        if (!alreadyEncountered[fromNode]) {
            alreadyEncountered[fromNode] = true;
            for (const key in configCost[fromNode]) {
                let cost = configCost[fromNode][key] + prevCost;
                if (!nodeGraph[key]) {
                    nodeGraph[key] = cost;
                } else {
                    if (nodeGraph[key] > cost) {
                        nodeGraph[key] = cost;
                        cost = nodeGraph[key];
                    }
                }
                addCost(key, cost, alreadyEncountered);
            }
        }
    }
    addCost(startNode);
    const totalNodeApproached = Object.values(nodeGraph).length;
    if (totalNodeApproached === totalNodes) {
        let output = -Infinity;
        for (const iterator in nodeGraph) {
            if (output < nodeGraph[iterator]) {
                output = nodeGraph[iterator];
            }
        }
        return output;
    }
    if (
        totalNodeApproached !== totalNodes ||
        totalNodeApproached !== totalNodes - 1
    ) {
        return -1;
    }
    let output = -Infinity;
    for (const iterator in nodeGraph) {
        if (output < nodeGraph[iterator]) {
            output = nodeGraph[iterator];
        }
    }
    return output;
};

console.log(
    networkDelayTime(
        [
            [1, 2, 1],
            [2, 1, 3]
        ],
        2,
        2
    ) === 3
);
console.log(networkDelayTime((times = [[1, 2, 1]]), (n = 2), (k = 1)) === 1);

console.log(networkDelayTime((times = [[1, 2, 1]]), (n = 2), (k = 2)) === -1);

console.log(
    networkDelayTime(
        (times = [
            [2, 1, 1],
            [2, 3, 1],
            [3, 4, 1]
        ]),
        (n = 4),
        (k = 2)
    ) === 2
);

console.log(
    networkDelayTime(
        (times = [
            [0, 1, 1],
            [0, 2, 4],
            [1, 4, 7],
            [1, 2, 4],
            [1, 3, 2],
            [2, 4, 5],
            [2, 3, 3],
            [4, 3, 4],
            [4, 5, 7],
            [3, 5, 6]
        ]),
        (n = 4),
        (k = 0)
    )
);
