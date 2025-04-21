var getLengthOfOptimalCompression = function (s, k) {
    const n = s.length;
    const dp = Array.from({ length: 110 }, () => Array(110).fill(9999));
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            let cnt = 0,
                del = 0;
            for (let l = i; l >= 1; l--) {
                if (s.charAt(l - 1) === s.charAt(i - 1)) cnt++;
                else del++;

                if (j - del >= 0) {
                    dp[i][j] = Math.min(
                        dp[i][j],
                        dp[l - 1][j - del] +
                            1 +
                            (cnt >= 100 ? 3 : cnt >= 10 ? 2 : cnt >= 2 ? 1 : 0),
                    );
                }
            }
            if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
        }
    }
    return dp[n][k];
};

console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 5)) == 2);
console.log(getLengthOfOptimalCompression((s = 'aabcc'), (k = 2)));
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 2)) == 4);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 3)) == 4);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 4)) == 3);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 5)) == 2);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 6)) == 2);
console.log(getLengthOfOptimalCompression((s = 'aabbaa'), (k = 2)));
console.log(getLengthOfOptimalCompression((s = 'aaaaaaaaaaa'), (k = 0)));
