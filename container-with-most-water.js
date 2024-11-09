var maxArea = function (height) {
  let area = -Infinity;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let tempArea = null;
  let containerHeight = null;
  let containerArea = null;
  while (rightPointer >= leftPointer) {
    containerArea = rightPointer - leftPointer;
    if (height[rightPointer] > height[leftPointer]) {
      containerHeight = height[leftPointer];
      leftPointer++;
    } else {
      containerHeight = height[rightPointer];
      rightPointer--;
    }
    tempArea = containerHeight * containerArea;
    if (area < tempArea) {
      area = tempArea;
    }
  }
  return area;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1,1]));
