var numUniqueEmails = function (emails) {
    const updatedEmail = [];
    for (const iterator of emails) {
        let email = '';
        let hasDomainStarted = false;
        let isPlusEncountered = false;
        for (let index = 0; index < iterator.length; index++) {
            if (iterator[index] === '@') {
                hasDomainStarted = true;
            }
            if (hasDomainStarted) {
                email += iterator[index];
                continue;
            }
            if (isPlusEncountered) {
                continue;
            }
            if (iterator[index] === '+') {
                isPlusEncountered = true;
            } else if (iterator[index] === '.') {
                continue;
            } else {
                email += iterator[index];
            }
        }
        updatedEmail.push(email);
    }
    const obj = {};
    for (const iterator of updatedEmail) {
        obj[iterator] = true;
    }
    return Object.keys(obj).length;
};

console.log(
    numUniqueEmails(
        (emails = [
            'test.email+alex@leetcode.com',
            'test.e.mail+bob.cathy@leetcode.com',
            'testemail+david@lee.tcode.com'
        ])
    )
);

console.log(
    numUniqueEmails(
        (emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])
    )
);
