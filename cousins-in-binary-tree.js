const BinaryTree = require('../../js/binary-tree.js');

var isCousins = function(root, x, y) {
	const getRelationShipObject = function(tree, obj = {}, level = 0, parent = null) {
		if (!tree) {
			return null;
		}
		obj[tree.val] = { level, parent };
		getRelationShipObject(tree.left, obj, level + 1, tree.val);
		getRelationShipObject(tree.right, obj, level + 1, tree.val);
		return obj;
	};
	const relationShipObject = getRelationShipObject(root);
	if (
		relationShipObject[x].parent === relationShipObject[y].parent ||
		relationShipObject[x].level !== relationShipObject[y].level
	) {
		return false;
	}
	return true;
};

let binaryTree;
let res;
binaryTree = new BinaryTree();
for (const iterator of [ 1, 2, 3, null, 4, null, 5 ]) {
	binaryTree.add(iterator);
}
res = isCousins(binaryTree.tree, (x = 5), (y = 4));
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [ 1, 2, 3, 4 ]) {
	binaryTree.add(iterator);
}
res = isCousins(binaryTree.tree, (x = 4), (y = 3));
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [ 1, 2, 3, null, 4 ]) {
	binaryTree.add(iterator);
}
res = isCousins(binaryTree.tree, (x = 2), (y = 3));
console.log(res);
