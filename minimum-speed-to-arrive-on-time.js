function compareStrings(numStr1, numStr2) {
    numStr1 = numStr1.replace(/^0+/, '');
    numStr2 = numStr2.replace(/^0+/, '');

    if (numStr1.length > numStr2.length) return 1;
    if (numStr1.length < numStr2.length) return -1;
    return numStr1.localeCompare(numStr2);
}

function divideStrings(dividendStr, divisorStr) {
    if (divisorStr === '0') {
        throw new Error('Division by zero');
    }

    // Handle the case where the dividend is smaller than the divisor
    if (compareStrings(dividendStr, divisorStr) < 0) {
        return '0';
    }

    let result = [];
    let current = '';

    for (let i = 0; i < dividendStr.length; i++) {
        current += dividendStr[i];

        let count = 0;
        while (compareStrings(current, divisorStr) >= 0) {
            current = subtractStrings(current, divisorStr);
            count++;
        }

        result.push(count);
    }

    return result.join('').replace(/^0+/, '') || '0';
}

function addStrings(numStr1, numStr2) {
    let carry = 0;
    let result = [];

    while (numStr1.length < numStr2.length) numStr1 = '0' + numStr1;
    while (numStr2.length < numStr1.length) numStr2 = '0' + numStr2;

    for (let i = numStr1.length - 1; i >= 0; i--) {
        let sum = parseInt(numStr1[i]) + parseInt(numStr2[i]) + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
    }

    if (carry) result.unshift(carry);

    return result.join('');
}

function subtractStrings(numStr1, numStr2) {
    let borrow = 0;
    let result = [];

    while (numStr1.length < numStr2.length) numStr1 = '0' + numStr1;
    while (numStr2.length < numStr1.length) numStr2 = '0' + numStr2;

    for (let i = numStr1.length - 1; i >= 0; i--) {
        let diff = parseInt(numStr1[i]) - parseInt(numStr2[i]) - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result.unshift(diff);
    }

    while (result[0] === 0 && result.length > 1) {
        result.shift();
    }

    return result.join('');
}

var minSpeedOnTime = function (dist, hour, maxSpeed = 1000000000) {
    let halfMaxSpeed = Math.ceil(maxSpeed / 2);
    let hourTaken = 0;
    let hourTakenAtHalfMaxSpeed = 0;
    for (let index = 0; index < dist.length; index++) {
        const temp = divideStrings(dist[index], maxSpeed);
        hourTaken += index !== dist.length - 1 ? Math.ceil(temp) : temp;
        if (hourTaken > hour) {
            hourTaken = -1;
            break;
        }
    }

    for (let index = 0; index < dist.length; index++) {
        const temp = dist[index] / halfMaxSpeed;
        hourTakenAtHalfMaxSpeed += index !== dist.length - 1 ? Math.ceil(temp) : temp;
        if (hourTakenAtHalfMaxSpeed > hour) {
            hourTakenAtHalfMaxSpeed = -1;
            break;
        }
    }
    return minSpeedOnTime(dist, hour, maxSpeed, maxSpeed);
};

console.log(minSpeedOnTime([1, 1, 100000], 2.01));
console.log(minSpeedOnTime((dist = [1, 3, 2]), (hour = 2.7)));
console.log(minSpeedOnTime((dist = [1, 3, 2]), (hour = 6)));
console.log(minSpeedOnTime((dist = [1, 3, 2]), (hour = 1.9)));
