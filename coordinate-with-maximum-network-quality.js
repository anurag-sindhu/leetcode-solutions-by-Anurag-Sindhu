var bestCoordinate = function (towers, radius) {
    let highestPowerTower = [0, 0];
    let highestPower = null;
    for (let mainIndex = 0; mainIndex < towers.length; mainIndex++) {
        const mainTowerXCoordinate = towers[mainIndex][0];
        const mainTowerYCoordinate = towers[mainIndex][1];
        const mainTowerStrength = towers[mainIndex][2];
        let power = mainTowerStrength;
        if (!mainTowerStrength) {
            continue;
        }
        let secondaryTowerXCoordinate = null;
        let secondaryTowerYCoordinate = null;
        let secondaryTowerStrength = null;
        for (let secondaryIndex = 0; secondaryIndex < towers.length; secondaryIndex++) {
            if (mainIndex === secondaryIndex) {
                continue;
            }
            secondaryTowerXCoordinate = towers[secondaryIndex][0];
            secondaryTowerYCoordinate = towers[secondaryIndex][1];
            secondaryTowerStrength = towers[secondaryIndex][2];
            const distance = Math.sqrt(
                Math.abs(mainTowerXCoordinate - secondaryTowerXCoordinate) +
                    Math.abs(mainTowerYCoordinate - secondaryTowerYCoordinate),
            );
            if (distance <= radius) {
                const temp = secondaryTowerStrength / (1 + distance);
                power += Math.floor(temp);
            }
        }
        if (highestPower <= power) {
            if (highestPower === power) {
                if (highestPowerTower[0] > mainTowerXCoordinate) {
                    highestPowerTower = [mainTowerXCoordinate, mainTowerYCoordinate];
                } else if (highestPowerTower[0] >= mainTowerXCoordinate) {
                    if (highestPowerTower[1] > mainTowerYCoordinate) {
                        highestPowerTower = [highestPowerTower[0], mainTowerYCoordinate];
                    }
                }
            } else {
                highestPowerTower = [mainTowerXCoordinate, mainTowerYCoordinate];
                highestPower = power;
            }
        }
    }
    return highestPowerTower;
};

let resp = null;

resp = bestCoordinate(
    [
        [0, 1, 2],
        [2, 1, 2],
        [1, 0, 2],
        [1, 2, 2],
    ],
    1,
);
console.log(resp[0] === 1 && resp[1] === 1);

resp = bestCoordinate((towers = [[42, 0, 0]]), (radius = 7));
console.log(resp[0] === 0 && resp[1] === 1);

resp = bestCoordinate(
    (towers = [
        [2, 1, 9],
        [0, 1, 9],
    ]),
    (radius = 2),
);
console.log(resp[0] === 0 && resp[1] === 1);

resp = bestCoordinate(
    (towers = [
        [1, 2, 13],
        [2, 1, 7],
        [0, 1, 9],
    ]),
    (radius = 2),
);
console.log(resp[0] === 1 && resp[1] === 2);

resp = bestCoordinate((towers = [[23, 11, 21]]), (radius = 9));
console.log(resp[0] === 23 && resp[1] === 11);

resp = bestCoordinate(
    (towers = [
        [1, 2, 5],
        [2, 1, 7],
        [3, 1, 9],
    ]),
    (radius = 2),
);
console.log(resp[0] === 2 && resp[1] === 1);
