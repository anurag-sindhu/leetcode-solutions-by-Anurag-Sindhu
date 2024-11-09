var continuousSubarrays = function (nums) {
    let tempBiggestIndex = 0;
    let tempSmallestIndex = 0;
    let exploredTillInPreviousJourneyIndex = null;
    let exploredJourneyStartedIndex = null;
    let tempLength = 0;
    let count = 0;
    let secondaryPointer = 0;
    let primaryPointer = 0;
    for (primaryPointer = 0; primaryPointer < nums.length; primaryPointer++) {
        const tempBiggestIndexCondition =
            Math.abs(nums[primaryPointer] - nums[tempBiggestIndex]) <= 2;
        const tempSmallestIndexCondition =
            Math.abs(nums[primaryPointer] - nums[tempSmallestIndex]) <= 2;
        if (tempBiggestIndexCondition && tempSmallestIndexCondition) {
            tempBiggestIndex =
                nums[primaryPointer] > nums[tempBiggestIndex] ? primaryPointer : tempBiggestIndex;
            tempSmallestIndex =
                nums[primaryPointer] < nums[tempSmallestIndex] ? primaryPointer : tempSmallestIndex;
            tempLength++;
        } else {
            if (exploredTillInPreviousJourneyIndex !== null) {
                count -=
                    ((exploredTillInPreviousJourneyIndex - exploredJourneyStartedIndex + 1) *
                        (exploredTillInPreviousJourneyIndex -
                            exploredJourneyStartedIndex +
                            1 +
                            1)) /
                    2;
            }
            exploredTillInPreviousJourneyIndex = primaryPointer - 1;
            primaryPointer = ++secondaryPointer;
            exploredJourneyStartedIndex = primaryPointer;
            tempBiggestIndex = primaryPointer;
            tempSmallestIndex = primaryPointer;
            count += (tempLength * (tempLength + 1)) / 2;
            tempLength = 1;
        }
    }
    if (exploredTillInPreviousJourneyIndex !== null) {
        count -=
            ((exploredTillInPreviousJourneyIndex - exploredJourneyStartedIndex + 1) *
                (exploredTillInPreviousJourneyIndex - exploredJourneyStartedIndex + 1 + 1)) /
            2;
    }
    count += (tempLength * (tempLength + 1)) / 2;
    return count;
};

console.log(continuousSubarrays((nums = [5, 4, 3, 4, 3, 2])) === 20);
console.log(continuousSubarrays((nums = [5, 4, 2, 4])) === 8);
console.log(continuousSubarrays((nums = [5, 4, 3, 4, 3, 2, 3])) === 26);
console.log(continuousSubarrays((nums = [1, 2, 3])) === 6);
