var eventualSafeNodes = function (graph) {
    const terminalNodes = (function () {
        const obj = {};
        const obj1 = {};

        for (let index = 0; index < graph.length; index++) {
            if (!obj1[index]) {
                obj1[index] = [];
            }
            for (const iterator of graph[index]) {
                obj1[index].push(iterator);
            }
        }
        for (const key in obj1) {
            if (!obj1[key].length) {
                obj[key] = true;
            }
        }
        return obj;
    })();
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

console.log(eventualSafeNodes((graph = [[], [0, 2, 3, 4], [3], [4], []]))); //[0, 1, 2, 3, 4];

console.log(
    eventualSafeNodes((graph = [[1, 2], [2, 3], [5], [0], [5], [], []]))
);

console.log(
    eventualSafeNodes((graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]))
);
