var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const firstBlockCombination = {};
  for (let indexNums1 = 0; indexNums1 < nums1.length; indexNums1++) {
    for (let indexNums2 = 0; indexNums2 < nums2.length; indexNums2++) {
      const sum = nums1[indexNums1] + nums2[indexNums2];
      if (!firstBlockCombination[sum]) {
        firstBlockCombination[sum] = 0;
      }
      firstBlockCombination[sum] += 1;
    }
  }
  const secondBlockCombination = {};
  for (let indexNums3 = 0; indexNums3 < nums3.length; indexNums3++) {
    for (let indexNums4 = 0; indexNums4 < nums4.length; indexNums4++) {
      const sum = nums3[indexNums3] + nums4[indexNums4];
      if (!secondBlockCombination[sum]) {
        secondBlockCombination[sum] = 0;
      }
      secondBlockCombination[sum] += 1;
    }
  }
  let output = 0;
  for (const firstKey in firstBlockCombination) {
    const num = Number(firstKey);
    const diffRequired = 0 - num;
    if (secondBlockCombination[diffRequired] || secondBlockCombination[diffRequired] === 0) {
      output += firstBlockCombination[firstKey] * secondBlockCombination[diffRequired];
    }
  }
  return output;
};

console.log(fourSumCount((nums1 = [0]), (nums2 = [0]), (nums3 = [0]), (nums4 = [0])));
console.log(
  fourSumCount((nums1 = [1, 2]), (nums2 = [-2, -1]), (nums3 = [-1, 2]), (nums4 = [0, 2]))
);
