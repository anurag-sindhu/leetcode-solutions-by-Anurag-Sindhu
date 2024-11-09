var numberOfRounds = function (loginTime, logoutTime) {
    let output = 0;
    let [loginTimeHour, loginTimeMinute] = loginTime.split(':');
    let [logoutTimeHour, logoutTimeMinute] = logoutTime.split(':');
    loginTimeHour = Number(loginTimeHour);
    loginTimeMinute = Number(loginTimeMinute);
    logoutTimeHour = Number(logoutTimeHour);
    logoutTimeMinute = Number(logoutTimeMinute);
    if (Number(loginTimeHour) > Number(logoutTimeHour)) {
        const totalPureHoursLeftBeforeDayEnd = 23 - loginTimeHour;
        const totalPureMinutesLeftBeforeDayEnd = 60 - Math.ceil(loginTimeMinute / 15) * 15;
        const totalPureHoursLeftAfterDayEnd = logoutTimeHour;
        const totalPureMinutesLeftAfterDayEnd = Math.floor(logoutTimeMinute / 15) * 15;
        output += Math.floor(
            (totalPureHoursLeftBeforeDayEnd * 60 + totalPureMinutesLeftBeforeDayEnd) / 15,
        );
        output += Math.floor(
            (totalPureHoursLeftAfterDayEnd * 60 + totalPureMinutesLeftAfterDayEnd) / 15,
        );
    } else if (Number(loginTimeHour) < Number(logoutTimeHour)) {
        const totalPureHours =
            loginTimeMinute === 0
                ? logoutTimeHour - loginTimeHour
                : logoutTimeHour - loginTimeHour - 1;
        let totalPureMinutes = Math.floor(logoutTimeMinute / 15) * 15;
        if (loginTimeMinute !== 0) {
            totalPureMinutes += 60 - Math.ceil(loginTimeMinute / 15) * 15;
        }
        output += Math.floor((totalPureHours * 60 + totalPureMinutes) / 15);
    } else {
        if (loginTimeMinute > logoutTimeMinute) {
            output += (23 * 60) / 15;
        }
        const minStartTime = Math.ceil(loginTimeMinute / 15) * 15;
        if (minStartTime === 60) {
            return numberOfRounds(`loginTime`, logoutTime);
        }
        const minStartTimeForEndMinutes = Math.floor(logoutTimeMinute / 15) * 15;
        if (minStartTimeForEndMinutes > minStartTime) {
            output += (minStartTime - minStartTimeForEndMinutes) / 15;
        } else {
            const totalMins = 60 - minStartTime + minStartTimeForEndMinutes;
            if (totalMins > 0) {
                output += (60 - minStartTime + minStartTimeForEndMinutes) / 15;
            }
        }
    }
    return output;
};
console.log(numberOfRounds('00:47', '00:57') === 0);
console.log(numberOfRounds('23:48', '23:16') === 93);
console.log(numberOfRounds('00:01', '00:00') === 95);
console.log(numberOfRounds('00:00', (logoutTime = '23:59')) === 95);
console.log(numberOfRounds('21:30', (logoutTime = '03:00')) === 22);
console.log(numberOfRounds((loginTime = '09:31'), (logoutTime = '10:14')) === 1);
console.log(numberOfRounds('23:46', '00:01') === 0);
console.log(numberOfRounds((loginTime = '09:31'), (logoutTime = '11:11')) === 5);
console.log(numberOfRounds((loginTime = '09:31'), (logoutTime = '10:31')) === 3);
