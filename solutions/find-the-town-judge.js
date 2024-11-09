var findJudge = function (n, trust) {
  if (n === 1) {
    return 1;
  }
  const isSomeoneTrusted = function (obj) {
    for (const key in obj) {
      if (obj[key].length === n - 1) {
        return obj[key];
      }
    }
    return false;
  };
  const trustedByObj = {};
  const toTrustObj = {};
  for (let index = 0; index < trust.length; index++) {
    if (!trustedByObj[trust[index][1]]) {
      trustedByObj[trust[index][1]] = [];
    }
    trustedByObj[trust[index][1]].push(trust[index][0]);
    toTrustObj[trust[index][0]] = trust[index][1];
  }
  const isTrustedSomeone = isSomeoneTrusted(trustedByObj);
  if (isTrustedSomeone) {
    for (let index = 1; index <= n; index++) {
      if (!toTrustObj[index]) {
        return index;
      }
    }
  }
  return -1;
};
console.log(findJudge((n = 1), (trust = [])));
console.log(
  findJudge(
    (n = 3),
    (trust = [
      [1, 3],
      [2, 3]
    ])
  )
);

console.log(
  findJudge(
    (n = 3),
    (trust = [
      [1, 3],
      [2, 3],
      [3, 1]
    ])
  )
);
console.log(findJudge((n = 2), (trust = [[1, 2]])));
console.log(
  findJudge(
    (n = 3),
    (trust = [
      [1, 2],
      [2, 3]
    ])
  )
);
