var countDays = function (days, meetings) {
    let freeDays = 0;
    const obj = {};
    for (const [start, end] of meetings) {
        obj[start] = Math.max(obj[start] || -Infinity, end);
    }
    const bucketSort = Object.keys(obj).sort((a, b) => a - b);
    let meetingsIndex = 0;
    let meetingEndDay = 1;
    let lastMeetingEndDay = null;

    while (bucketSort[meetingsIndex]) {
        const meetingStartDay = bucketSort[meetingsIndex];
        meetingEndDay = Math.max(obj[bucketSort[meetingsIndex]], meetingEndDay);
        if (lastMeetingEndDay === null) {
            freeDays += meetingStartDay - 1;
        } else if (meetingStartDay - lastMeetingEndDay >= 1) {
            freeDays += meetingStartDay - lastMeetingEndDay - 1;
        }
        lastMeetingEndDay = meetingEndDay;
        meetingsIndex++;
    }
    if (days - lastMeetingEndDay >= 1) {
        freeDays += days - lastMeetingEndDay;
    }
    return freeDays;
};

console.log(
    countDays(
        (days = 16),
        (meetings = [
            [11, 14],
            [5, 7],
            [3, 10],
            [14, 14],
            [5, 13],
            [6, 8],
        ]),
    ) == 4,
);
console.log(
    countDays(
        (days = 10),
        (meetings = [
            [5, 7],
            [1, 3],
            [9, 10],
        ]),
    ) == 2,
);
console.log(
    countDays(
        (days = 5),
        (meetings = [
            [2, 4],
            [1, 3],
        ]),
    ) == 1,
);
console.log(countDays((days = 6), (meetings = [[1, 6]])) == 0);
