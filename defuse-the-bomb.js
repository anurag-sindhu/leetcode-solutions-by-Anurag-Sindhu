var decrypt = function (code, k) {
  if (k === 0) {
    return code.map(() => 0);
  }
  const output = [];
  if (k > 0) {
    let initSum = (function () {
      let tempK = k;
      let sum = 0;
      let index = 0;
      while (tempK--) {
        sum += code[index++];
      }
      return sum;
    })();
    for (let index = 0; index < code.length; index++) {
      initSum -= code[index];
      initSum += code[(index + k) % code.length];
      output.push(initSum);
    }
  } else {
    let initSum = (function () {
      let tempK = k;
      let sum = 0;
      let index = 0;
      while (tempK++) {
        index--;
        if (index < 0) {
          sum += code[code.length + index];
        } else {
          sum += code[index];
        }
      }
      return sum;
    })();
    for (let index = 0; index < code.length; index++) {
      output.push(initSum);
      initSum += code[index];
      if (index + k < 0) {
        initSum -= code[code.length + index + k];
      } else {
        initSum -= code[index + k];
      }
      console.log({ initSum });
    }
  }
  return output;
};

console.log(decrypt((code = [2, 4, 9, 3]), (k = -2)));
console.log(decrypt((code = [5, 7, 1, 4]), (k = 3)));
console.log(decrypt((code = [1, 2, 3, 4]), (k = 0)));
