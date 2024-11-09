var mergeArrays = function (nums1, nums2) {
  const sumObject = {};
  for (const [key, value] of nums1) {
    if (sumObject[key] === undefined) {
      sumObject[key] = 0;
    }
    sumObject[key] += value;
  }
  for (const [key, value] of nums2) {
    if (sumObject[key] === undefined) {
      sumObject[key] = 0;
    }
    sumObject[key] += value;
  }
  const output = [];
  for (const key in sumObject) {
    output.push([Number(key), sumObject[key]]);
  }
  return output;
};

console.log(
  mergeArrays(
    (nums1 = [[1, 2], [2, 3], [4, 5]]),
    (nums2 = [[1, 4], [3, 2], [4, 1]])
  )
);
console.log(
  mergeArrays((nums1 = [[2, 4], [3, 6], [5, 5]]), (nums2 = [[1, 3], [4, 3]]))
);
