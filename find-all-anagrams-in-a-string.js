var findAnagrams1 = function (s, p) {
  const obj = {};
  for (let index = 0; index < p.length; index++) {
    if (obj[p[index]]) {
      obj[p[index]] += 1;
    } else {
      obj[p[index]] = 1;
    }
  }
  const output = [];
  const areAvailable = (slicedString) => {
    const tempObject = { ...obj };
    const slicedObj = {};
    for (let index = 0; index < slicedString.length; index++) {
      if (slicedObj[slicedString[index]]) {
        slicedObj[slicedString[index]] += 1;
      } else {
        slicedObj[slicedString[index]] = 1;
      }
    }
    for (const key in slicedObj) {
      if (!tempObject[key]) {
        return false;
      }
      if (slicedObj[key] !== tempObject[key]) {
        return false;
      }
      slicedObj[key] = 0;
      tempObject[key] = 0;
    }
    const areAllValuesMet = (inObj) => {
      for (const key in inObj) {
        if (inObj[key]) {
          return false;
        }
      }
      return true;
    };
    return areAllValuesMet(slicedObj) && areAllValuesMet(tempObject);
  };
  for (let index = 0; index <= s.length - p.length; index++) {
    const slicedString = s.slice(index, index + p.length);
    if (areAvailable(slicedString)) {
      output.push(index);
    }
  }
  return output;
};

var findAnagrams = function (s, p) {
  if (!s || !p) {
    return [];
  }
  const pLength = p.length;
  const sLength = s.length;
  if (pLength > sLength) {
    return [];
  }
  const output = [];
  const pObj = {};
  const sObj = {};
  for (let index = 0; index < pLength; index++) {
    if (pObj[p[index]]) {
      pObj[p[index]] += 1;
    } else {
      pObj[p[index]] = 1;
    }
    if (sObj[s[index]]) {
      sObj[s[index]] += 1;
    } else {
      sObj[s[index]] = 1;
    }
  }

  const areBothObjectsEqual = (pObj, sObj) => {
    for (const key in pObj) {
      if (sObj[key] !== pObj[key]) {
        return false;
      }
    }
    return true;
  };
  for (let index = pLength; index <= sLength; index++) {
    if (areBothObjectsEqual(pObj, sObj)) {
      output.push(index - pLength);
    }
    sObj[s[index - pLength]] -= 1;
    if (sObj[s[index]]) {
      sObj[s[index]] += 1;
    } else {
      sObj[s[index]] = 1;
    }
  }
  return output;
};

console.log(findAnagrams((s = 'baa'), (p = 'aa')));
console.log(findAnagrams((s = 'cbaebabacd'), (p = 'abc')));
console.log(findAnagrams((s = 'abab'), (p = 'ab')));
