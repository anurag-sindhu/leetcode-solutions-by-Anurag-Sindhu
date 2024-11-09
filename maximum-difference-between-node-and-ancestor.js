const BinaryTree = require('../../js/binary-tree.js');

var maxAncestorDiff = function(root) {
	let maxDifference = 0;
	var maxAncestorDiffHelper = function(root, maxSoFar = -Infinity, minSoFar = Infinity) {
		if (!root) {
			return;
		}
		const rootValue = root.val;
		if (maxSoFar < rootValue) {
			maxSoFar = rootValue;
		}
		if (minSoFar > rootValue) {
			minSoFar = rootValue;
		}
		if (maxDifference < Math.abs(maxSoFar - minSoFar)) {
			maxDifference = Math.abs(maxSoFar - minSoFar);
		}
		maxAncestorDiffHelper(root.left, maxSoFar, minSoFar);
		maxAncestorDiffHelper(root.right, maxSoFar, minSoFar);
	};
	maxAncestorDiffHelper(root);
	return maxDifference;
};

let res;

res = maxAncestorDiff(
	new BinaryTree().createFromArray((root = [ 8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13 ]))
);
console.log(res);

res = maxAncestorDiff(new BinaryTree().createFromArray((root = [ 1, null, 2, null, 0, 3 ])));
console.log(res);
