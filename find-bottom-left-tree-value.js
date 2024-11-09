const BinaryTree = require('../../js/binary-tree.js');

var findBottomLeftValue = function (root) {
  let value = null;
  var findBottomLeftValueHelper = function (root, level = 0) {
    if (!root) {
      return;
    }
    if (value === null) {
      value = { value: root.val, level };
    } else if (level > value.level) {
      value = { value: root.val, level };
    }
    findBottomLeftValueHelper(root.left, level + 1, value);
    findBottomLeftValueHelper(root.right, level + 1, value);
  };
  findBottomLeftValueHelper(root);
  return value.value;
};

let res;

res = findBottomLeftValue(
  new BinaryTree().createFromArray([1, 2, 3, 4, null, 5, 6, null, null, 7])
);
console.log(res);

res = findBottomLeftValue(new BinaryTree().createFromArray((root = [2, 1, 3])));
console.log(res);
