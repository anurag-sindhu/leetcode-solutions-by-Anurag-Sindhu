var isReachableAtTime = function (sx, sy, fx, fy, t) {
    const absX = Math.abs(sx - fx);
    const absY = Math.abs(sy - fy);
    if (sx == fx && sy === fy) {
        if (t === 1) {
            return false;
        }
        return true;
    }
    if (!absX) {
        return absY <= t;
    }
    if (!absY) {
        return absX <= t;
    }
    if (sx == sy && fx === fy) {
        return absX <= t;
    }
    if (absX > absY) {
        return absX <= t;
    } else {
        return absY <= t;
    }
};

console.log(isReachableAtTime(1, 2, 1, 2, 0) === true);
console.log(isReachableAtTime(1, 2, 1, 2, 1) === false);
console.log(isReachableAtTime(1, 1, 2, 3, 2) === true);
console.log(isReachableAtTime(1, 1, 2, 2, 1) === true);
console.log(isReachableAtTime((sx = 2), (sy = 4), (fx = 7), (fy = 7), (t = 6)) === true);
console.log(isReachableAtTime((sx = 3), (sy = 1), (fx = 7), (fy = 3), (t = 3)) === false);
console.log(isReachableAtTime(1, 1, 1, 3, 2) === true);
