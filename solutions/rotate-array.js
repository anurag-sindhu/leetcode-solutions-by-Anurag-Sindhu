var rotate = function (nums, k) {
  k = k % nums.length;
  nums.splice(0, 0, ...nums.splice(nums.length - k));
  return nums;
};

let res;
res = rotate((nums = [1, 2]), (k = 5));
console.log({ res });
res = rotate((nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3));
console.log({ res });
