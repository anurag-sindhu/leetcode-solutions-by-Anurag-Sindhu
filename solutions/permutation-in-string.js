var checkInclusion = function (p, s) {
  if (!s || !p) {
    return false;
  }
  const pLength = p.length;
  const sLength = s.length;
  if (pLength > sLength) {
    return false;
  }
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
      return true;
    }
    sObj[s[index - pLength]] -= 1;
    if (sObj[s[index]]) {
      sObj[s[index]] += 1;
    } else {
      sObj[s[index]] = 1;
    }
  }
  return false;
};

console.log(checkInclusion((s1 = 'ab'), (s2 = 'eidbaooo')));
console.log(checkInclusion((s1 = 'ab'), (s2 = 'eidboaoo')));
