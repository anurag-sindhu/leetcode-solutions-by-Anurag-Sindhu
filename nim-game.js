var canWinNim = function (n) {
  const mod = n % 4;
  if ((mod && mod === 1) || mod === 2 || mod === 3) {
    return true;
  }
  return false;
};
console.log(canWinNim(4));
console.log(canWinNim(1));
console.log(canWinNim(2));
console.log(canWinNim(5));
