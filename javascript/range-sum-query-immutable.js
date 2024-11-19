var NumArray = function (nums) {
    this.leftToRightSum = (function (nums) {
        let arr = [];
        let tempSum = 0;
        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            tempSum += element;
            arr.push(tempSum);
        }
        return arr;
    })(nums);
    this.RightToLeftSum = (function (nums) {
        let arr = [];
        let tempSum = 0;
        for (let index = nums.length - 1; index >= 0; index--) {
            const element = nums[index];
            tempSum += element;
            arr.push(tempSum);
        }
        return arr;
    })(nums);
};

NumArray.prototype.sumRange = function (left, right) {
    return this.leftToRightSum[right] - (this.leftToRightSum[left - 1] || 0);
};

let obj;
let operations;
let values;
operations = ['NumArray', 'sumRange', 'sumRange', 'sumRange'];
values = [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]];

obj = new NumArray(...values[0]);

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[-1,null,null,null,null,1,null,2]
}
