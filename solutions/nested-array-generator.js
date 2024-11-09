var inorderTraversal = function* (arr) {
    function inorderTraversalHelper() { }
    for (let index = 0; index < arr.length; index++) {
        yield inorderTraversalHelper()
    }
    inorderTraversalHelper()
};
const gen = inorderTraversal([1, [2, 3]]);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3