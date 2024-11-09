var solution = function (isBadVersion) {
  return function (n) {
    let start = 1;
    let end = n;
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      const status = isBadVersion(mid);
      if (status) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};

console.log(
  solution(function (n) {
    if (n === 2) {
      return true;
    }
    return false;
  })(2)
);
console.log(
  solution(function (n) {
    if (n <= 3) {
      return false;
    }
    return true;
  })(5)
);
