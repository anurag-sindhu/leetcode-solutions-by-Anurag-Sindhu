var canReach1 = function (str, minJump, maxJump) {
    const memo = {};
    function canReachHelper(str, minJump, maxJump, index = 0) {
        if (memo[index] !== undefined) {
            return false;
        }
        if (index === str.length - 1) {
            return true;
        }
        const nextMinIndex = index + minJump;
        let nextMaxIndex = Math.min(index + maxJump, str.length - 1);
        for (let indexTemp = nextMaxIndex; indexTemp >= nextMinIndex; indexTemp--) {
            if (str[indexTemp] === '0') {
                const resp = canReachHelper(str, minJump, maxJump, indexTemp);
                if (resp) {
                    return true;
                }
            }
        }
        memo[index] = false;
        return false;
    }
    return canReachHelper(str, minJump, maxJump);
};

var canReach = function (str, minJump, maxJump) {
    const queue = [0];
    for (let index = 1; index < str.length; index++) {
        if (str[index] === '1') {
            continue;
        }
        while (queue.length && index - queue[0] > maxJump) {
            queue.shift();
        }
        if (queue.length === 0) {
            return false;
        }
        if (index - queue[0] < minJump) {
            continue;
        }
        queue.push(index);
        if (index === str.length - 1) {
            return true;
        }
    }
    return false;
};
console.log(canReach((s = '01'), (minJump = 1), (maxJump = 1)) === false);
console.log(canReach((s = '01101110'), (minJump = 2), (maxJump = 3)) === false);
console.log(canReach((s = '011010000100110101010000'), (minJump = 2), (maxJump = 3)) === true);
console.log(canReach((s = '011010'), (minJump = 2), (maxJump = 3)) === true);
