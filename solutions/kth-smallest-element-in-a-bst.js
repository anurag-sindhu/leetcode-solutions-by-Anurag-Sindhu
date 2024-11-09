const BinarySearchTree = require('../../js/binary-search-tree.js');

var kthSmallest = function (root, k, output = [], found = null) {
  if (output.length === k) {
    found = output[output.length - 1];
    return found;
  }
  if (!root) {
    return null;
  }
  
  found = kthSmallest(root.left, k, output, found);
  if (found) {
    return found;
  }
  if (root.val !== null) {
    output.push(root.val);
  }
  found = kthSmallest(root.right, k, output, found);
  if (found) {
    return found;
  }
  return found;
};

let binarySearchTree;
let resp;
binarySearchTree = new BinarySearchTree();
for (const iterator of [
  41,
  37,
  44,
  24,
  39,
  42,
  48,
  1,
  35,
  38,
  40,
  null,
  43,
  46,
  49,
  0,
  2,
  30,
  36,
  null,
  null,
  null,
  null,
  null,
  null,
  45,
  47,
  null,
  null,
  null,
  null,
  null,
  4,
  29,
  32,
  null,
  null,
  null,
  null,
  null,
  null,
  3,
  9,
  26,
  null,
  31,
  34,
  null,
  null,
  7,
  11,
  25,
  27,
  null,
  null,
  33,
  null,
  6,
  8,
  10,
  16,
  null,
  null,
  null,
  28,
  null,
  null,
  5,
  null,
  null,
  null,
  null,
  null,
  15,
  19,
  null,
  null,
  null,
  null,
  12,
  null,
  18,
  20,
  null,
  13,
  17,
  null,
  null,
  22,
  null,
  14,
  null,
  null,
  21,
  23
]) {
  binarySearchTree.add(iterator);
}
resp = kthSmallest(binarySearchTree.tree, (k = 25));
console.log(resp);
binarySearchTree = new BinarySearchTree();
for (const iterator of [5, 3, 6, 2, 4, null, null, 1]) {
  binarySearchTree.add(iterator);
}
resp = kthSmallest(binarySearchTree.tree, (k = 3));
console.log(resp);

binarySearchTree = new BinarySearchTree();
for (const iterator of [3, 1, 4, null, 2]) {
  binarySearchTree.add(iterator);
}
resp = kthSmallest(binarySearchTree.tree, (k = 1));
console.log(resp);
