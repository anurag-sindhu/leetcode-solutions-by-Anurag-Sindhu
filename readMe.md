👨‍💻 Anurag Sindhu's LeetCode Solutions 🧩
Hi there! 👋

I'm Anurag Sindhu, a passionate Software Developer currently working with Aditya Birla Group's TMRW House of Brands in Bangalore 🌆. Having spent nearly 11 years on and off in this amazing city, it feels like home! ❤️

This repository is where I share my journey solving LeetCode problems. 🚀 All solutions are written in JavaScript 💻 because that's my go-to language for tackling problems.

📂 Repository Contents
🔹 LeetCode Problem Solutions
Organized into folders based on difficulty: Easy, Medium, and Hard.

🔹 File Naming Convention
Each file is named using the format:
<problem-title>.js
Example: two-sum.js

🔹 Code Highlights

🚀 Efficient solutions using optimal algorithms
🧠 Focus on clean and maintainable code
✏️ Comments for better understanding
📌 Why This Repository?
✨ To Learn and Share:
This is my personal space to practice, grow, and share my solutions with fellow developers. Feel free to browse through, get inspired, and contribute!

✨ JavaScript Love:
I stick to JavaScript for all my solutions, showcasing its versatility for problem-solving.

🌟 Let's Connect!
If you'd like to discuss problem-solving strategies, collaborate on a project, or just say hi, feel free to reach out:
📧 sindhuanurag2@gmail.com

Happy coding! 🚀
Below are my social links:

- Personal Website🌐: https://anuragsindhu.com
- Market Website🌐: http://market.anuragsindhu.com
- LeetCode⭐: https://www.leetcode.com/anurag-sindhu
- GitHub</>: https://www.github.com/anurag-sindhu
- Stack Overflow🦄: https://www.stackoverflow.com/users/9768827/anurag-sindhu
- HackerRank👨‍💻: https://www.hackerrank.com/anurag_sindhu
- Medium👨‍💻: https://www.medium.com/@anurag-sindhu
- LinkedIn🌐: https://www.linkedin.com/in/-anurag-sindhu/

const BinarySearchTree = require('../javascript/binary-search-tree.js');
const binarySearchTree = new BinarySearchTree();
for (const iterator of [1, null, 2, 3]) {
binarySearchTree.add(iterator);
}
const resp = preorderTraversal(binarySearchTree.tree);
console.log(resp);
