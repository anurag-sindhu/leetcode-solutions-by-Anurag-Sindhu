var maxCompatibilitySum = function (students, mentors) {
    const studentMapping = {};
    const mentorMapping = {};
    let compatibilityScore = 0;
    for (const student of students) {
        const onesCount = student.filter((value) => value).length;
        const zeroesCount = student.length - onesCount;
        if (!studentMapping[`${zeroesCount}_${onesCount}`]) {
            studentMapping[`${zeroesCount}_${onesCount}`] = 0;
        }
        studentMapping[`${zeroesCount}_${onesCount}`] += 1;
    }
    for (const mentor of mentors) {
        const onesCount = mentor.filter((value) => value).length;
        const zeroesCount = mentor.length - onesCount;
        if (!mentorMapping[`${zeroesCount}_${onesCount}`]) {
            mentorMapping[`${zeroesCount}_${onesCount}`] = 0;
        }
        mentorMapping[`${zeroesCount}_${onesCount}`] += 1;
    }
    for (const key in mentorMapping) {
        if (studentMapping[key]) {
            if (studentMapping[key] < mentorMapping[key]) {
                compatibilityScore += studentMapping[key] * students[0].length;
                mentorMapping[key] = mentorMapping[key] - studentMapping[key];
                studentMapping[key] = 0;
            } else if (studentMapping[key] === mentorMapping[key]) {
                compatibilityScore += studentMapping[key] * students[0].length;
                studentMapping[key] = 0;
                mentorMapping[key] = 0;
            } else {
                compatibilityScore += mentorMapping[key] * students[0].length;
                studentMapping[key] = studentMapping[key] - mentorMapping[key];
                mentorMapping[key] = 0;
            }
        }
    } // 0 0 1,  0,1,1
    for (const key in studentMapping) {
        if (mentorMapping[key]) {
            if (mentorMapping[key] < studentMapping[key]) {
                compatibilityScore += mentorMapping[key] * students[0].length;
                studentMapping[key] = studentMapping[key] - mentorMapping[key];
                mentorMapping[key] = 0;
            } else if (mentorMapping[key] === studentMapping[key]) {
                compatibilityScore += mentorMapping[key] * students[0].length;
                mentorMapping[key] = 0;
                studentMapping[key] = 0;
            } else {
                compatibilityScore += studentMapping[key] * students[0].length;
                mentorMapping[key] = mentorMapping[key] - studentMapping[key];
                studentMapping[key] = 0;
            }
        }
    }
    return compatibilityScore;
};

console.log(
    maxCompatibilitySum(
        (students = [
            [0, 0],
            [0, 0],
            [0, 0],
        ]),
        (mentors = [
            [1, 1],
            [1, 1],
            [1, 1],
        ]),
    ),
);
console.log(
    maxCompatibilitySum(
        (students = [
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 1],
        ]),
        (mentors = [
            [1, 0, 0],
            [0, 0, 1],
            [1, 1, 0],
        ]),
    ),
);
