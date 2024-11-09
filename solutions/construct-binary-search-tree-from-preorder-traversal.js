class Node {
	constructor(data) {
		this.val = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.tree = null;
	}
	addNode(data, tree) {
		if (tree.val > data) {
			if (!tree.left) {
				tree.left = new Node(data);
			} else {
				this.addNode(data, tree.left);
			}
		} else {
			if (!tree.right) {
				tree.right = new Node(data);
			} else {
				this.addNode(data, tree.right);
			}
		}
	}
	add(data) {
		const node = new Node(data);
		if (!this.tree) {
			this.tree = node;
		} else {
			this.addNode(data, this.tree);
		}
	}
}

var bstFromPreorder = function(preorder) {
	const binaryTree = new BinarySearchTree();
	for (const iterator of preorder) {
		binaryTree.add(iterator);
	}
	return binaryTree.tree;
};

let binaryTree;
let res;
res = bstFromPreorder([ 8, 5, 1, 7, 10, 12 ]);
console.log(res);

res = bstFromPreorder([ 1, 3 ]);
console.log(res);
