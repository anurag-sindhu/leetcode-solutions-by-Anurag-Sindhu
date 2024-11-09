const BinaryTree = require('../../js/binary-tree.js');

var averageOfLevels = function(root) {
	const levelMapping = {};
	var averageOfLevelsHelper = function(root, currentLevel = 0, levelMapping = {}) {
		if (!root) {
			return;
		}
		const output = [];
		const value = root.val;
		if (!levelMapping[currentLevel]) {
			levelMapping[currentLevel] = { sum: 0, count: 0 };
		}
		levelMapping[currentLevel].sum += value;
		levelMapping[currentLevel].count += 1;
		averageOfLevelsHelper(root.left, currentLevel + 1, levelMapping);
		averageOfLevelsHelper(root.right, currentLevel + 1, levelMapping);
		return output;
	};
	averageOfLevelsHelper(root, 0, levelMapping);
	const output = [];
	for (const key in levelMapping) {
		output.push((levelMapping[key].sum / levelMapping[key].count).toFixed(5));
	}
	return output;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [ 3, 9, 20, 15, 7 ]) {
	binaryTree.add(iterator);
}
res = averageOfLevels(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [ 3, 9, 20, null, null, 15, 7 ]) {
	binaryTree.add(iterator);
}
res = averageOfLevels(binaryTree.tree);
console.log(res);
