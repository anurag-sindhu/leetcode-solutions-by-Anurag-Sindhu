function totalDaysRequired(weights, capacity) {
  let days = 0;
  let tempSum = 0;
  for (let index = 0; index < weights.length; index++) {
    if (tempSum + weights[index] <= capacity) {
      tempSum += weights[index];
    } else {
      days++;
      tempSum = weights[index];
    }
  }
  if (tempSum) {
    days += Math.ceil(tempSum / capacity);
  }
  return days;
}

var shipWithinDays = function (weights, days) {
  let start = Math.max(...weights);
  let end = (function () {
    return weights.reduce((accumulator, current) => accumulator + current, 0);
  })();
  while (start < end) {
    if (end - start === 1) {
      const totalDaysRequiredWithStart = totalDaysRequired(weights, start);
      const totalDaysRequiredRespEnd = totalDaysRequired(weights, end);
      if (
        totalDaysRequiredWithStart === totalDaysRequiredRespEnd ||
        totalDaysRequiredWithStart <= days
      ) {
        return start;
      }
      return end;
    }
    const mid = Math.floor((start + end) / 2);
    const totalDaysRequiredResp = totalDaysRequired(weights, mid);
    if (totalDaysRequiredResp <= days) {
      end = mid;
    } else {
      start = mid;
    }
  }
};

console.log(shipWithinDays((weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), (days = 5)));
console.log(shipWithinDays((weights = [1, 2, 3, 1, 1]), (days = 4)));
console.log(shipWithinDays((weights = [3, 2, 2, 4, 1, 4]), (days = 3)));
console.log(shipWithinDays([70], 69));
console.log(shipWithinDays([312884470], 312884469));
console.log(shipWithinDays((piles = [30, 11, 23, 4, 20]), (h = 6)));
console.log(shipWithinDays((piles = [30, 11, 23, 4, 20]), (h = 5)));
console.log(shipWithinDays((piles = [3, 6, 7, 11]), (h = 8)));
