function isInterleave(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;
    const l = s3.length;

    if (m + n !== l) {
        return false;
    }

    // Initialize a 2D array filled with false
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;

    // Fill the first column
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // Fill the first row
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
                (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }

    return dp[m][n];
}

console.log(isInterleave((s1 = 'aabcc'), (s2 = 'dbbca'), (s3 = 'aadbbbaccc')) === false);
console.log(isInterleave((s1 = 'a'), (s2 = 'b'), (s3 = 'ab')) === true);
console.log(isInterleave((s1 = 'aabcc'), (s2 = 'dbbca'), (s3 = 'aadbbcbcac')) === true);
console.log(isInterleave('anurag', 'sindhu', 'anuragsindhu') === true);
console.log(isInterleave('a', '', 'c') === false);
console.log(isInterleave((s1 = ''), (s2 = ''), (s3 = '')) === true);
console.log(
    isInterleave(
        'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
        'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
        'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb',
    ) === false,
);
console.log(isInterleave((s1 = 'a'), (s2 = 'b'), (s3 = 'a')) === false);
