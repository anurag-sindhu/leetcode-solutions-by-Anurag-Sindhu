const BinaryTree = require('../javascript/binary-tree.js');

function findParentGraph(root, element, graph = []) {
    if (!root) {
        return graph;
    }

    if (root.val === element) {
        graph.push(root.val);
        return graph;
    }
    if (!graph.length) {
        graph = findParentGraph(root.left, element, graph);
    }
    if (!graph.length) {
        graph = findParentGraph(root.right, element, graph);
    }
    if (graph.length) {
        graph.push(root.val);
    }
    return graph;
}

var lowestCommonAncestor = function (root, p, q) {
    const parentGraphOfP = findParentGraph(root, p);

    const parentGraphOfQ = findParentGraph(root, q);
    const parentGraphOfPLength = parentGraphOfP.length;
    const parentGraphOfQLength = parentGraphOfQ.length;
    let parentIndexOfP = parentGraphOfPLength - 1;
    let parentIndexOfQ = parentGraphOfQLength - 1;
    let isFound = null;
    while (
        parentGraphOfP[parentIndexOfP] &&
        parentGraphOfQ[parentIndexOfQ] &&
        parentGraphOfP[parentIndexOfP] === parentGraphOfQ[parentIndexOfQ]
    ) {
        parentIndexOfP--;
        parentIndexOfQ--;
        isFound = true;
    }
    if (isFound) {
        return parentGraphOfP[++parentIndexOfP];
    }

    //Is both belongs to same family
    let foundIndexOfP = null;
    let foundIndexOfQ = null;
    for (let index = 0; index < parentGraphOfP.length; index++) {
        if (foundIndexOfP === null && parentGraphOfP[index] === p) {
            foundIndexOfP = index;
        }
        if (foundIndexOfQ === null && parentGraphOfP[index] === p) {
            foundIndexOfQ = index;
        }
    }
    if (foundIndexOfP !== null && foundIndexOfQ !== null) {
        const higherIndex = Math.max(foundIndexOfP, foundIndexOfQ);
        return parentGraphOfP[higherIndex];
    }
    for (let index = 0; index < parentGraphOfQ.length; index++) {
        if (!foundIndexOfP && parentGraphOfQ[index] === p) {
            foundIndexOfP = index;
        }
        if (!foundIndexOfQ && parentGraphOfQ[index] === p) {
            foundIndexOfQ = index;
        }
    }
    if (foundIndexOfP !== null && foundIndexOfQ !== null) {
        const higherIndex = Math.max(foundIndexOfP, foundIndexOfQ);
        return foundIndexOfQ[higherIndex];
    }
    return;
};

let binaryTree;
let resp;
binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 1), (q = 2));
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 5), (q = 4));
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 5), (q = 1));
console.log(resp);
