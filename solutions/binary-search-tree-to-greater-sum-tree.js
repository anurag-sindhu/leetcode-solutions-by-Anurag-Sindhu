const BinarySearchTree = require('../../js/binary-search-tree.js');
var bstToGst = function (root) {
  let sum = 0;
  function start(root) {
    if (!root) {
      return null;
    }
    start(root.right, sum);
    sum += root.val;
    root.val = sum;
    start(root.left, sum);
    return root;
  }
  return start(root);
};

const binarySearchTree = new BinarySearchTree();
for (const iterator of [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]) {
  binarySearchTree.add(iterator);
}
const resp = bstToGst(binarySearchTree.tree);
console.log(resp);
