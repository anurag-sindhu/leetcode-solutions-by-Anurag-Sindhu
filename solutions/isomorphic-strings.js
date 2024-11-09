var isIsomorphic = function (s, t) {
  const mapper = {};
  const isAvailableForMapping = {};
  for (let index = 0; index < s.length; index++) {
    if (!mapper[s[index]] && !isAvailableForMapping[t[index]]) {
      mapper[s[index]] = t[index];
      isAvailableForMapping[t[index]] = s[index];
    } else if (mapper[s[index]] !== t[index]) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic((s = 'badc'), (t = 'baba')));
console.log(isIsomorphic((s = 'paper'), (t = 'title')));
console.log(isIsomorphic((s = 'egg'), (t = 'add')));
console.log(isIsomorphic((s = 'foo'), (t = 'bar')));
