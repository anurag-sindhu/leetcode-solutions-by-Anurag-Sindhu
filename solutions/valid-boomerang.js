function inLine(PointA, PointB, PointC) {
	//slop
	if (PointA[0] === PointB[0] && PointA[0] === PointC[0] && PointB[0] === PointC[0]) {
		return true;
	}
	if (PointA[1] === PointB[1] && PointA[1] === PointC[1] && PointB[1] === PointC[1]) {
		return true;
	}
	const slopOfAb = (PointB[1] - PointA[1]) / (PointB[0] - PointA[0]);
	const slopOfAc = (PointC[1] - PointA[1]) / (PointC[0] - PointA[0]);
	const slopOfBc = (PointC[1] - PointB[1]) / (PointC[0] - PointB[0]);
	if (slopOfAb === slopOfAc && slopOfBc === slopOfAc && slopOfAb === slopOfBc) {
		return true;
	}
	return false;
}

var isBoomerang = function(points) {
	const encountered = {};
	for (let index = 0; index < points.length; index++) {
		const [ xPoint, yPoint ] = points[index];
		const key = `${xPoint}_${yPoint}`;
		if (encountered[key]) {
			return false;
		}
		encountered[key] = true;
	}
	const areInline = inLine(points[0], points[1], points[2]);
	return !areInline;
};

console.log(isBoomerang((points = [ [ 73, 31 ], [ 73, 19 ], [ 73, 45 ] ])) === false);
console.log(isBoomerang((points = [ [ 0, 1 ], [ 0, 1 ], [ 2, 1 ] ])) === false);
console.log(isBoomerang((points = [ [ 0, 0 ], [ 1, 1 ], [ 1, 1 ] ])) === false);
console.log(isBoomerang((points = [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ])) === false);
console.log(isBoomerang((points = [ [ 0, 0 ], [ 1, 2 ], [ 0, 1 ] ])) === true);
console.log(isBoomerang((points = [ [ 1, 1 ], [ 2, 3 ], [ 3, 2 ] ])) === true);
console.log(isBoomerang((points = [ [ 0, 0 ], [ 1, 0 ], [ 2, 2 ] ])) === true);
