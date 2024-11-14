// Merge the two arrays: left and right
function merge(left = [], right = []) {
  let leftIndex = 0;
  let rightIndex = 0;
  const resp = [];
  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] > right[rightIndex]) {
        resp.push(right[rightIndex]);
        rightIndex++;
      } else {
        resp.push(left[leftIndex]);
        leftIndex++;
      }
    } else if (leftIndex < left.length) {
      resp.push(left[leftIndex]);
      leftIndex++;
    } else {
      resp.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resp;
}

function mergeSort(arr) {
  if (!arr.length || arr.length === 1) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[1] > arr[0] ? [arr[0], arr[1]] : [arr[1], arr[0]];
  }
  const mid = parseInt(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(mergeSort([340, 1, 3, 3, 76, 23, 4]));
