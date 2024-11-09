function isLeapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
var dayOfYear = function(date) {
	const splittedDate = date.split('-');
	const month = Number(splittedDate[1]);
	const year = Number(splittedDate[0]);
	const currentDate = Number(splittedDate[2]);
	const monthDaysConfig = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	let days = 0;
	for (let index = 0; index < month - 1; index++) {
		days += monthDaysConfig[index];
		if (index === 1 && isLeapYear(year)) {
			days += 1;
		}
	}
	days += currentDate;
	return days;
};

console.log(dayOfYear('2019-01-09'));
console.log(dayOfYear('2019-02-10'));
