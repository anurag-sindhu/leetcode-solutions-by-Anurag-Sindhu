function checkReach(arr, start, explored = {}) {
  if (arr[start] === undefined || explored[start]) {
    return;
  }
  if (arr[start] === 0) {
    throw true;
  } else {
    explored[start] = true;
  }
  checkReach(arr, start + arr[start], explored);
  checkReach(arr, start - arr[start], explored);
  return false;
}

var canReach = function (arr, start) {
  try {
    return checkReach(arr, start);
  } catch (e) {
    return e;
  }
};

console.log(canReach([3, 0, 2, 1, 2], 2));
console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
console.log(canReach([4, 2, 3, 0, 3, 1, 2], 0));
