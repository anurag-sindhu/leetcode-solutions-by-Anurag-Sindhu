var isSubsequence = function (s, t) {
  let tIndex = 0;
  const verify = [];
  for (let index = 0; index < s.length; index++) {
    if (tIndex < t.length) {
      const ff = () => {
        if (tIndex < t.length) {
          if (t[tIndex] === s[index]) {
            verify.push(t[tIndex]);
            tIndex += 1;
            return;
          } else {
            tIndex += 1;
            return ff();
          }
        } else {
          return false;
        }
      };
      ff();
    } else {
      return false;
    }
  }
  return verify.length === s.length ? true : false;
};
console.log(isSubsequence('aaaaaa', 'bbaaaa'));
console.log(isSubsequence((s = 'b'), (t = 'c')));
console.log(isSubsequence((s = 'abc'), (t = 'ahbgdc')));
console.log(isSubsequence((s = 'axc'), (t = 'ahbgdc')));
