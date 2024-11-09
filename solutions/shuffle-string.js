var restoreString = function (s, indices) {
  let out = [];
  for (let index = 0; index < s.length; index++) {
    out[indices[index]] = s[index];
  }
  return out.join('');
};

console.log(restoreString((s = 'abc'), (indices = [0, 1, 2])));
console.log(restoreString((s = 'codeleet'), (indices = [4, 5, 6, 7, 0, 2, 1, 3])));
