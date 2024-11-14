const numberOfTasks = 20;
const currentPromises = [];
let successCount = 0;

const taskList = [...Array(numberOfTasks)].map(() =>
  [...Array(~~(Math.random() * 10 + 3))]
    .map(() => String.fromCharCode(Math.random() * (123 - 97) + 97))
    .join('')
);

var doTask = (taskName, currentConcurrencyTaskId) => {
  var begin = Date.now();
  return new Promise(function (resolve, reject) {
    const sleepTime = Math.random() * 5000;
    setTimeout(function () {
      var end = Date.now();
      var timeSpent = end - begin + 'ms';
      console.log('\x1b[36m', '[TASK] FINISHED: ' + taskName + ' in ' + timeSpent, '\x1b[0m');
      resolve(currentConcurrencyTaskId);
    }, sleepTime);
  });
};

const concurrencyMax = true ? 4 : 5;
function manageAndPushConcurrency() {
  return new Promise((resolve, reject) => {
    while (currentPromises.length < concurrencyMax) {
      const successHandler = function (currentConcurrencyTaskId) {
        console.log(`[EXE] Concurrency : ${currentConcurrencyTaskId} of ${concurrencyMax}`);
        console.log(`[EXE] Task Count : ${successCount++} of ${numberOfTasks}`);
        if (!taskList.length) {
          return resolve();
        } else {
          doTask(taskList.shift(), currentConcurrencyTaskId).then(successHandler);
        }
      };
      currentPromises.push(doTask(taskList.shift(), currentPromises.length).then(successHandler));
    }
  });
}

async function execute() {
  console.log('[init] Concurrency Algo Testing...');
  console.log('[init] Tasks to process: ', taskList.length);
  console.log('[init] Task list: ' + taskList);
  console.log('[init] Maximum Concurrency: ', concurrencyMax, '\n');
  await manageAndPushConcurrency(concurrencyMax);
  await Promise.all(currentPromises);
}

execute();
