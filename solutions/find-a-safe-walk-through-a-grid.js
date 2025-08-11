function getNeighbors(array, rowIndex, columnIndex) {
    const neighbors = [];
    if (array[rowIndex] && array[rowIndex][columnIndex - 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex - 1,
        });
    }
    if (array[rowIndex] && array[rowIndex][columnIndex + 1] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex,
            columnIndex: columnIndex + 1,
        });
    }
    if (array[rowIndex - 1] && array[rowIndex - 1][columnIndex] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex - 1,
            columnIndex: columnIndex,
        });
    }
    if (array[rowIndex + 1] && array[rowIndex + 1][columnIndex] !== undefined) {
        neighbors.push({
            rowIndex: rowIndex + 1,
            columnIndex: columnIndex,
        });
    }
    return neighbors;
}

var findSafeWalk = function (grid, health) {
    let yMax = grid.length;
    xMax = grid[0].length;

    // memoization
    let dp = {};

    let journey = (y, x, health, visited) => {
        // boundary check
        if (x < 0 || x >= xMax || y < 0 || y >= yMax) return false;
        const key = `${y}_${x}`;
        // check if it is visited
        if (visited[key]) {
            return false;
        }

        // enough health
        if (health < 1) {
            return false;
        }

        if (dp[key] && dp[key][health]) {
            return dp[key][health];
        }

        // if the grid block is 1, decrement the health by 1
        if (grid[y][x] == 1) health -= 1;
        visited[key] = true;

        // check if it is the bottom-right corner
        if (y === yMax - 1 && x === xMax - 1 && health >= 1) {
            return true;
        }
        let foundPath =
            journey(y, x - 1, health, visited) ||
            journey(y - 1, x, health, visited) ||
            journey(y, x + 1, health, visited) ||
            journey(y + 1, x, health, visited);

        // once the visit finished undo visited and health
        visited[key] = false;
        if (grid[y][x] == 1) health += 1;

        // store the value to memoization
        dp[key][health] = foundPath;
        return dp[key][health];
    };

    return journey(0, 0, health, {});
};

console.log(
    findSafeWalk(
        (grid = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]),
        (health = 4),
    ) == false,
);

console.log(
    findSafeWalk(
        (grid = [
            [0, 1, 1, 0, 0, 0],
            [1, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0],
        ]),
        (health = 3),
    ) == false,
);
console.log(
    findSafeWalk(
        (grid = [
            [0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0],
        ]),
        (health = 1),
    ) == true,
);
console.log(
    findSafeWalk(
        (grid = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]),
        (health = 5),
    ) == true,
);
