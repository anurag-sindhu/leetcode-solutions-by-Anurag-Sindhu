class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
Preorder gives the root first, so we process elements from preorder in order.
Inorder helps us split the tree into left and right subtrees based on the root's position.
 */
var buildTree = function (preorder, inorder) {
    let index = 0;
    const map = new Map();
    inorder.forEach((val, i) => map.set(val, i));

    function helper(start, end) {
        if (start > end) {
            return null;
        }

        const rootVal = preorder[index++];
        const node = new TreeNode(rootVal);
        const mid = map.get(rootVal);

        node.left = helper(start, mid - 1);
        node.right = helper(mid + 1, end);
        return node;
    }

    return helper(0, inorder.length - 1);
};

console.log(buildTree((preorder = [3, 9, 20, 15, 7]), (inorder = [9, 3, 15, 20, 7])));
console.log(buildTree((preorder = [-1]), (inorder = [-1])));
