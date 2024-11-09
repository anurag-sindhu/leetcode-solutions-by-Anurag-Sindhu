var GetImportance = function(employees, id) {
	const config = {};

	for (let index = 0; index < employees.length; index++) {
		config[employees[index].id] = {};
		config[employees[index].id].importance = employees[index].importance;
		config[employees[index].id].subordinates = employees[index].subordinates;
	}
	let importance = 0;
	function getSubordinatesSum(id, exploring) {
		if (exploring[id]) {
			return;
		}
		importance += config[id].importance;
		exploring[id] = true;
		for (const iterator of config[id].subordinates) {
			getSubordinatesSum(iterator, exploring);
		}
	}
	getSubordinatesSum(id, {});

	return importance;
};

console.log(
	GetImportance(
		[
			{ id: 1, importance: 5, subordinates: [ 2, 3 ] },
			{ id: 2, importance: 3, subordinates: [ 4 ] },
			{ id: 3, importance: 4, subordinates: [] },
			{ id: 4, importance: 1, subordinates: [] }
		],
		1
	) === 13
);
console.log(
	GetImportance((employees = [ [ 1, 5, [ 2, 3 ] ], [ 2, 3, [] ], [ 3, 3, [] ] ]), (id = 1))
);
console.log(GetImportance((employees = [ [ 1, 2, [ 5 ] ], [ 5, -3, [] ] ]), (id = 5)));
