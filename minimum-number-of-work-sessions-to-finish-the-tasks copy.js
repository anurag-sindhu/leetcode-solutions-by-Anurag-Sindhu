var minSessions = function (tasks, sessionTime) {
    tasks.sort((a, b) => a - b);
    let session = 0;
    let selectedIndex = tasks.length - 1;
    let compound = 0;
    let hasNoElementLeftOnce = 0;
    while (true) {
        while (tasks[selectedIndex] === undefined) {
            if (selectedIndex < 0) {
                hasNoElementLeftOnce += 1;
                break;
            }
            selectedIndex--;
        }
        if (hasNoElementLeftOnce > 1) {
            break;
        }
        if (hasNoElementLeftOnce === 1 && selectedIndex >= 0) {
            hasNoElementLeftOnce = 0;
        }
        if (compound < sessionTime) {
            if (compound + tasks[selectedIndex] <= sessionTime) {
                compound += tasks[selectedIndex];
                tasks[selectedIndex] = undefined;
            }
        }
        if (compound >= sessionTime) {
            session += 1;
            compound = 0;
            selectedIndex = tasks.length - 1;
        } else {
            selectedIndex--;
            if (selectedIndex < 0 && compound > 0) {
                session += 1;
                compound = 0;
                selectedIndex = tasks.length - 1;
            }
        }
    }
    if (compound !== 0) {
        session += 1;
    }
    return session;
};

console.log(minSessions([2,3,3,4,4,4,5,6,7,10],
12) === 4);
console.log(minSessions([3, 6, 5, 5, 10, 7], 10) === 4);
console.log(minSessions([5, 7, 8, 6], 12) === 3);
console.log(minSessions([1, 5, 7, 10, 3, 8, 4, 2, 6, 2], 10) === 5);
console.log(minSessions((tasks = [3, 1, 3, 1, 1]), (sessionTime = 8)) === 2);
console.log(minSessions((tasks = [1, 2, 3, 4, 5]), (sessionTime = 15)) === 1);
console.log(minSessions((tasks = [1, 2, 3]), (sessionTime = 3)) === 2);
