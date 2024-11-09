var backspaceCompare = function (s, t) {
  const getStringAfterSPaces = (str) => {
    let skip = 0;
    let strAfterSpace = '';
    for (let index = str.length - 1; index >= 0; index--) {
      if (str[index] === `#`) {
        skip += 1;
      } else {
        if (skip) {
          skip -= 1;
        } else {
          strAfterSpace += str[index];
        }
      }
    }
    return strAfterSpace;
  };

  return getStringAfterSPaces(s) === getStringAfterSPaces(t);
};
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('a#c', 'b'));
