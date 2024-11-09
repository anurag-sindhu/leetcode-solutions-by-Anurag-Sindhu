var reorganizeString = function (array) {
  const obj = {};
  for (let index = 0; index < array.length; index++) {
    if (obj[array[index]]) {
      obj[array[index]] += 1;
    } else {
      obj[array[index]] = 1;
    }
  }
  return obj;
};
console.log(reorganizeString(s));
