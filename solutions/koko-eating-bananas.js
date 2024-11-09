function totalHoursRequired(piles, koko) {
  let hours = 0;
  for (const iterator of piles) {
    hours += Math.ceil(iterator / koko);
  }
  return hours;
}

var minEatingSpeed = function (piles, hour) {
  const maximum = Math.max(...piles);
  if (piles.length === hour) {
    return maximum;
  }
  let left = 1;
  let right = maximum;
  while (left < right) {
    if (right - left === 1) {
      let hoursRequiredForLeft = totalHoursRequired(piles, left);
      let hoursRequiredForRight = totalHoursRequired(piles, right);
      if (hoursRequiredForLeft === hoursRequiredForRight || hoursRequiredForLeft <= hour) {
        return left;
      }
      return right;
    } else {
      const mid = Math.floor((left + right) / 2);
      let hoursRequired = totalHoursRequired(piles, mid);
      if (hoursRequired > hour) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }
};

console.log(minEatingSpeed([312884470], 968709470));
console.log(minEatingSpeed((piles = [3, 6, 7, 11, 12]), (h = 8)));
console.log(minEatingSpeed([10], 9));
console.log(minEatingSpeed([70], 69));
console.log(minEatingSpeed([312884470], 312884469));
console.log(minEatingSpeed((piles = [30, 11, 23, 4, 20]), (h = 6)));
console.log(minEatingSpeed((piles = [30, 11, 23, 4, 20]), (h = 5)));
console.log(minEatingSpeed((piles = [3, 6, 7, 11]), (h = 8)));
