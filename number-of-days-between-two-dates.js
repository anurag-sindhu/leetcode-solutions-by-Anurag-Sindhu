function daysBetweenDates(date1, date2) {
  const date1Updated = new Date(date1);
  const date2Updated = new Date(date2);
  const diffTime = Math.abs(date2Updated - date1Updated);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

console.log(daysBetweenDates((date1 = '2020-01-15'), (date2 = '2019-12-31')));
console.log(daysBetweenDates((date1 = '2019-06-29'), (date2 = '2019-06-30')));
console.log(daysBetweenDates('31-12-2021', '02-01-2022'));
console.log(daysBetweenDates('01-01-2022', '05-05-2022'));
console.log(daysBetweenDates('11-01-2022', '25-01-2022'));
console.log(daysBetweenDates('01-01-2022', '05-02-2022'));
console.log(daysBetweenDates('11-01-2022', '31-12-2025'));
console.log(daysBetweenDates('11-01-2022', '25-02-2025'));
