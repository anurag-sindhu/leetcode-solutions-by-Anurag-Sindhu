var predictTheWinner = function (nums) {
    let maxPlayer1Score = 0;
    let maxPlayer2Score = 0;
    function helper(
        nums,
        leftSideIndex = 0,
        rightSideIndex = nums.length - 1,
        player1Score = 0,
        player2Score = 0,
        isPlayer1Turn = true,
        player1ScoreArr = [],
        player2ScoreArr = [],
    ) {
        if (leftSideIndex > rightSideIndex) {
            maxPlayer1Score = Math.max(maxPlayer1Score, player1Score);
            maxPlayer2Score = Math.max(maxPlayer2Score, player2Score);
            return;
        }
        if (isPlayer1Turn) {
            helper(
                nums,
                leftSideIndex + 1,
                rightSideIndex,
                player1Score + nums[leftSideIndex],
                player2Score,
                false,
                [...player1ScoreArr, nums[leftSideIndex]],
                player2ScoreArr,
            );
            helper(
                nums,
                leftSideIndex,
                rightSideIndex - 1,
                player1Score + nums[rightSideIndex],
                player2Score,
                false,
                [...player1ScoreArr, nums[rightSideIndex]],
                player2ScoreArr,
            );
        } else {
            helper(
                nums,
                leftSideIndex + 1,
                rightSideIndex,
                player1Score,
                player2Score + nums[leftSideIndex],
                true,
                player1ScoreArr,
                [...player2ScoreArr, nums[leftSideIndex]],
            );
            helper(
                nums,
                leftSideIndex,
                rightSideIndex - 1,
                player1Score,
                player2Score + nums[rightSideIndex],
                true,
                player1ScoreArr,
                [...player2ScoreArr, nums[rightSideIndex]],
            );
        }
    }
    helper(nums);
    return maxPlayer1Score >= maxPlayer2Score;
};

console.log(predictTheWinner((nums = [1, 5, 2])) === false);
console.log(predictTheWinner((nums = [2, 4, 55, 6, 8])) === false);
console.log(predictTheWinner((nums = [0])) === true);
console.log(predictTheWinner((nums = [1, 5, 233, 7])) === true);
