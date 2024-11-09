const BinaryTree = require('../../js/binary-tree.js');

var trimBST = function (root, low, high) {
  if (!root) {
    return null;
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
};

let binaryTree;
let resp;
binaryTree = new BinaryTree();
for (const iterator of [1000, 500, 2000, 250, 750, 1500, 2500, 125, 425, 600, 800]) {
  binaryTree.add(iterator);
}
resp = trimBST(binaryTree.tree, 300, 1700);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
  binaryTree.add(iterator);
}
resp = trimBST(binaryTree.tree);
console.log(resp);
