var waysToBuyPensPencils = function (total, pen, pencil) {
  if (!(total >= pen || total >= pencil)) {
    return 1;
  }
  let sum = 0;
  const maxPen = parseInt(total / pen);
  for (let index = 0; index <= maxPen; index++) {
    const totalPenCost = index * pen;
    const pencilCanBeBought = parseInt((total - totalPenCost) / pencil);
    sum += pencilCanBeBought + 1;
  }
  return sum;
};

console.log(waysToBuyPensPencils((total = 20), (cost1 = 10), (cost2 = 5)));
console.log(waysToBuyPensPencils((total = 5), (cost1 = 10), (cost2 = 10)));
