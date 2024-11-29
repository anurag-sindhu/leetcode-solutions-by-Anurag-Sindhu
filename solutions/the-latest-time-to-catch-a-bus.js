var latestTimeCatchTheBus = function (buses, passengers, capacity) {
    buses.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);
    const passengersObj = (function () {
        const config = {};
        for (const element of passengers) {
            config[element] = true;
        }
        return config;
    })();
    //let all passengers go till last bus
    let passengersGoneTillIndex = null;
    for (let index = 0; index < buses.length - 1; index++) {
        const busLeavingTime = buses[index];
        let totalMembersInCurrentBus = 0;
        while (
            totalMembersInCurrentBus < capacity &&
            passengers[passengersGoneTillIndex || 0] <= busLeavingTime
        ) {
            if (passengersGoneTillIndex === null) {
                passengersGoneTillIndex = 0;
            }
            passengersGoneTillIndex += 1;
            totalMembersInCurrentBus++;
        }
    }
    const leavingTimeOfTheLastBus = buses[buses.length - 1];
    if (passengersGoneTillIndex === null) {
        let totalMembersInCurrentBus = 0;
        let max = -Infinity;
        for (let index = 1; index <= leavingTimeOfTheLastBus; index++) {
            if (totalMembersInCurrentBus >= capacity) {
                break;
            }
            if (passengersObj[index]) {
                totalMembersInCurrentBus += 1;
            }
            if (!passengersObj[index]) {
                max = Math.max(max, index);
            }
        }
        return max;
    } else {
        const lastPassengerWent = passengers[passengersGoneTillIndex - 1];
        let totalMembersInCurrentBus = 0;
        while (
            totalMembersInCurrentBus < capacity &&
            passengers[passengersGoneTillIndex] <= leavingTimeOfTheLastBus
        ) {
            passengersGoneTillIndex += 1;
            totalMembersInCurrentBus++;
        }
        let lastPossiblePassengerWhoCanStillGo = passengers[passengersGoneTillIndex - 1] - 1;
        if (passengers[passengersGoneTillIndex] === undefined) {
            lastPossiblePassengerWhoCanStillGo = leavingTimeOfTheLastBus;
        }
        for (let index = lastPossiblePassengerWhoCanStillGo; index > lastPassengerWent; index--) {
            if (!passengersObj[index]) {
                return index;
            }
        }
    }
    return;
};

console.log(latestTimeCatchTheBus([10, 20], [2, 15], 3) == 20);
console.log(
    latestTimeCatchTheBus(
        (buses = [10, 20, 30]),
        (passengers = [4, 11, 13, 19, 21, 25, 26]),
        (capacity = 2),
    ) === 20,
);
console.log(latestTimeCatchTheBus([2, 4], [3, 4], 2) == 2);
console.log(latestTimeCatchTheBus([3], [2], 1) == 1);
console.log(latestTimeCatchTheBus([3], [2, 3], 2) == 1);
console.log(latestTimeCatchTheBus([3], [2, 4], 2) == 3);
console.log(
    latestTimeCatchTheBus((buses = [10, 20]), (passengers = [2, 17, 18, 19]), (capacity = 2)) ===
        16,
);
/*
10 20 30

*/
/*
10 20 
2,17,18,19
*/
