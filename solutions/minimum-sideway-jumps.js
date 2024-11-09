var minSideJumps = function (obstacles) {
    let sideJumps = 0;
    let currentLane = 2;
    for (let index = 0; index < obstacles.length - 1; index++) {
        if (obstacles[index + 1] === currentLane) {
            if (currentLane === 1) {
                console.log('object');
            } else if (currentLane === 2) {
                if (obstacles[index] === 1) {
                } else if (obstacles[index] === 2) {
                } else if (obstacles[index] === 3) {
                } else {
                }
                console.log('object');
            } else {
                console.log('object');
            }
        } else {
            continue;
        }
    }
    return sideJumps;
};

console.log(minSideJumps((obstacles = [0, 1, 2, 3, 0])));
