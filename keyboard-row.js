var findWords = function (words) {
  const row1 = {
    q: true,
    w: true,
    e: true,
    r: true,
    t: true,
    y: true,
    u: true,
    i: true,
    o: true,
    p: true
  };
  const row2 = {
    a: true,
    s: true,
    d: true,
    f: true,
    g: true,
    h: true,
    j: true,
    k: true,
    l: true
  };
  const row3 = {
    z: true,
    x: true,
    c: true,
    v: true,
    b: true,
    n: true,
    m: true
  };
  const isValid = (word) => {
    let selectedRow = null;
    let char = null;
    for (let index = 0; index < word.length; index++) {
      char = word[index].toLowerCase();
      if (!selectedRow) {
        if (row1[char]) {
          selectedRow = row1;
        } else if (row2[char]) {
          selectedRow = row2;
        } else {
          selectedRow = row3;
        }
      } else {
        if (!selectedRow[char]) {
          return false;
        }
      }
    }
    return true;
  };
  return words.filter((word) => isValid(word));
};
console.log(findWords(['Alaska', 'Hello', 'Dad', 'Peace']));
console.log(findWords(['adsdf', 'sfd']));
console.log(findWords(['omk']));
