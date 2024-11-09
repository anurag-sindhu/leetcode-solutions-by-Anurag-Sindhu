function generateTitle(heading) {
    const static = `Images👌 🏆O(N)❤️ Javascript🎯 Memory👀95%🕕 ++Explanation✍️🔴🔥✅💪🙏👉`;
    let title = `❇ ${heading} ${static}`;
    title = title.substring(0, 100);
    console.log(title.length);
    return title;
}
console.log(generateTitle(`minimum-number-of-food-buckets-to-feed-the-hamsters`));
//tried-after-2-years-
/**
 * constant, 
linear
javascript
Tree
Dynamic programming
Subarray
Recursion
Min heap
Max heap
Priority queue
Time Complexity: O(N)
Space Complexity: O(N)
 */
