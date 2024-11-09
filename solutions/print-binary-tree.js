const BinaryTree = require('../../js/binary-tree.js');

var getMatrix = function(rows, columns) {
	const mat = [];
	for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
		if (!mat[rowsIndex]) {
			mat[rowsIndex] = [];
		}
		for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
			mat[rowsIndex][columnIndex] = '';
		}
	}
	return mat;
};
var heightOfTree = function(root) {
	if (!root) {
		return 0;
	}
	const leftNode = heightOfTree(root.left);
	return 1 + leftNode;
};

var printTreeHelper = function(
	root,
	rows,
	columns,
	mat,
	treeHeight,
	currentRow = 0,
	currentColumn = (columns - 1) / 2
) {
	if (!root || root.val === null) {
		return mat;
	}
	const val = root.val;
	mat[currentRow][currentColumn] = val;
	const leftChildColumn = currentColumn - Math.pow(2, treeHeight - 1 - currentRow - 1);
	const rightChildColumn = currentColumn + Math.pow(2, treeHeight - 1 - currentRow - 1);
	printTreeHelper(root.left, rows, columns, mat, treeHeight, currentRow + 1, leftChildColumn);
	printTreeHelper(root.right, rows, columns, mat, treeHeight, currentRow + 1, rightChildColumn);
	return mat;
};

var printTree = function(root) {
	const treeHeight = heightOfTree(root);
	const rows = treeHeight;
	const columns = Math.pow(2, treeHeight) - 1;
	const mat = getMatrix(rows, columns);
	const res = printTreeHelper(root, rows, columns, mat, treeHeight);
	return res;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [ 1, 2, 3, null, 4 ]) {
	binaryTree.add(iterator);
}
res = printTree(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [ 1, 2 ]) {
	binaryTree.add(iterator);
}
res = printTree(binaryTree.tree, 1, 1);
console.log(res);
