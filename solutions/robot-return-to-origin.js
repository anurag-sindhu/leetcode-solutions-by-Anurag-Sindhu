var judgeCircle = function(moves) {
	let initialXCoordinate = 0;
	let initialYCoordinate = 0;
	for (let index = 0; index < moves.length; index++) {
		if (moves[index] === 'L') {
			initialXCoordinate -= 1;
		} else if (moves[index] === 'R') {
			initialXCoordinate += 1;
		} else if (moves[index] === 'U') {
			initialYCoordinate += 1;
		} else {
			initialYCoordinate -= 1;
		}
	}
	if (initialXCoordinate === 0 && initialYCoordinate === 0) {
		return true;
	}
	return false;
};

console.log(judgeCircle((moves = 'UD')));
console.log(judgeCircle((moves = 'LL')));
