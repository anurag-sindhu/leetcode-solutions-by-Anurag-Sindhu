var furthestDistanceFromOrigin = function (moves) {
    let lCount = 0;
    let rCount = 0;
    let spaceCount = 0;
    for (let index = 0; index < moves.length; index++) {
        if (moves[index] === 'L') {
            lCount++;
        } else if (moves[index] === 'R') {
            rCount++;
        } else {
            spaceCount++;
        }
    }
    return spaceCount + Math.abs(lCount - rCount);
};
