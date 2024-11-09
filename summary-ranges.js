var summaryRanges = function (nums) {
  const resp = [];
  let lastNum = null;
  let tempStr = null;
  for (let index = 0; index < nums.length; index++) {
    lastNum = nums[index];
    if (lastNum + 1 === nums[index + 1]) {
      if (!tempStr) {
        tempStr = String(lastNum);
      }
    } else {
      if (tempStr) {
        resp.push(`${tempStr}->${lastNum}`);
      } else {
        resp.push(String(lastNum));
      }
      tempStr = null;
    }
  }
  return resp;
};
console.log(summaryRanges([7, 9, 10]));

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); //["0","2->4","6","8->9"]
console.log(summaryRanges([4, 5, 7]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([7, 9]));
