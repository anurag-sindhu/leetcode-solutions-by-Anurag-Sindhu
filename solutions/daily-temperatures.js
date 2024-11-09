var dailyTemperatures = function (temperatures) {
  const store = [temperatures.length - 1];
  const output = [0];
  for (let index = temperatures.length - 2; index >= 0; index--) {
    if (temperatures[index] < temperatures[index + 1]) {
      output.push(1);
    } else {
      while (store.length && !(temperatures[index] < temperatures[store[store.length - 1]])) {
        store.pop();
      }
      if (store.length) {
        if (temperatures[index] < temperatures[store[store.length - 1]]) {
          output.push(store[store.length - 1] - index);
        } else {
          output.push(0);
        }
      } else {
        output.push(0);
      }
    }
    store.push(index);
  }
  return output.reverse();
};

console.log(dailyTemperatures((temperatures = [77, 77, 77, 77, 77, 41, 77, 41, 41, 77])));
//[0,0,0,0,0,1,0,2,1,0]
console.log(dailyTemperatures((temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78])));
console.log(dailyTemperatures((temperatures = [73, 74, 75, 71, 69, 72, 76, 73])));
console.log(dailyTemperatures((temperatures = [30, 40, 50, 60])));
console.log(dailyTemperatures((temperatures = [30, 60, 90])));
