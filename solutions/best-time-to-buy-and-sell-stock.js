var maxProfit1 = function(prices) {
	let least = Number.MAX_SAFE_INTEGER;
	let difference;
	let element;
	let profit = 0;
	for (let index = 0; index < prices.length; index++) {
		element = prices[index];
		if (element < least) {
			least = element;
		}

		difference = element - least;
		if (difference > profit) {
			profit = difference;
		}
	}
	return profit;
};

var maxProfit = function(prices) {
	let difference;
	let maxProfit = 0;
	for (let index = 0; index < prices.length - 1; index++) {
		for (let index1 = index + 1; index1 < prices.length; index1++) {
			difference = prices[index1] - prices[index];
			if (difference > maxProfit) {
				maxProfit = difference;
			}
		}
	}
	return maxProfit;
};

console.log(maxProfit1([ 7, 1, 5, 3, 6, 4 ]));
console.log(maxProfit1([ 1, 2 ]));
console.log(maxProfit1([ 7, 6, 4, 3, 1 ]));
console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ]));
console.log(maxProfit([ 7, 6, 4, 3, 1 ]));
