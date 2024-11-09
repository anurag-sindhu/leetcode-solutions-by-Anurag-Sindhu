const BinaryTree = require('../../js/binary-tree.js');
var countNodes1 = function (root) {
  if (!root) {
    return 0;
  }
  const leftNode = countNodes(root.left);
  const rightNode = countNodes(root.right);
  return 1 + leftNode + rightNode;
};
var countChildNodesForTree = function (root) {
  if (!root) {
    return 0;
  }
  const leftNode = countChildNodesForTree(root.left);
  const rightNode = countChildNodesForTree(root.right);
  return 1 + leftNode + rightNode;
};

var heightOfTree = function (root) {
  if (!root) {
    return 0;
  }
  const leftNode = heightOfTree(root.left);
  return 1 + leftNode;
};

function getTotalNodesOfATreeFromHeight(height) {
  let total = 0;
  while (height--) {
    total += 2 ** height;
  }
  return total;
}

var countNodes = function (root) {
  let totalCount = 0;
  var numberOfNodesOfLastLevel = function (root, level, curLevel = 1) {
    if (!root) {
      return 0;
    }
    if (level === curLevel) {
      totalCount += countChildNodesForTree(root) - 1;
    } else {
      numberOfNodesOfLastLevel(root.left, level, curLevel + 1);
      numberOfNodesOfLastLevel(root.right, level, curLevel + 1);
    }
    return;
  };
  if (!root) {
    return 0;
  }
  const getHeightOfTree = heightOfTree(root);
  if (getHeightOfTree === 1) {
    return 1;
  }
  numberOfNodesOfLastLevel(root, getHeightOfTree - 1);
  const getNumberOfNodesOfLastLevel = totalCount;
  const getNumberOfNodesOfBeforeLastLevel = getTotalNodesOfATreeFromHeight(getHeightOfTree - 1);

  return getNumberOfNodesOfLastLevel + getNumberOfNodesOfBeforeLastLevel;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1]) {
  binaryTree.add(iterator);
}
res = countNodes(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6]) {
  binaryTree.add(iterator);
}
res = countNodes(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of []) {
  binaryTree.add(iterator);
}
res = countNodes(binaryTree.tree);
console.log(res);
