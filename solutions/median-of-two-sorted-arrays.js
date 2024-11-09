const { reduce } = require('bluebird');

var findMedianSortedArrays1 = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return 0;
  }
  const nums1Length = nums1.length;
  const nums2Length = nums2.length;
  const totalLength = nums1Length + nums2Length;
  const getNewArray = (lengthRequired) => {
    let nums1Index = 0;
    let nums2Index = 0;
    const newArray = [];
    while (lengthRequired) {
      if (
        (nums2[nums2Index] || nums2[nums2Index] === 0) &&
        (nums1[nums1Index] || nums1[nums1Index] === 0)
      ) {
        if (nums1[nums1Index] < nums2[nums2Index]) {
          newArray.push(nums1[nums1Index]);
          nums1Index++;
        } else {
          newArray.push(nums2[nums2Index]);
          nums2Index++;
        }
      } else if (nums1[nums1Index] || nums1[nums1Index] === 0) {
        newArray.push(nums1[nums1Index]);
        nums1Index++;
      } else if (nums2[nums2Index] || nums2[nums2Index] === 0) {
        newArray.push(nums2[nums2Index]);
        nums2Index++;
      }
      lengthRequired--;
    }
    return newArray;
  };
  if (totalLength % 2 === 0) {
    const firstIndex = (totalLength - 2) / 2;
    const secondIndex = firstIndex + 1;
    const newArray = getNewArray(secondIndex + 1);
    const median = (newArray[firstIndex] + newArray[secondIndex]) / 2;
    return median.toFixed(5);
  } else {
    const firstIndex = (totalLength - 1) / 2;
    const newArray = getNewArray(firstIndex + 1);
    return newArray[firstIndex].toFixed(5);
  }
};
var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return 0;
  }
  const nums1Length = nums1.length;
  const nums2Length = nums2.length;
  const totalLength = nums1Length + nums2Length;
  const getNewArray = (lengthRequired) => {
    let nums1Index = 0;
    let nums2Index = 0;
    const newArray = [];
    while (lengthRequired) {
      if (
        (nums2[nums2Index] || nums2[nums2Index] === 0) &&
        (nums1[nums1Index] || nums1[nums1Index] === 0)
      ) {
        if (nums1[nums1Index] < nums2[nums2Index]) {
          newArray.push(nums1[nums1Index]);
          nums1Index++;
        } else {
          newArray.push(nums2[nums2Index]);
          nums2Index++;
        }
      } else if (nums1[nums1Index] || nums1[nums1Index] === 0) {
        newArray.push(nums1[nums1Index]);
        nums1Index++;
      } else if (nums2[nums2Index] || nums2[nums2Index] === 0) {
        newArray.push(nums2[nums2Index]);
        nums2Index++;
      }
      lengthRequired--;
    }
    return newArray;
  };
  if (totalLength % 2 === 0) {
    const firstIndex = (totalLength - 2) / 2;
    const secondIndex = firstIndex + 1;
    const newArray = getNewArray(secondIndex + 1);
    const median = (newArray[firstIndex] + newArray[secondIndex]) / 2;
    return median.toFixed(5);
  } else {
    const firstIndex = (totalLength - 1) / 2;
    const newArray = getNewArray(firstIndex + 1);
    return newArray[firstIndex].toFixed(5);
  }
};

console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
console.log(findMedianSortedArrays((nums1 = [1, 3]), (nums2 = [2, 7])));
console.log(findMedianSortedArrays((nums1 = [1, 3]), (nums2 = [2])));
console.log(findMedianSortedArrays((nums1 = [1, 2]), (nums2 = [3, 4])));
