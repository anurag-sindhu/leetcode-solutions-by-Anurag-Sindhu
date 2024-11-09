var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    if (arrivalTime + delayedTime < 24) {
        return arrivalTime + delayedTime
    } else if (arrivalTime + delayedTime === 0) {
        return arrivalTime + delayedTime
    } else {
        return (arrivalTime + delayedTime) - 24
    }
};

console.log(findDelayedArrivalTime(arrivalTime = 1, delayedTime = 24));
console.log(findDelayedArrivalTime(arrivalTime = 13, delayedTime = 11));
console.log(findDelayedArrivalTime(arrivalTime = 15, delayedTime = 5));