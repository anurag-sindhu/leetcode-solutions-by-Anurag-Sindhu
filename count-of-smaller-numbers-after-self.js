function merge(ar1, ar2, finalArray) {
  const arr = [];
  let shift = 0;
  let pointer1 = 0;
  let pointer2 = 0;
  while (ar1[pointer1] || ar2[pointer2]) {
    if (ar1[pointer1] && ar2[pointer2]) {
      if (ar1[pointer1].data > ar2[pointer2].data) {
        arr.push(ar2[pointer2++]);
        shift++;
      } else {
        const index = ar1[pointer1].index;
        finalArray[index] = finalArray[index] + shift;
        arr.push(ar1[pointer1++]);
      }
    } else if (ar1[pointer1]) {
      const index = ar1[pointer1].index;
      finalArray[index] = finalArray[index] + shift;
      arr.push(ar1[pointer1++]);
    } else {
      arr.push(ar2[pointer2++]);
    }
  }

  return arr;
}

var countSmallerHelper = function (nodesWithIndexAndValue, finalArray) {
  const halfLength = Math.floor(nodesWithIndexAndValue.length / 2);
  if (halfLength >= 1) {
    return merge(
      countSmallerHelper(nodesWithIndexAndValue.slice(0, halfLength), finalArray),
      countSmallerHelper(nodesWithIndexAndValue.slice(halfLength), finalArray),
      finalArray
    );
  }
  return nodesWithIndexAndValue;
};

var countSmaller = function (nums) {
  const finalArray = [];
  const nodesWithIndexAndValue = (function () {
    const arr = [];
    for (let index = 0; index < nums.length; index++) {
      arr.push({ data: nums[index], index });
      finalArray.push(0);
    }
    return arr;
  })();

  countSmallerHelper(nodesWithIndexAndValue, finalArray);
  return finalArray;
};
let res = null;
res = countSmaller([7, 2, 1, 6, 5, 2, 4, 1]);
console.log(res); //[7,2,0,4,3,1,1,0]
res = countSmaller([5, 2, 6, 1]);
console.log(res);//[2,1,1,0]
res = countSmaller([9, 8, 1, 2, 3, 4, 5, 6, 7]); //[8,7,0,0,0,0,0,0,0]
console.log(res);
res = countSmaller([-1, -1]); //[0,0]
console.log(res);
res = countSmaller([0]); //[0]
console.log(res);
console.log(countSmaller([-1, -1]));
console.log(countSmaller([0]));
