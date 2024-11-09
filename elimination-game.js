var lastRemaining = function (num) {
  let leftMovement = true;
  let step = 1;
  let head = 1;
  let remaining = num;
  while (remaining > 1) {
    if (leftMovement || remaining % 2 === 1) {
      head += step;
    }
    remaining = parseInt(remaining / 2);
    step *= 2;
    leftMovement = !leftMovement;
  }
  return head;
};

console.log(lastRemaining(24));
