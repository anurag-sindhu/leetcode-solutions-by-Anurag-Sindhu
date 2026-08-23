/**
 * https://youtu.be/ISIG3o-Xofg?t=1177
 */

function compress(str) {
    return str.replace(/(.)\1*/g, (match, char) => char + match.length);
}

var getLengthOfOptimalCompression1 = function (s, k) {
    const compressed = compress(s);
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

var getLengthOfOptimalCompression11 = function (s, k) {
    // Memoization map to prevent redundant calculations
    const memo = new Map();

    function start(finalIndex, k, prevChar, prevSameCharCount) {
        if (k < 0) {
            return Infinity;
        }
        if (finalIndex >= s.length) {
            return 0;
        }

        // Create a unique cache key for the current state
        const key = `${finalIndex},${k},${prevChar},${prevSameCharCount}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let resp;
        const currentChar = s[finalIndex];

        if (currentChar === prevChar) {
            const increment =
                prevSameCharCount === 1 || prevSameCharCount === 9 || prevSameCharCount === 99
                    ? 1
                    : 0;
            resp = increment + start(finalIndex + 1, k, currentChar, prevSameCharCount + 1);
        } else {
            // Option 1: Delete the current character
            const withDeletion = start(finalIndex + 1, k - 1, prevChar, prevSameCharCount);
            // Option 2: Keep the current character (adds 1 to the base length)
            const noDeletion = 1 + start(finalIndex + 1, k, currentChar, 1);

            resp = Math.min(withDeletion, noDeletion);
        }

        memo.set(key, resp);
        return resp; // Fixed: Crucial return statement
    }

    return start(0, k, '', 0); // Fixed: Added return here too
};

var getLengthOfOptimalCompression = function (s, k) {
    // Memoization map to prevent redundant calculations
    const memo = new Map();

    function start(finalIndex, k, prevChar, prevSameCharCount) {
        if (k < 0) {
            return Infinity;
        }
        if (finalIndex >= s.length) {
            return 0;
        }

        // Create a unique cache key for the current state
        const key = `${finalIndex},${k},${prevChar},${prevSameCharCount}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let resp;
        const currentChar = s[finalIndex];

        if (currentChar === prevChar) {
            const increment =
                prevSameCharCount === 1 || prevSameCharCount === 9 || prevSameCharCount === 99
                    ? 1
                    : 0;
            resp = increment + start(finalIndex + 1, k, currentChar, prevSameCharCount + 1);
        } else {
            // Option 1: Delete the current character
            const withDeletion = start(finalIndex + 1, k - 1, prevChar, prevSameCharCount);
            // Option 2: Keep the current character (adds 1 to the base length)
            const noDeletion = 1 + start(finalIndex + 1, k, currentChar, 1);

            resp = Math.min(withDeletion, noDeletion);
        }

        memo.set(key, resp);
        return resp; // Fixed: Crucial return statement
    }

    return start(0, k, '', 0); // Fixed: Added return here too
};

console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 2)) == 4);
console.log(getLengthOfOptimalCompression((s = 'aaaaaaaaaaa'), (k = 0)));
console.log(getLengthOfOptimalCompression((s = 'abcc'), (k = 2)));
console.log(getLengthOfOptimalCompression((s = 'aabcc'), (k = 2)));
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 5)) == 2);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 3)) == 4);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 4)) == 3);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 5)) == 2);
console.log(getLengthOfOptimalCompression((s = 'aaabcccd'), (k = 6)) == 2);
console.log(getLengthOfOptimalCompression((s = 'aabbaa'), (k = 2)));
