var eventualSafeNodes = function (graph) {
    const terminalNodes = (function () {
        const arr = [];

        for (let index = 0; index < graph.length; index++) {
            if (!graph[index].length) {
                arr.push(index);
            }
        }
        return arr;
    })();

    const config = {};
    for (let parentIndex = 0; parentIndex < graph.length; parentIndex++) {
        const fromNode = parentIndex;
        for (let index = 0; index < graph[parentIndex].length; index++) {
            const toNode = graph[parentIndex][index];
            if (!config[toNode]) {
                config[toNode] = { incoming: {}, outgoing: {} };
            }
            if (!config[fromNode]) {
                config[fromNode] = { incoming: {}, outgoing: {} };
            }
            config[toNode].incoming[fromNode] = true;
            config[fromNode].outgoing[toNode] = true;
        }
    }
    const output = [];
    for (let index = 0; index < graph.length; index++) {
        const internalNodes = graph[index];
        let isPossible = true;
        for (const iterator of internalNodes) {
            if (!terminalNodes[iterator]) {
                isPossible = false;
                break;
            }
        }
        if (isPossible) {
            output.push(index);
        }
    }
    return output;
};

console.log(eventualSafeNodes((graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []])));
console.log(eventualSafeNodes((graph = [[], [0, 2, 3, 4], [3], [4], []]))); //[0, 1, 2, 3, 4];
console.log(eventualSafeNodes((graph = [[1, 2], [2, 3], [5], [0], [5], [], []])));
