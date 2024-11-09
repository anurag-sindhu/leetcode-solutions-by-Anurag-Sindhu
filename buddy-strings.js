var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  if (s.length === 1) {
    return false;
  }
  if (s.length === 2) {
    const newString = `${s[1]}${s[0]}`;
    if (newString === goal) {
      return true;
    }
    return false;
  }
  const mismatchingString = {};
  let mismatchingCount = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== goal[index]) {
      mismatchingCount++;
      mismatchingString[s[index]] = goal[index];
      if (mismatchingCount > 2) {
        return false;
      }
    }
  }

  if (!mismatchingCount) {
    const areAllCharactersUnique = (function () {
      const config = {};
      for (let index = 0; index < s.length; index++) {
        if (!config[s[index]]) {
          config[s[index]] = true;
        } else {
          return false;
        }
      }
      return true;
    })();
    if (!areAllCharactersUnique) {
      return true;
    }
    return false;
  }
  if (
    Object.keys(mismatchingString).reverse().join('') === Object.values(mismatchingString).join('')
  ) {
    return true;
  }

  return false;
};

console.log(buddyStrings((s = 'abab'), (goal = 'abab')));
console.log(buddyStrings((s = 'anursty'), (goal = 'anursty')));
console.log(buddyStrings((s = 'anaurag'), (goal = 'aanurag')));
console.log(buddyStrings((s = 'anurag'), (goal = 'aunrag')));
console.log(buddyStrings((s = 'ab'), (goal = 'ba')));
console.log(buddyStrings((s = 'ab'), (goal = 'ab')));
console.log(buddyStrings((s = 'aa'), (goal = 'aa')));
