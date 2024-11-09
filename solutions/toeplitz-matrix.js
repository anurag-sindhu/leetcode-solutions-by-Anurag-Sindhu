const areUniquesElementsInArray = (arr) => {
  let element = null;
  for (const iterator of arr) {
    if (element === null) {
      element = iterator;
    } else {
      if (element !== iterator) {
        return false;
      }
    }
  }
  return true;
};

var isToeplitzMatrix = function (matrix) {
  const startXIndex = matrix.length - 1;
  const startYIndex = 0;
  const obj = { [`${startXIndex}_${startYIndex}`]: true };
  obj[`${startXIndex}_${startYIndex}`] = true;
  let tempArrayElements = [];
  let tempArrayIndexes = [[startXIndex, startYIndex]];
  while (tempArrayIndexes.length) {
    const arrayIndexes = [...tempArrayIndexes];
    tempArrayIndexes = [];
    tempArrayElements = [];
    for (let index = 0; index < arrayIndexes.length; index++) {
      const [startX, startY] = arrayIndexes[index];
      let keyIndex = null;
      keyIndex = `${startX - 1}_${startY}`;
      if (matrix[startX - 1] && matrix[startX - 1][startY] !== undefined && !obj[keyIndex]) {
        tempArrayElements.push(matrix[startX - 1][startY]);
        obj[keyIndex] = true;
        tempArrayIndexes.push([startX - 1, startY]);
      }
      keyIndex = `${startX}_${startY + 1}`;
      if (matrix[startX] && matrix[startX][startY + 1] !== undefined && !obj[keyIndex]) {
        tempArrayElements.push(matrix[startX][startY + 1]);
        obj[keyIndex] = true;
        tempArrayIndexes.push([startX, startY + 1]);
      }
      keyIndex = `${startX + 1}_${startY}`;
      if (matrix[startX + 1] && matrix[startX + 1][startY] !== undefined && !obj[keyIndex]) {
        tempArrayElements.push(matrix[startX + 1][startY]);
        obj[keyIndex] = true;
        tempArrayIndexes.push([startX + 1, startY]);
      }
      keyIndex = `${startX}_${startY - 1}`;
      if (matrix[startX] && matrix[startX][startY - 1] !== undefined && !obj[keyIndex]) {
        tempArrayElements.push(matrix[startX][startY - 1]);
        obj[keyIndex] = true;
        tempArrayIndexes.push([startX, startY - 1]);
      }
    }
    if (!areUniquesElementsInArray(tempArrayElements)) {
      return false;
    }
  }
  return true;
};
console.log(
  isToeplitzMatrix(
    (matrix = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2]
    ])
  )
);
console.log(
  isToeplitzMatrix(
    (matrix = [
      [1, 2],
      [2, 2]
    ])
  )
);
