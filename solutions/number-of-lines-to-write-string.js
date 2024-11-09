var numberOfLines = function (widths, str) {
  let lines = 0;
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    const tempWidth = widths[str.charCodeAt(index) - 97];
    if (count + tempWidth <= 100) {
      count += tempWidth;
    } else {
      lines++;
      count = tempWidth;
    }
  }
  return [lines + 1, count];
};

console.log(
  numberOfLines(
    (widths = [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10
    ]),
    (s = 'bbbcccdddaaa')
  )
);

console.log(
  numberOfLines(
    (widths = [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10
    ]),
    (s = 'abcdefghijklmnopqrstuvwxyz')
  )
);
