var angleClock = function (hour, minutes) {
  let minuteDegree = ((360 / 60) * minutes) % 360;
  let hourDegree = (((360 / 12) * hour) % 360) + 360 / 12 / (60 / minutes);
  let absoluterDifference1 = Math.abs(hourDegree - minuteDegree);
  let res;
  if (minuteDegree > hourDegree) {
    const minutesLeftToTouchReference = 360 - minuteDegree;
    const afterGap = (hourDegree + minutesLeftToTouchReference) % 360;
    res = Math.min(absoluterDifference1 % 360, afterGap % 360);
  } else {
    const hourLeftToTouchReference = 360 - hourDegree;
    const afterGap = (minuteDegree + hourLeftToTouchReference) % 360;
    res = Math.min(absoluterDifference1 % 360, afterGap % 360);
  }
  return res;
};

console.log(angleClock(8, 7) === 158.5);
console.log(angleClock(1, 57) === 76.5);
console.log(angleClock((hour = 12), (minutes = 30)) === 165);
console.log(angleClock((hour = 3), (minutes = 30)) === 75);
console.log(angleClock((hour = 3), (minutes = 15)) === 7.5);
console.log(angleClock(6, 5) === 152.5);
console.log(angleClock(12, 0) === 0.0);
