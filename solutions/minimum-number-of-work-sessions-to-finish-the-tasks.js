var minSessions = function (tasks, sessionTime) {
    const n = tasks.length;
    tasks.sort((a, b) => b - a); // Sort tasks in descending order
    const sessions = [];
    const result = [n];

    const dfs = (index) => {
        if (sessions.length > result[0]) {
            return;
        }
        if (index === n) {
            result[0] = sessions.length;
            return;
        }
        for (let i = 0; i < sessions.length; i++) {
            if (sessions[i] + tasks[index] <= sessionTime) {
                sessions[i] += tasks[index];
                dfs(index + 1);
                sessions[i] -= tasks[index];
            }
        }
        sessions.push(tasks[index]);
        dfs(index + 1);
        sessions.pop();
    };

    dfs(0);
    return result[0];
};

console.log(minSessions([2, 3, 3, 4, 4, 4, 5, 6], 12) === 3);
console.log(minSessions([5, 7, 8, 6], 12) === 3);
console.log(minSessions([5, 7, 6], 12) === 2);
console.log(minSessions([3, 6, 5, 5, 7], 10) === 3);
console.log(minSessions([3, 6, 5, 5, 10, 7], 10) === 3);
console.log(minSessions([2, 3, 3, 4, 4, 4, 5], 12) === 3);
console.log(minSessions([1, 5, 7, 10, 3, 8, 4, 2, 6, 2], 10) === 5);
console.log(minSessions((tasks = [3, 1, 3, 1, 1]), (sessionTime = 8)) === 2);
console.log(minSessions((tasks = [1, 2, 3, 4, 5]), (sessionTime = 15)) === 1);
console.log(minSessions((tasks = [1, 2, 3]), (sessionTime = 3)) === 2);
