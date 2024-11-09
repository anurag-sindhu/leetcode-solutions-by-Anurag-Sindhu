var checkValidString1 = function (s) {
  const record = [];
  let popped = null;
  let loose = 0;
  if (s[0] === ')') {
    return false;
  }
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '(') {
      record.push(s[index]);
    } else if (s[index] === ')') {
      popped = record[record.length - 1];
      if (popped === '(') {
        record.pop();
      } else {
        record.push(s[index]);
      }
    } else if (s[index] === '*') {
      loose += 1;
    }
  }
  if (record.length && record.length > loose) {
    return false;
  }
  return true;
};

var checkValidString2 = function (s) {
  let asteriskBalance = 0;
  let balance = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '(') {
      balance += 1;
    } else if (s[index] === '*') {
      asteriskBalance += 1;
    } else {
      balance -= 1;
    }
  }
  if (balance > asteriskBalance) {
    return false;
  }
  if (!balance || asteriskBalance === balance) {
    return true;
  }
  return true;
};

var checkValidString3 = function (s) {
  let closeBracketWanted = 0;
  let extras = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '(') {
      closeBracketWanted += 1;
    } else if (s[index] === ')') {
      closeBracketWanted -= 1;
    } else {
      extras += 1;
    }
    if (closeBracketWanted + extras < 0) {
      return false;
    }
  }
  if (!closeBracketWanted) {
    return true;
  }
  if (extras - closeBracketWanted >= 0) {
    return true;
  }
  return false;
};

var checkValidString = function (s) {
  let lo = 0;
  let hi = 0;

  for (let char of s) {
    if (char === '(') {
      hi++;
      lo++;
      continue;
    }

    if (char === ')') {
      if (hi === 0) {
        return false;
      }
      hi--;
      lo = Math.max(0, lo - 1);
      continue;
    }

    hi++;
    lo = Math.max(0, lo - 1);
  }

  return lo === 0;
};
console.log(checkValidString('(((((*(((((*((**(((*)*((((**))*)*)))))))))((*(((((**(**)'));
console.log(
  checkValidString(
    '(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())'
  )
);
console.log(checkValidString('(*))'));
console.log(checkValidString('(((((*(((((*((**(((*)*((((**))*)*)))))))))((*(((((**(**)'));

console.log(checkValidString('())**'));
console.log(checkValidString('(*))'));
console.log(checkValidString('(*)'));
console.log(checkValidString('()'));
console.log(checkValidString('((((**)'));
console.log(checkValidString('*())'));
