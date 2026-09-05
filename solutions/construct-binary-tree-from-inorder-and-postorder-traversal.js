/**
Inorder: <LEFT><ROOT><RIGHT>, postorder: <LEFT><RIGHT><ROOT>
The last element of postorder will always be the root of a subtree. We can further determine its left and right subtree
 by finding its position in the inorder array.
 */
var buildTree = function (inorder, postorder) {
    let hash = {};
    for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

    let recur = function (start, end) {
        if (start > end) return null;
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    };

    return recur(0, inorder.length - 1);
};
Input: ((inorder = [9, 3, 15, 20, 7]), (postorder = [9, 15, 7, 20, 3]));
Output: [3, 9, 20, null, null, 15, 7];
