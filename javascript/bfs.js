//breadth first search

function bfs(matrix, startRow, startCol) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = {};
    const queue = [];

    // Directions: up, down, left, right

    // Start from (startRow, startCol)
    queue.push([startRow, startCol]);
    visited[`${startRow}_${startCol}`] = true;

    while (queue.length > 0) {
        const [i, j] = queue.shift();
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        for (const [di, dj] of directions) {
            const newRow = i + di;
            const newCol = j + dj;

            // Check if within bounds and not visited
            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                !visited[`${newRow}_${newCol}`]
            ) {
                queue.push([newRow, newCol]);
                visited[`${newRow}_${newRow}`] = true;
            }
        }
        console.log('object');
    }
    return;
}

bfs(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    0,
    0,
);
