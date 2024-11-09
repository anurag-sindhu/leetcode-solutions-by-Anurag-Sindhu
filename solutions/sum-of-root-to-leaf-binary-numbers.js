const BinaryTree = require('../../js/binary-tree.js');

var sumRootToLeaf = function (root) {
  let sum = 0;
  let paths = [];
  function start(root, path = '') {
    if (!root) {
      return null;
    }
    if (!root.left && !root.right) {
      paths.push(`${path}${root.val}`);
    } else {
      start(root.left, `${path}${root.val}`);
      start(root.right, `${path}${root.val}`);
    }
  }
  start(root);
  for (const iterator of paths) {
    sum += parseInt(iterator, 2);
  }
  return sum;
};

let res;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of [1, 0, 1, 0, 1, 0, 1]) {
  binaryTree.add(iterator);
}
res = sumRootToLeaf(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 1]) {
  binaryTree.add(iterator);
}
res = sumRootToLeaf(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [0]) {
  binaryTree.add(iterator);
}
res = sumRootToLeaf(binaryTree.tree);
console.log(res);
