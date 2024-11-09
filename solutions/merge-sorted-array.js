var merge = function (nums1, m, nums2, n) {
  const totalSize = m + n;
  let toInsertIndex = totalSize - 1;
  while (toInsertIndex--) {
    if (n < 0 || nums1[m - 1] > nums2[n - 1]) {
      nums1[toInsertIndex] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[toInsertIndex] = nums2[n - 1];
      n -= 1;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
