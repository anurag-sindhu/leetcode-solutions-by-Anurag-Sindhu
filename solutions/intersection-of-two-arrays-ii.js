var intersection = function (nums1, nums2) {
  const obj = {};
  const obj2 = {};
  const arr = [];
  for (const iterator of nums1) {
    if (!obj[iterator]) {
      obj[iterator] = true;
    }
  }
  for (const iterator of nums2) {
    if (!obj2[iterator] && obj[iterator]) {
      obj2[iterator] = true;
      arr.push(iterator);
    }
  }
  return arr;
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
