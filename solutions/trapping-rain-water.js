var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let water = 0;
    /**
     * To keep water, we have to have a bar on the left side and on the right side. Between them, we can keep water.
     */
    while (left < right) {
        //on left check possibility of next element, because current one is gone as wall
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            //on right check possibility of previous element, because current one is gone as wall
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }

    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([5, 4, 1, 2]) == 1);
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([0, 2, 0]));
console.log(trap([4, 2, 3]));
console.log(trap([1]));
console.log(trap([3, 1, 2, 4, 0, 1, 3, 2]));
