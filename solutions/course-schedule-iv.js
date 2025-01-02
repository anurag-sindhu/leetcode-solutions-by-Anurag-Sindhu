const { areTwoArrayEqual } = require('../javascript/compare-two-array');

var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    /**
ai first if you want to take course bi.
uj is a prerequisite of course vj or not.
     */
    const obj = {};
    for (const [a, b] of prerequisites) {
        if (obj[b] == undefined) {
            obj[b] = {};
        }
        obj[b][a] = true;
    }
    const out = [];

    function isPrerequisite(u, v) {
        if (!obj[v]) {
            return false;
        }
        for (const key in obj[v]) {
            if (obj[v][u]) {
                return true;
            } else {
                return isPrerequisite(u, key);
            }
        }
        return false;
    }
    for (const [u, v] of queries) {
        // uj is a prerequisite of course vj or not.
        out.push(isPrerequisite(u, v));
    }
    return out;
};

console.log(
    areTwoArrayEqual(
        checkIfPrerequisite(
            7,
            [
                [2, 3],
                [2, 1],
                [2, 0],
                [3, 4],
                [3, 6],
                [5, 1],
                [5, 0],
                [1, 4],
                [1, 0],
                [4, 0],
                [0, 6],
            ],
            [
                [3, 0],
                [6, 4],
                [5, 6],
                [2, 6],
                [2, 3],
                [5, 6],
                [4, 0],
                [2, 6],
                [3, 5],
                [5, 3],
                [1, 6],
                [1, 0],
                [3, 5],
                [6, 5],
                [2, 3],
                [3, 0],
                [3, 4],
                [3, 4],
                [2, 5],
                [0, 3],
                [4, 0],
                [6, 4],
                [5, 0],
                [6, 5],
                [5, 6],
                [6, 5],
                [1, 0],
                [3, 4],
                [1, 5],
                [1, 4],
                [3, 6],
                [0, 1],
                [1, 2],
                [5, 1],
                [5, 3],
                [5, 3],
                [3, 4],
                [5, 4],
                [5, 4],
                [5, 3],
            ],
        ),
        [
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            true,
            true,
            false,
            false,
            true,
            true,
            true,
            true,
            false,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            false,
            false,
            true,
            false,
            false,
            true,
            true,
            true,
            false,
        ],
    ),
);
console.log(
    areTwoArrayEqual(
        checkIfPrerequisite(
            3,
            [
                [1, 0],
                [2, 0],
            ],
            [
                [0, 1],
                [2, 0],
            ],
        ),
        [false, true],
    ),
);

console.log(
    areTwoArrayEqual(
        checkIfPrerequisite(
            5,
            [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
            ],
            [
                [0, 4],
                [4, 0],
                [1, 3],
                [3, 0],
            ],
        ),
        [true, false, true, false],
    ),
);

console.log(
    areTwoArrayEqual(
        checkIfPrerequisite(
            (numCourses = 3),
            (prerequisites = [
                [1, 2],
                [1, 0],
                [2, 0],
            ]),
            (queries = [
                [1, 0],
                [1, 2],
            ]),
        ),
        [true, true],
    ),
);

console.log(
    areTwoArrayEqual(
        checkIfPrerequisite(
            (numCourses = 2),
            (prerequisites = []),
            (queries = [
                [1, 0],
                [0, 1],
            ]),
        ),
        [false, false],
    ),
);

console.log(
    areTwoArrayEqual(
        checkIfPrerequisite(
            (numCourses = 2),
            (prerequisites = [[1, 0]]),
            (queries = [
                [0, 1],
                [1, 0],
            ]),
        ),
        [false, true],
    ),
);
