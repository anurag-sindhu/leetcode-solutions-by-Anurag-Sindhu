const fillColor = function (image, column, row, oldColor, newColor) {
  if (
    image[column] === undefined ||
    image[column][row] === undefined ||
    image[column][row] === newColor ||
    image[column][row] !== oldColor
  ) {
    return image;
  } else {
    image[column][row] = newColor;
    fillColor(image, column - 1, row, oldColor, newColor);
    fillColor(image, column, row + 1, oldColor, newColor);
    fillColor(image, column + 1, row, oldColor, newColor);
    fillColor(image, column, row - 1, oldColor, newColor);
    return image;
  }
};

var floodFill = function (image, column, row, color) {
  if (image[column][row] === color) {
    return image;
  }
  return fillColor(image, column, row, image[column][row], color);
};
let res;
res = floodFill(
  (image = [
    [0, 0, 0],
    [0, 0, 0]
  ]),
  (column = 1),
  (row = 0),
  (color = 2)
);
console.log(res);
res = floodFill(
  (image = [
    [0, 1, 1, 3, 3],
    [0, 1, 2, 2, 1],
    [0, 3, 2, 1, 3],
    [0, 2, 2, 2, 0]
  ]),
  (column = 2),
  (row = 2),
  (color = 9)
);
console.log(res);
res = floodFill(
  (image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ]),
  (column = 1),
  (row = 1),
  (color = 2)
);
console.log(res);
res = floodFill(
  (image = [
    [0, 0, 0],
    [0, 0, 0]
  ]),
  (column = 1),
  (row = 1),
  (color = 2)
);
console.log(res);
