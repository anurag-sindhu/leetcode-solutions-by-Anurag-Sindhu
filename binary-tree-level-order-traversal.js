const BinaryTree = require('../../js/binary-tree.js');

var countLevels = function (root) {
  if (!root) {
    return 0;
  }
  return 1 + countLevels(root.left);
};

var start = function (root, level) {
  const output = [];
  var getAllElementFromLevel = function (root, level, currentLevel = 1) {
    if (level === currentLevel) {
      if (root.val !== null) {
        output.push(root.val);
      }
    } else {
      getAllElementFromLevel(root.left, level, currentLevel + 1);
      getAllElementFromLevel(root.right, level, currentLevel + 1);
    }
  };
  getAllElementFromLevel(root, level);
  return output;
};

var levelOrder = function (root, output = []) {
  const levelsCount = countLevels(root);
  for (let index = 1; index <= levelsCount; index++) {
    const elementFromLevel = start(root, index);
    output.push(elementFromLevel);
  }
  return output;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
  binaryTree.add(iterator);
}
res = levelOrder(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of []) {
  binaryTree.add(iterator);
}
res = levelOrder(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, null, 3]) {
  binaryTree.add(iterator);
}
res = levelOrder(binaryTree.tree);
console.log(res);
