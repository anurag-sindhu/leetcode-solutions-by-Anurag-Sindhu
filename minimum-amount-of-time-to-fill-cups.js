var fillCups = function(amount) {
	amount.sort((a, b) => b - a);
	let cold = amount[0];
	let warm = amount[1];
	let hot = amount[2];
	let seconds = 0;
	while (cold > 0 || warm > 0 || hot > 0) {
		amount[0] = amount[0] - 1;
		amount[1] = amount[1] - 1;
		amount.sort((a, b) => b - a);
		cold = amount[0];
		warm = amount[1];
		hot = amount[2];
		seconds++;
	}
	return seconds;
};

console.log(fillCups((amount = [ 1, 4, 2 ])));
console.log(fillCups((amount = [ 5, 4, 4 ])));
