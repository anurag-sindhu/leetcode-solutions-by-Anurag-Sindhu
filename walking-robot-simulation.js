var robotSim = function (commands, obstacles) {
    const xAxisObstacles = (function () {
        const config = {};
        for (const [x, y] of obstacles) {
            if (x === 0 && y === 0) {
                continue;
            }
            if (!config[x]) {
                config[x] = {};
            }
            config[x][y] = true;
        }
        return config;
    })();
    const yAxisObstacles = (function () {
        const config = {};
        for (const [x, y] of obstacles) {
            if (x === 0 && y === 0) {
                continue;
            }

            if (!config[y]) {
                config[y] = {};
            }
            config[y][x] = true;
        }
        return config;
    })();
    let movingDirection = 'N';
    let xAxis = 0;
    let yAxis = 0;
    let farthestDistance = Math.pow(xAxis, 2) + Math.pow(yAxis, 2);
    const movingMapping = {
        '-1': {
            E: 'S',
            W: 'N',
            N: 'E',
            S: 'W',
        },
        '-2': {
            E: 'N',
            W: 'S',
            N: 'W',
            S: 'E',
        },
    };
    for (const iterator of commands) {
        if (iterator === -1 || iterator === -2) {
            movingDirection = movingMapping[`${iterator}`][movingDirection];
        } else {
            if (movingDirection === 'N') {
                // vertical movement
                if (xAxisObstacles[xAxis]) {
                    let index = yAxis;
                    let steps = 0;
                    while (steps < iterator) {
                        if (xAxisObstacles[xAxis][index]) {
                            index -= 1;
                            break;
                        }
                        steps++;
                        index++;
                    }
                    yAxis = index;
                } else {
                    yAxis += iterator;
                }
            } else if (movingDirection === 'S') {
                // vertical movement
                if (xAxisObstacles[xAxis]) {
                    let index = yAxis;
                    let steps = 0;
                    while (iterator > steps) {
                        if (xAxisObstacles[xAxis][index]) {
                            index += 1;
                            break;
                        }
                        index -= 1;
                        steps++;
                    }
                    yAxis = index;
                } else {
                    yAxis -= iterator;
                }
            } else if (movingDirection === 'E') {
                // horizontal movement
                if (yAxisObstacles[yAxis]) {
                    let steps = 0;
                    let index = xAxis;
                    while (iterator > steps) {
                        if (yAxisObstacles[yAxis][index]) {
                            index -= 1;
                            break;
                        }
                        steps++;
                        index++;
                    }
                    xAxis = index;
                } else {
                    xAxis += iterator;
                }
            } else {
                // horizontal movement
                if (yAxisObstacles[yAxis]) {
                    let index = xAxis;
                    let steps = 0;
                    while (iterator > steps) {
                        if (yAxisObstacles[yAxis][index]) {
                            index += 1;
                            break;
                        }
                        steps++;
                        index -= 1;
                    }
                    xAxis = index;
                } else {
                    xAxis -= iterator;
                }
            }
        }
        farthestDistance = Math.max(farthestDistance, Math.pow(xAxis, 2) + Math.pow(yAxis, 2));
    }
    return farthestDistance;
};

console.log(
    robotSim(
        [-2, -1, -2, 3, 7],
        [
            [1, -3],
            [2, -3],
            [4, 0],
            [-2, 5],
            [-5, 2],
            [0, 0],
            [4, -4],
            [-2, -5],
            [-1, -2],
            [0, 2],
        ],
    ) == 100,
);

console.log(
    robotSim(
        [1, 1, 3, 4, 3],
        [
            ([-1, 5],
            [-4, -4],
            [-3, 3],
            [3, 0],
            [2, 5],
            [-4, 4],
            [-3, 1],
            [-2, -4],
            [-1, -4],
            [0, -3]),
        ],
    ) == 144,
);
console.log(
    robotSim(
        [-2, 8, 3, 7, -1],
        [
            [-4, -1],
            [1, -1],
            [1, 4],
            [5, 0],
            [4, 5],
            [-2, -1],
            [2, -5],
            [5, 1],
            [-3, -1],
            [5, -3],
        ],
    ) == 324,
);
console.log(robotSim((commands = [6, -1, -1, 6]), (obstacles = [])) == 36);
console.log(robotSim((commands = [4, -1, 4, -2, 4]), (obstacles = [[2, 4]])) == 65);
console.log(robotSim((commands = [4, -1, 3]), (obstacles = [])) == 25);
