var minimumDeletions1 = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  const len = nums.length;
  if (len === 1 || len === 2) {
    return len;
  }
  if (len === 3) {
    return 2;
  }
  let max = { value: -Infinity };
  for (let index = 0; index < len; index++) {
    if (max.value < nums[index]) {
      max = { value: nums[index], index };
    }
  }
  let min = { value: Infinity };
  for (let index = 0; index < len; index++) {
    if (min.value > nums[index]) {
      min = { value: nums[index], index };
    }
  }
  const distanceFromLeft = Math.max(max.index, min.index) + 1;
  const distanceFromRight = len - Math.min(max.index, min.index);
  const distanceFromEnds =
    Math.min(max.index, min.index) + 1 + len - Math.max(max.index, min.index);
  return Math.min(distanceFromLeft, distanceFromRight, distanceFromEnds);
};

var minimumDeletions = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  const len = nums.length;
  if (len === 1 || len === 2) {
    return len;
  }
  if (len === 3) {
    return 2;
  }
  let max = nums.indexOf(Math.max(...nums));
  let min = nums.indexOf(Math.min(...nums));
  return Math.min(
    Math.max(max, min) + 1,
    len - Math.min(max, min),
    Math.min(max, min) + 1 + len - Math.max(max, min)
  );
};

console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]));
console.log(minimumDeletions((nums = [2, 10, 7, 5, 4, 1, 8, 6])));
console.log(minimumDeletions([1]));
