var findOrder = function (numCourses, prerequisites) {
    const output = [];
    if (!prerequisites.length) {
        while (numCourses) {
            output.push(--numCourses);
        }
        return output;
    }

    let initCourse = null;

    const config = (function () {
        const obj = {};
        for (const [forCourse, preReqCourse] of prerequisites) {
            if (initCourse === null) {
                initCourse = forCourse;
            }
            if (!obj[forCourse]) {
                obj[forCourse] = {};
            }
            obj[forCourse][preReqCourse] = true;
        }
        return obj;
    })();

    const courseCompleted = {};
    function completeCourse(course = null, expectingCourse = {}) {
        if (course !== null) {
            if (courseCompleted[course]) {
                return;
            }
            if (!config[course]) {
                courseCompleted[course] = true;
                output.push(course);
                return;
            }
        }

        for (const childCourse in config[course]) {
            if (expectingCourse[childCourse] && !courseCompleted[childCourse]) {
                throw [];
            }
            expectingCourse[childCourse] = true;
            completeCourse(childCourse, expectingCourse);
            if (!courseCompleted[childCourse]) {
                output.push(childCourse);
                courseCompleted[childCourse] = true;
            }
        }
    }
    for (const parentCourse in config) {
        if (!courseCompleted[parentCourse]) {
            try {
                completeCourse(parentCourse);
            } catch (err) {
                return err;
            }
        }
        if (!courseCompleted[parentCourse]) {
            output.push(parentCourse);
            courseCompleted[parentCourse] = true;
        }
    }
    if (numCourses !== output.length) {
        const coursesDone = (function () {
            const config = {};
            for (const iterator of output) {
                config[iterator] = true;
            }
            return config;
        })();
        for (let index = 0; index < numCourses; index++) {
            if (!coursesDone[index]) {
                output.push(index);
            }
        }
    }
    return output;
};

console.log(
    findOrder(
        (numCourses = 3),
        (prerequisites = [
            [0, 1],
            [0, 2],
            [1, 2]
        ])
    )
);
console.log(findOrder((numCourses = 5), (prerequisites = [[1, 0]])));
console.log(findOrder((numCourses = 1), (prerequisites = [])));
console.log(
    findOrder(
        (numCourses = 4),
        (prerequisites = [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2]
        ])
    )
);

console.log(
    findOrder(2, [
        [0, 1],
        [1, 0]
    ])
); //[1,0]

console.log(findOrder(2, [[0, 1]])); //[1,0]

console.log(findOrder((numCourses = 2), (prerequisites = [[1, 0]])));
