var peopleAwareOfSecretFirst = function(n, delay, forget) {
	const peopleArray = [ { added: 1, prevTill: 0 } ];
	let currentIndex = 1;
	while (--n) {
		let added =
			((peopleArray[currentIndex - delay] && peopleArray[currentIndex - delay].added) || 0) +
			((peopleArray[currentIndex - delay] && peopleArray[currentIndex - delay].prevTill) ||
				0) -
			((peopleArray[currentIndex - forget] && peopleArray[currentIndex - forget].added) || 0);
		if (peopleArray[currentIndex - forget] && peopleArray[currentIndex - forget].added === 0) {
			added -=
				(peopleArray[currentIndex - forget] &&
					peopleArray[currentIndex - forget].prevTill) ||
				0;
		}
		const prevTill =
			((peopleArray[currentIndex - 1] && peopleArray[currentIndex - 1].added) || 0) +
			((peopleArray[currentIndex - 1] && peopleArray[currentIndex - 1].prevTill) || 0) -
			((peopleArray[currentIndex - forget] && peopleArray[currentIndex - forget].added) || 0);
		peopleArray.push({
			added: added,
			prevTill: prevTill
		});
		currentIndex++;
	}
	return;
};

var peopleAwareOfSecretSecond = function(n, delay, forget) {
	const peopleArray = [ { added: 1, prevTill: 0 } ];
	let currentIndex = 1;
	while (--n) {
		let totalElementAtDelay =
			((peopleArray[currentIndex - delay] && peopleArray[currentIndex - delay].added) || 0) +
			((peopleArray[currentIndex - delay] && peopleArray[currentIndex - delay].prevTill) ||
				0);
		const elementExpiring = (function() {
			let tempDelay = 0;
			let elementExpiring = 0;
			while (tempDelay < delay) {
				elementExpiring +=
					(peopleArray[currentIndex - forget - tempDelay] &&
						peopleArray[currentIndex - forget - tempDelay].added) ||
					0;
				tempDelay++;
			}
			return elementExpiring;
		})();
		const prevTill =
			((peopleArray[currentIndex - 1] && peopleArray[currentIndex - 1].added) || 0) +
			((peopleArray[currentIndex - 1] && peopleArray[currentIndex - 1].prevTill) || 0) -
			((peopleArray[currentIndex - forget] && peopleArray[currentIndex - forget].added) || 0);

		peopleArray.push({
			added: totalElementAtDelay - elementExpiring,
			elementExpiring: elementExpiring,
			prevTill: prevTill
		});
		currentIndex++;
	}
	const resp =
		peopleArray[peopleArray.length - 1].added + peopleArray[peopleArray.length - 1].prevTill;
	return resp % 1000000007;
};

var peopleAwareOfSecret = function(n, delay, forget) {
	const peopleArray = [ { added: 1, prevTill: 0 } ];
	let currentIndex = 1;
	while (--n) {
		let totalElementAtDelay =
			((peopleArray[currentIndex - delay] && peopleArray[currentIndex - delay].added) || 0) +
			((peopleArray[currentIndex - delay] && peopleArray[currentIndex - delay].prevTill) ||
				0);
		const elementExpiring = (function() {
			let tempDelay = 0;
			let elementExpiring = 0;
			while (tempDelay < delay) {
				elementExpiring +=
					(peopleArray[currentIndex - forget - tempDelay] &&
						peopleArray[currentIndex - forget - tempDelay].added) ||
					0;
				tempDelay++;
			}
			return elementExpiring;
		})();
		const prevTill =
			((peopleArray[currentIndex - 1] && peopleArray[currentIndex - 1].added) || 0) +
			((peopleArray[currentIndex - 1] && peopleArray[currentIndex - 1].prevTill) || 0) -
			((peopleArray[currentIndex - forget] && peopleArray[currentIndex - forget].added) || 0);

		peopleArray.push({
			added: (totalElementAtDelay - elementExpiring) % 1000000007,
			elementExpiring: elementExpiring % 1000000007,
			prevTill: prevTill
		});
		currentIndex++;
	}
	const resp =
		peopleArray[peopleArray.length - 1].added + peopleArray[peopleArray.length - 1].prevTill;
	const finalResponse = resp % 1000000007;
	return finalResponse;
};

console.log(peopleAwareOfSecret((n = 10), (delay = 2), (forget = 4)) === 20);
console.log(peopleAwareOfSecret(904, 63, 102) === 841452243);
console.log(peopleAwareOfSecret((n = 289), (delay = 7), (forget = 23)) === 790409951);
console.log(peopleAwareOfSecret((n = 684), (delay = 18), (forget = 496)) === 653668527);
console.log(peopleAwareOfSecret((n = 6), (delay = 2), (forget = 4)) === 5);
console.log(peopleAwareOfSecret((n = 4), (delay = 1), (forget = 3)) === 6);
