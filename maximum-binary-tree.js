class Node {
  constructor(data = null) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.tree = null;
  }
  create(data, tree = null) {
    if (!data || !data.length) {
      return null;
    }
    const getMax = function (num) {
      let max = -Infinity;
      let ind = null;
      for (let index = 0; index < num.length; index++) {
        if (max < num[index]) {
          max = num[index];
          ind = index;
        }
      }
      return { maximum: max, index: ind };
    };
    const { maximum, index } = getMax(data);
    tree = new Node(maximum);
    tree.left = this.create(data.slice(0, index), tree);
    tree.right = this.create(data.slice(index + 1), tree);
    return tree;
  }
}

var constructMaximumBinaryTree = function (nums) {
  const resp = new BinaryTree().create(nums);
  return resp;
};
console.log(constructMaximumBinaryTree((nums = [3, 2, 1, 6, 0, 5])));
//[6,3,5,null,2,0,null,null,1]
//[6,3,5,0,2,0,0,null,null,0,1,0,0,null,null,null,null,0,0]
console.log(constructMaximumBinaryTree((nums = [3, 2, 1])));
