var robotSim = function (commands, obstacles) {
    const xAxisObstacles = (function () {
        const config = {};
        for (const [x, y] of obstacles) {
            if (config[x] == undefined) {
                config[x] = {};
            }
            config[x][y] = true;
        }
        return config;
    })();

    const yAxisObstacles = (function () {
        const config = {};
        for (const [x, y] of obstacles) {
            if (config[y] == undefined) {
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
            S: 'W',
            W: 'N',
            N: 'E',
        },
        '-2': {
            E: 'N',
            W: 'S',
            N: 'W',
            S: 'E',
        },
    };
    for (let iterator of commands) {
        if (iterator === -1 || iterator === -2) {
            movingDirection = movingMapping[`${iterator}`][movingDirection];
        } else {
            if (movingDirection === 'N') {
                // vertical movement
                if (xAxisObstacles[xAxis] != undefined) {
                    while (iterator--) {
                        if (xAxisObstacles[xAxis][yAxis + 1] != undefined) {
                            break;
                        }
                        yAxis++;
                    }
                } else {
                    yAxis += iterator;
                }
            } else if (movingDirection === 'S') {
                // vertical movement
                if (xAxisObstacles[xAxis] != undefined) {
                    while (iterator--) {
                        if (xAxisObstacles[xAxis][yAxis - 1] != undefined) {
                            break;
                        }
                        yAxis -= 1;
                    }
                } else {
                    yAxis -= iterator;
                }
            } else if (movingDirection === 'E') {
                // horizontal movement
                if (yAxisObstacles[yAxis] != undefined) {
                    while (iterator--) {
                        if (yAxisObstacles[yAxis][xAxis + 1] != undefined) {
                            break;
                        }
                        xAxis++;
                    }
                } else {
                    xAxis += iterator;
                }
            } else {
                // horizontal movement
                if (yAxisObstacles[yAxis] != undefined) {
                    while (iterator--) {
                        if (yAxisObstacles[yAxis][xAxis - 1] != undefined) {
                            break;
                        }
                        xAxis -= 1;
                    }
                } else {
                    xAxis -= iterator;
                }
            }
            farthestDistance = Math.max(farthestDistance, Math.pow(xAxis, 2) + Math.pow(yAxis, 2));
        }
    }
    return farthestDistance;
};

console.log(
    robotSim(
        (commands = [-2, -1, 8, 9, 6]),
        (obstacles = [
            [-1, 3],
            [0, 1],
            [-1, 5],
            [-2, -4],
            [5, 4],
            [-2, -3],
            [5, -1],
            [1, -1],
            [5, 5],
            [5, 2],
        ]),
    ) == 0,
);
console.log(
    robotSim(
        (commands = [
            1, 2, -2, 5, -1, -2, -1, 8, 3, -1, 9, 4, -2, 3, 2, 4, 3, 9, 2, -1, -1, -2, 1, 3, -2, 4,
            1, 4, -1, 1, 9, -1, -2, 5, -1, 5, 5, -2, 6, 6, 7, 7, 2, 8, 9, -1, 7, 4, 6, 9, 9, 9, -1,
            5, 1, 3, 3, -1, 5, 9, 7, 4, 8, -1, -2, 1, 3, 2, 9, 3, -1, -2, 8, 8, 7, 5, -2, 6, 8, 4,
            6, 2, 7, 2, -1, 7, -2, 3, 3, 2, -2, 6, 9, 8, 1, -2, -1, 1, 4, 7,
        ]),
        (obstacles = [
            [-57, -58],
            [-72, 91],
            [-55, 35],
            [-20, 29],
            [51, 70],
            [-61, 88],
            [-62, 99],
            [52, 17],
            [-75, -32],
            [91, -22],
            [54, 33],
            [-45, -59],
            [47, -48],
            [53, -98],
            [-91, 83],
            [81, 12],
            [-34, -90],
            [-79, -82],
            [-15, -86],
            [-24, 66],
            [-35, 35],
            [3, 31],
            [87, 93],
            [2, -19],
            [87, -93],
            [24, -10],
            [84, -53],
            [86, 87],
            [-88, -18],
            [-51, 89],
            [96, 66],
            [-77, -94],
            [-39, -1],
            [89, 51],
            [-23, -72],
            [27, 24],
            [53, -80],
            [52, -33],
            [32, 4],
            [78, -55],
            [-25, 18],
            [-23, 47],
            [79, -5],
            [-23, -22],
            [14, -25],
            [-11, 69],
            [63, 36],
            [35, -99],
            [-24, 82],
            [-29, -98],
            [-50, -70],
            [72, 95],
            [80, 80],
            [-68, -40],
            [65, 70],
            [-92, 78],
            [-45, -63],
            [1, 34],
            [81, 50],
            [14, 91],
            [-77, -54],
            [13, -88],
            [24, 37],
            [-12, 59],
            [-48, -62],
            [57, -22],
            [-8, 85],
            [48, 71],
            [12, 1],
            [-20, 36],
            [-32, -14],
            [39, 46],
            [-41, 75],
            [13, -23],
            [98, 10],
            [-88, 64],
            [50, 37],
            [-95, -32],
            [46, -91],
            [10, 79],
            [-11, 43],
            [-94, 98],
            [79, 42],
            [51, 71],
            [4, -30],
            [2, 74],
            [4, 10],
            [61, 98],
            [57, 98],
            [46, 43],
            [-16, 72],
            [53, -69],
            [54, -96],
            [22, 0],
            [-7, 92],
            [-69, 80],
            [68, -73],
            [-24, -92],
            [-21, 82],
            [32, -1],
            [-6, 16],
            [15, -29],
            [70, -66],
            [-85, 80],
            [50, -3],
            [6, 13],
            [-30, -98],
            [-30, 59],
            [-67, 40],
            [17, 72],
            [79, 82],
            [89, -100],
            [2, 79],
            [-95, -46],
            [17, 68],
            [-46, 81],
            [-5, -57],
            [7, 58],
            [-42, 68],
            [19, -95],
            [-17, -76],
            [81, -86],
            [79, 78],
            [-82, -67],
            [6, 0],
            [35, -16],
            [98, 83],
            [-81, 100],
            [-11, 46],
            [-21, -38],
            [-30, -41],
            [86, 18],
            [-68, 6],
            [80, 75],
            [-96, -44],
            [-19, 66],
            [21, 84],
            [-56, -64],
            [39, -15],
            [0, 45],
            [-81, -54],
            [-66, -93],
            [-4, 2],
            [-42, -67],
            [-15, -33],
            [1, -32],
            [-74, -24],
            [7, 18],
            [-62, 84],
            [19, 61],
            [39, 79],
            [60, -98],
            [-76, 45],
            [58, -98],
            [33, 26],
            [-74, -95],
            [22, 30],
            [-68, -62],
            [-59, 4],
            [-62, 35],
            [-78, 80],
            [-82, 54],
            [-42, 81],
            [56, -15],
            [32, -19],
            [34, 93],
            [57, -100],
            [-1, -87],
            [68, -26],
            [18, 86],
            [-55, -19],
            [-68, -99],
            [-9, 47],
            [24, 94],
            [92, 97],
            [5, 67],
            [97, -71],
            [63, -57],
            [-52, -14],
            [-86, -78],
            [-17, 92],
            [-61, -83],
            [-84, -10],
            [20, 13],
            [-68, -47],
            [7, 28],
            [66, 89],
            [-41, -17],
            [-14, -46],
            [-72, -91],
            [4, 52],
            [-17, -59],
            [-85, -46],
            [-94, -23],
            [-48, -3],
            [-64, -37],
            [2, 26],
            [76, 88],
            [-8, -46],
            [-19, -68],
        ]),
    ) == 5140,
);
console.log(robotSim((commands = [4, -1, 4, -2, 4]), (obstacles = [[2, 4]])) == 65);
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
console.log(robotSim((commands = [4, -1, 3]), (obstacles = [])) == 25);

console.log(
    robotSim(
        [-2, -1, -2, 3, 7],
        [
            [1, -3],
            [2, -3],
            [4, 0],
            [-2, 5],
            [-5, 2],
            [4, -4],
            [-2, -5],
            [-1, -2],
            [0, 2],
        ],
    ) == 100,
);

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
