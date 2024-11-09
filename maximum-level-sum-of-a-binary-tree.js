const BinaryTree = require('../../js/binary-tree.js');

var maxLevelSum = function(root) {
	const config = {};

	var maxLevelSumHelper = function(root, level = 1) {
		if (!root) {
			return;
		}
		const value = root.val || 0;
		if (!config[level]) {
			config[level] = 0;
		}
		const prevSum = config[level];
		const totalSum = prevSum + value;
		config[level] = totalSum;
		maxLevelSumHelper(root.left, level + 1);
		maxLevelSumHelper(root.right, level + 1);
	};
	maxLevelSumHelper(root);
	let maxSum = -Infinity;
	let maxLevel = null;
	for (const key in config) {
		if (config[key] > maxSum) {
			maxSum = config[key];
			maxLevel = key;
		}
	}
	return maxLevel;
};

let binaryTree;
let res;
binaryTree = new BinaryTree();
for (const iterator of (root = [ 989, null, 10250, 98693, -89388, null, null, null, -32127 ])) {
	binaryTree.add(iterator);
}
res = maxLevelSum(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [ 1, 7, 0, 7, -8, null, null ]) {
	binaryTree.add(iterator);
}
res = maxLevelSum(binaryTree.tree);
console.log(res);
