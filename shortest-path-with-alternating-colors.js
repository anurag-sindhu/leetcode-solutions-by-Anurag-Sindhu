var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    const redConfig = (function () {
        const config = {};
        for (const [from, to] of redEdges) {
            if (!config[from]) {
                config[from] = {};
            }
            config[from][to] = true;
        }
        return config;
    })();

    const blueConfig = (function () {
        const config = {};
        for (const [from, to] of blueEdges) {
            if (!config[from]) {
                config[from] = {};
            }
            config[from][to] = true;
        }
        return config;
    })();
    const configMapper = { redConfig: redConfig, blueConfig: blueConfig };
    function doesPathLeadToDestination(
        destination,
        start = 0,
        path = 1,
        config,
        pathExplored = {}
    ) {
        if (!pathExplored[start]) {
            if (
                configMapper[config][start] &&
                configMapper[config][start][destination]
            ) {
                return path;
            }
            pathExplored[start] = true;
            for (const key in configMapper[config][start]) {
                return doesPathLeadToDestination(
                    destination,
                    key,
                    path + 1,
                    config === 'redConfig' ? 'blueConfig' : 'redConfig',
                    pathExplored
                );
            }
            return -1;
        }
    }
    const output = [0];
    for (let index = 1; index < n; index++) {
        const redConfigPathLength = doesPathLeadToDestination(
            index,
            (start = 0),
            (path = 1),
            'redConfig'
        );
        const blueConfigPathLength = doesPathLeadToDestination(
            index,
            (start = 0),
            (path = 1),
            'blueConfig'
        );
        if (redConfigPathLength === -1 && blueConfigPathLength === -1) {
            output.push(-1);
        } else if (redConfigPathLength === -1) {
            output.push(blueConfigPathLength);
        } else if (blueConfigPathLength === -1) {
            output.push(redConfigPathLength);
        } else if (redConfigPathLength === -1) {
            output.push(Math.min(redConfigPathLength, blueConfigPathLength));
        }
    }
    return output;
};

console.log(
    shortestAlternatingPaths(
        5,
        [
            [2, 0],
            [4, 3],
            [4, 4],
            [3, 0],
            [1, 4]
        ],
        [
            [2, 1],
            [4, 3],
            [3, 1],
            [3, 0],
            [1, 1],
            [2, 0],
            [0, 3],
            [3, 3],
            [2, 3]
        ]
    )
); //[0,-1,-1,1,-1]

console.log(
    shortestAlternatingPaths(
        5,
        [
            [3, 2],
            [4, 1],
            [1, 4],
            [2, 4]
        ],
        [
            [2, 3],
            [0, 4],
            [4, 3],
            [4, 4],
            [4, 0],
            [1, 0]
        ]
    )
);
console.log(
    shortestAlternatingPaths(
        (n = 3),
        (redEdges = [[0, 1]]),
        (blueEdges = [[1, 2]])
    )
);
console.log(
    shortestAlternatingPaths(
        (n = 3),
        (redEdges = [
            [0, 1],
            [1, 2]
        ]),
        (blueEdges = [])
    )
);
console.log(
    shortestAlternatingPaths(
        (n = 3),
        (redEdges = [[0, 1]]),
        (blueEdges = [[2, 1]])
    )
);
