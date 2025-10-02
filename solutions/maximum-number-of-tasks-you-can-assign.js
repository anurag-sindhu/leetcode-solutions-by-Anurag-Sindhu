var maxTaskAssign = function (tasks, workers, pills, strength) {
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);
    const tasksBusted = {};
    const workerBusted = {};
    let taskIndex = tasks.length - 1;
    let workerIndex = workers.length - 1;
    while (tasks[taskIndex] !== undefined && workers[workerIndex] !== undefined) {
        if (tasks[taskIndex] <= workers[workerIndex]) {
            tasksBusted[taskIndex] = 1;
            workerBusted[workerIndex] = 1;
            workerIndex--;
        }
        taskIndex--;
    }
    taskIndex = tasks.length - 1;
    workerIndex = workers.length - 1;
    while (tasks[taskIndex] !== undefined && workers[workerIndex] !== undefined && pills) {
        while (tasksBusted[taskIndex]) {
            taskIndex -= 1;
        }
        while (workerBusted[workerIndex]) {
            workerIndex -= 1;
        }
        if (tasks[taskIndex] <= workers[workerIndex] + strength) {
            tasksBusted[taskIndex] = 1;
            workerBusted[workerIndex] = 1;
            workerIndex -= 1;
            pills--;
        }
        taskIndex -= 1;
    }
    return Object.keys(tasksBusted).length;
};

console.log(
    maxTaskAssign(
        (tasks = [5, 5, 8, 9, 9]),
        (workers = [1, 2, 4, 6, 6]),
        (pills = 1),
        (strength = 5),
    ) == 3,
);
console.log(
    maxTaskAssign((tasks = [1, 2, 3]), (workers = [0, 3, 3]), (pills = 1), (strength = 1)) == 3,
);
console.log(
    maxTaskAssign((tasks = [3, 2, 1]), (workers = [0, 3, 3]), (pills = 1), (strength = 1)) == 3,
);
console.log(
    maxTaskAssign((tasks = [5, 4]), (workers = [0, 0, 0]), (pills = 1), (strength = 5)) == 1,
);
console.log(
    maxTaskAssign(
        (tasks = [10, 15, 30]),
        (workers = [0, 10, 10, 10, 10]),
        (pills = 3),
        (strength = 10),
    ) == 2,
);
