//depth first search
function dfs(matrix, i, j, visited = {}) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const key = `${i}_${j}`;
    if (i < 0 || i >= rows || j < 0 || j >= cols || visited[key]) {
        return 0;
    }

    visited[key] = true;
    const up = dfs(matrix, i - 1, j, visited); // up
    const down = dfs(matrix, i + 1, j, visited); // down
    const left = dfs(matrix, i, j - 1, visited); // left
    const right = dfs(matrix, i, j + 1, visited); // right
    const allDirectionMin = Math.max(up, down, left, right);
    if (matrix[i][j]) {
        return 1 + allDirectionMin;
    }
    return allDirectionMin;
}
dfs(
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    0,
    0,
);
dfs(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    0,
    0,
);
