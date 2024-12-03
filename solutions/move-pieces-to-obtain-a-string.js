var canChange = function (start, target) {
    let lCnt = 0;
    let rCnt = 0;
    for (let index = 0; index < start.length; index++) {
        const element = start[index];
        if (element === 'L') {
            lCnt += 1;
        } else if (element === 'R') {
            rCnt += 1;
        }
    }
    let lCntTarget = 0;
    let rCntTarget = 0;
    for (let index = 0; index < target.length; index++) {
        const element = target[index];
        if (element === 'L') {
            lCntTarget += 1;
        } else if (element === 'R') {
            rCntTarget += 1;
        }
    }
    if (lCnt !== lCntTarget || rCnt !== rCntTarget) {
        return false;
    }
    let lCount = [];
    let rCount = [];
    for (let index = 0; index < start.length; index++) {
        const element = start[index];
        if (element === 'L') {
            lCount.push(index);
        } else if (element === 'R') {
            rCount.push(index);
        }
    }
    let lCountTarget = [];
    let rCountTarget = [];
    for (let index = 0; index < target.length; index++) {
        const element = target[index];
        if (element === 'L') {
            lCountTarget.push(index);
        } else if (element === 'R') {
            rCountTarget.push(index);
        }
    }
    let lCountIndex = 0;
    let rCountIndex = 0;
    let lCountTargetIndex = 0;
    let rCountTargetIndex = 0;
    while (lCountIndex < lCount.length && lCountTargetIndex < lCountTarget.length) {
        if (lCount[lCountIndex] < lCountTarget[lCountTargetIndex]) {
            return false;
        }
        lCountIndex++;
        lCountTargetIndex++;
    }
    while (rCountIndex < rCount.length && rCountTargetIndex < rCountTarget.length) {
        if (rCount[rCountIndex] > rCountTarget[rCountTargetIndex]) {
            return false;
        }
        rCountIndex++;
        rCountTargetIndex++;
    }

    let lPresent = '';
    let rPresent = '';
    for (let index = 0; index < start.length; index++) {
        const element = start[index];
        if (element === 'R') {
            rPresent = true;
        } else if (element === 'L' && rPresent) {
            lPresent = true;
            break;
        }
    }
    let lPresentTarget = '';
    let rPresentTarget = '';
    for (let index = 0; index < start.length; index++) {
        const element = start[index];
        if (element === 'R') {
            rPresentTarget = true;
        } else if (element === 'L' && rPresentTarget) {
            lPresentTarget = true;
            break;
        }
    }
    if (rPresent && lPresent && rPresentTarget && lPresentTarget) {
        return false;
    }
    return true;
};

console.log(canChange('_R', 'L_') == false);
console.log(canChange((start = 'R_L_'), (target = '__LR')) == false);
console.log(canChange((start = '_L__R__R_'), (target = 'L______RR')) === true);
console.log(canChange((start = '_R'), (target = 'R_')) == false);
