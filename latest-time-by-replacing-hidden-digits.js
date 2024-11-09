var maximumTime = function (time) {
  let maxHourFigure1 = `2`;
  let maxHourFigure2 = `3`;
  let maxSecondsFigure1 = `5`;
  let maxSecondsFigure2 = `9`;
  const splittedTime = time.split(':');
  const splittedHourTime = splittedTime[0].split('');
  const splittedSecondsTime = splittedTime[1].split('');
  let [hoursFigure1, hoursFigure2] = splittedHourTime;
  let [secondsFigure1, secondsFigure2] = splittedSecondsTime;
  if (hoursFigure1 === '?') {
    if (hoursFigure2 === '?' || hoursFigure2 <= 3) {
      hoursFigure1 = maxHourFigure1;
    } else {
      hoursFigure1 = `1`;
    }
  }
  if (hoursFigure2 === '?') {
    if (hoursFigure1 === `2`) {
      hoursFigure2 = maxHourFigure2;
    } else {
      hoursFigure2 = 9;
    }
  }
  if (secondsFigure1 === '?') {
    secondsFigure1 = maxSecondsFigure1;
  }
  if (secondsFigure2 === '?') {
    secondsFigure2 = maxSecondsFigure2;
  }
  return `${hoursFigure1}${hoursFigure2}:${secondsFigure1}${secondsFigure2}`;
};
console.log(maximumTime((time = '?4:03')));
console.log(maximumTime((time = '??:3?')));
console.log(maximumTime((time = '2?:?0')));
console.log(maximumTime((time = '0?:3?')));
console.log(maximumTime((time = '1?:22')));
