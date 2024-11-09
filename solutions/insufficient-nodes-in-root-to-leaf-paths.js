const BinaryTree = require('../../js/binary-tree.js');

var sufficientSubset = function(root, limit, sumTillHere = 0) {
	if (!root) {
		return;
	}
	const value = root.val;
	const updatedSum = sumTillHere + value;
	if (updatedSum < limit) {
		root.left = null;
		root.right = null;
		root.val = null;
	}
	sufficientSubset(root.left, limit, updatedSum);
	sufficientSubset(root.right, limit, updatedSum);
	return root;
};

let binaryTree;
let res;
binaryTree = new BinaryTree();
for (const iterator of [ 1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14 ]) {
	binaryTree.add(iterator);
}
res = sufficientSubset(binaryTree.tree, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [ 5, 4, 8, 11, null, 17, 4, 7, 1, null, null, 5, 3 ]) {
	binaryTree.add(iterator);
}
res = sufficientSubset(binaryTree.tree, 22);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [ 1, 2, -3, -5, null, 4, null ]) {
	binaryTree.add(iterator);
}
res = sufficientSubset(binaryTree.tree, -1);
console.log(res);

console.log(
	sufficientSubset((root = [ 5, 4, 8, 11, null, 17, 4, 7, 1, null, null, 5, 3 ]), (limit = 22))
);
console.log(sufficientSubset((root = [ 1, 2, -3, -5, null, 4, null ]), (limit = -1)));
