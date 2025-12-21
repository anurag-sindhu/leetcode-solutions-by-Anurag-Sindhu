var findOrder = function (numCourses, prerequisites) {
    const courseStatus = {};
    const courseMustBeCompleted = {};

    for (const [mainCourse, prerequisiteCourse] of prerequisites) {
        if (!courseMustBeCompleted[mainCourse]) {
            courseMustBeCompleted[mainCourse] = [];
        }
        courseMustBeCompleted[mainCourse].push(prerequisiteCourse);
    }

    let canPossible = true;
    const arr = [];

    function completingCourses(index) {
        if (courseStatus[index] === -1) {
            canPossible = false;
            return false;
        }
        if (courseStatus[index] === 1) {
            return true;
        }
        if (canPossible === false) {
            return false;
        }
        courseStatus[index] = -1;
        const courseNeedToComplete = courseMustBeCompleted[index];
        if (Array.isArray(courseNeedToComplete)) {
            for (const element of courseNeedToComplete) {
                completingCourses(element);
            }
        }
        arr.push(index);
        courseStatus[index] = 1;
        return true;
    }

    for (let index = 0; index < numCourses; index++) {
        completingCourses(index, {});
        if (canPossible == false) {
            return [];
        }
    }
    return arr;
};

console.log(
    findOrder(
        (numCourses = 4),
        (prerequisites = [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2],
        ]),
    ),
);
console.log(
    findOrder(
        (numCourses = 3),
        (prerequisites = [
            [0, 1],
            [0, 2],
            [1, 2],
        ]),
    ),
);
console.log(findOrder((numCourses = 5), (prerequisites = [[1, 0]])));
console.log(findOrder((numCourses = 1), (prerequisites = [])));

console.log(
    findOrder(2, [
        [0, 1],
        [1, 0],
    ]),
); //[1,0]

console.log(findOrder(2, [[0, 1]])); //[1,0]

console.log(findOrder((numCourses = 2), (prerequisites = [[1, 0]])));
