var countPairs = function(numCourses, edges) {
	const config = (function() {
		const obj = {};
		for (const [ from, to ] of edges) {
			if (!obj[from]) {
				obj[from] = {};
			}
			if (!obj[to]) {
				obj[to] = {};
			}
			obj[from][to] = true;
			obj[to][from] = true;
		}
		return obj;
	})();

	const dynamicProgramming = {};
	function canReachNode(originalFromNode, fromNode, toNode, hasExplored) {
		if (originalFromNode > Number(fromNode)) {
			return dynamicProgramming[`${fromNode}_${toNode}`] || false;
		}
		if (!hasExplored[fromNode]) {
			hasExplored[fromNode] = true;
			for (const key in config[fromNode]) {
				if (Number(key) === toNode) {
					return true;
				}
				const res = canReachNode(originalFromNode, key, toNode, hasExplored);
				if (res === true) {
					return true;
				}
			}
			return false;
		}
		return false;
	}
	let count = 0;
	for (let fromIndex = 0; fromIndex < numCourses; fromIndex++) {
		for (let toIndex = fromIndex + 1; toIndex < numCourses; toIndex++) {
			if (fromIndex !== toIndex) {
				if (!config[toIndex]) {
					count++;
				} else {
					const tempRes = canReachNode(fromIndex, fromIndex, toIndex, (hasExplored = {}));
					if (!tempRes) {
						count++;
					} else {
						dynamicProgramming[`${fromIndex}_${toIndex}`] = true;
					}
				}
			}
		}
	}

	return count;
};

console.log(countPairs((n = 7), (edges = [ [ 0, 2 ], [ 0, 5 ], [ 2, 4 ], [ 1, 6 ], [ 5, 4 ] ]))); //[1,0]
console.log(countPairs((n = 9628), (edges = [])) === 46344378); //[1,0]

console.log(countPairs((n = 3), (edges = [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ]))); //[1,0]
