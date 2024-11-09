const array = [1,2,3,4];
for (var i = 0; i < array.length; i++) {
	setTimeout(function (tempVar) {
		console.log('I am at index ' + tempVar)
	}, 3000, i)
}
