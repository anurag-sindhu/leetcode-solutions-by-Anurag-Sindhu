function findDifferenceInMins(from, to) {
    let fromMins;
    let fromHour;
    let toMins;
    let toHour;
    if (String(from).length === 1) {
        fromMins = `0${from}`;
        fromHour = `00`;
    } else if (String(from).length === 2) {
        fromMins = String(from);
        fromHour = `00`;
    } else if (String(from).length === 3) {
        fromMins = String(from).substring(1);
        fromHour = String(from).substring(0, 1);
    } else if (String(from).length === 4) {
        fromMins = String(from).substring(2);
        fromHour = String(from).substring(0, 2);
    }
    if (String(to).length === 1) {
        toMins = `0${to}`;
        toHour = `00`;
    } else if (String(to).length === 2) {
        toMins = String(to);
        toHour = `00`;
    } else if (String(to).length === 3) {
        toMins = String(to).substring(1);
        toHour = String(to).substring(0, 1);
    } else if (String(to).length === 4) {
        toMins = String(to).substring(2);
        toHour = String(to).substring(0, 2);
    }
    if (fromHour === toHour) {
        return Number(toMins) - Number(fromMins);
    } else {
        return (
            60 * (Number(toHour) - Number(fromHour) - 1) + 60 - Number(fromMins) + Number(toMins)
        );
    }
}
// findDifferenceInMins(1031, 1103);
var findHighAccessEmployees = function (access_times) {
    let maxLength = [];
    const obj = {};
    for (const [name, time] of access_times) {
        if (!obj[name]) {
            obj[name] = [];
        }
        obj[name].push(Number(time));
    }
    for (const key in obj) {
        obj[key] = obj[key].sort((a, b) => a - b);
    }
    for (const key in obj) {
        if (obj[key].length >= 3) {
            let firstIndex = 0;
            let secondIndex = firstIndex + 1;
            while (firstIndex < obj[key].length - 1 - 1 && secondIndex < obj[key].length) {
                const differenceInMins = findDifferenceInMins(
                    obj[key][firstIndex],
                    obj[key][secondIndex],
                );
                if (differenceInMins >= 60) {
                    firstIndex += 1;
                    secondIndex = firstIndex + 1;
                } else {
                    const diff = secondIndex - firstIndex;
                    if (diff >= 2) {
                        maxLength.push(key);
                        break;
                    }
                    secondIndex += 1;
                }
            }
        }
    }
    return maxLength;
};
console.log(
    findHighAccessEmployees(
        (access_times = [
            ['gkzwdoev', '0009'],
            ['gkzwdoev', '0507'],
            ['gkzwdoev', '0131'],
        ]),
    ),
); //["ininvzhtcx"]
console.log(
    findHighAccessEmployees(
        (access_times = [
            ['eazbkekis', '1034'],
            ['relf', '1126'],
            ['afwpabwyds', '1114'],
            ['afwpabwyds', '1105'],
            ['relf', '1031'],
            ['afwpabwyds', '1010'],
            ['vzqpz', '1047'],
            ['relf', '1103'],
        ]),
    ),
); //["relf"]

console.log(
    findHighAccessEmployees(
        (access_times = [
            ['iudjn', '0812'],
            ['lnlqp', '0848'],
            ['lnlqp', '0758'],
            ['iudjn', '0809'],
            ['jwgrgxox', '0848'],
            ['lnlqp', '0901'],
            ['jwgrgxox', '0807'],
            ['dk', '0824'],
            ['dk', '0807'],
        ]),
    ),
); //[]

console.log(
    findHighAccessEmployees(
        (access_times = [
            ['fnlmbcedu', '0052'],
            ['fnlmbcedu', '0103'],
            ['fnlmbcedu', '0055'],
        ]),
    ),
); //["fnlmbcedu"]

console.log(
    findHighAccessEmployees(
        (access_times = [
            ['a', '0549'],
            ['b', '0457'],
            ['a', '0532'],
            ['a', '0621'],
            ['b', '0540'],
        ]),
    ),
);

console.log(
    findHighAccessEmployees(
        (access_times = [
            ['d', '0002'],
            ['c', '0808'],
            ['c', '0829'],
            ['e', '0215'],
            ['d', '1508'],
            ['d', '1444'],
            ['d', '1410'],
            ['c', '0809'],
        ]),
    ),
);

console.log(
    findHighAccessEmployees(
        (access_times = [
            ['cd', '1025'],
            ['ab', '1025'],
            ['cd', '1046'],
            ['cd', '1055'],
            ['ab', '1124'],
            ['ab', '1120'],
        ]),
    ),
);
