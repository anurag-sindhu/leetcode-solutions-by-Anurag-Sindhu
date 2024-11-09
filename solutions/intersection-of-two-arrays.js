var intersection = function (nums1, nums2) {
  const obj = {};
  const arr = [];
  for (const iterator of nums1) {
    if (!obj[iterator]) {
      obj[iterator] = 1;
    } else {
      obj[iterator] += 1;
    }
  }
  for (const iterator of nums2) {
    if (obj[iterator] > 0) {
      arr.push(iterator);
      obj[iterator] -= 1;
    }
  }
  return arr;
};
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([1, 2, 2, 1], [2, 2]));
