var maxDistance = function (nums1, nums2) {
  let max = 0;
  for (let nums1Index = 0; nums1Index < nums1.length; nums1Index++) {
    let nums2Index = max + 1 + nums1Index;
    if (!nums2[nums2Index] === undefined) {
      break;
    }
    for (; nums2Index < nums2.length; nums2Index++) {
      if (nums1[nums1Index] <= nums2[nums2Index]) {
        if (max < nums2Index - nums1Index) {
          max = nums2Index - nums1Index;
        }
      }
    }
  }
  return max;
};
console.log(maxDistance((nums1 = [55, 30, 5, 4, 2]), (nums2 = [100, 20, 10, 10, 5])));
console.log(maxDistance((nums1 = [2, 2, 2]), (nums2 = [10, 10, 1])));
console.log(maxDistance((nums1 = [30, 29, 19, 5]), (nums2 = [25, 25, 25, 25, 25])));
