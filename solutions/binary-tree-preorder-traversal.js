const BinarySearchTree = require('../../js/binary-search-tree.js');
var preorderTraversal = function (root, output = []) {
  if (!root) {
    return output;
  }
  if (root.val !== null) {
    output.push(root.val);
  }
  preorderTraversal(root.left, output);
  preorderTraversal(root.right, output);
  return output;
};

const binarySearchTree = new BinarySearchTree();
for (const iterator of [1, null, 2, 3]) {
  binarySearchTree.add(iterator);
}
const resp = preorderTraversal(binarySearchTree.tree);
console.log(resp);
