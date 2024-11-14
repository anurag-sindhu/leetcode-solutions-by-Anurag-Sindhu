
let totalOddNUmbers = 0;
for (let index = 0; index < 10; index++) {
  if(index % 2 === 0) {
    break;
  } else {
    totalOddNUmbers++;
  }
}

console.log(totalOddNUmbers)
