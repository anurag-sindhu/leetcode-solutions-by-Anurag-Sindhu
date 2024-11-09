const BinaryTree = require('../../js/binary-tree.js');

var pruneTree = function (root) {
  if (!root) {
    return null;
  }
  if (root.left === 0 && root.right === 0 && root.left.val === null && root.right.val === null) {
    console.log('object');
  }
  return;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, null, 0, 0, 1]) {
  binaryTree.add(iterator);
}
res = pruneTree(binaryTree.tree);
console.log(res);
