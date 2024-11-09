var largestWordCount = function(messages, senders) {
	const config = {};
	for (let index = 0; index < messages.length; index++) {
		const element = messages[index].split(' ').length;
		const sender = senders[index];
		if (!config[sender]) {
			config[sender] = 0;
		}
		config[sender] += element;
	}
	const maxActiveUsers = [];
	const maXWord = Math.max(...Object.values(config));
	for (const key in config) {
		if (config[key] === maXWord) {
			maxActiveUsers.push(key);
		}
	}
	if (maxActiveUsers.length === 1) {
		return maxActiveUsers[0];
	}
	const arr = new Array(26).fill(null);
	for (const iterator of maxActiveUsers) {
		function injectWord(iterator, arr, index = 0) {
			if (iterator.length < index) {
				return;
			}
			const charCode = iterator.charCodeAt(index);
			let indexInArray = null;
			let caseType = null;
			if (charCode >= 65 && charCode <= 90) {
				indexInArray = charCode - 65;
				caseType = 'upperCase';
				if (!arr[indexInArray]) {
					arr[indexInArray] = {};
				}
				if (!arr[indexInArray].upperCase) {
					arr[indexInArray].upperCase = new Array(26).fill(null);
				}
			} else {
				indexInArray = charCode - 97;
				caseType = 'lowerCase';
				try {
					if (!arr[indexInArray]) {
						arr[indexInArray] = {};
					}
					if (!arr[indexInArray].lowerCase) {
						arr[indexInArray].lowerCase = new Array(26).fill(null);
					}
				} catch (e) {
					console.log({ e });
				}
			}
			if (iterator.length < index + 1) {
				return;
			}
			injectWord(iterator, arr[indexInArray][caseType], index + 1);
			console.log('object');
		}
		injectWord(iterator, arr, 0);
	}
	let word = '';
	function retrieveWord(arr) {
		for (let index = 25; index >= 0; index--) {
			if (arr[index] !== null) {
				if (arr[index].lowerCase) {
					const asciiCode = index + 97;
					word += String.fromCharCode(asciiCode);
					retrieveWord(arr[index].lowerCase);
					break;
				} else {
					const asciiCode = index + 65;
					word += String.fromCharCode(asciiCode);
					retrieveWord(arr[index].upperCase);
					break;
				}
			}
		}
	}
	retrieveWord(arr);
	return word;
};
console.log(
	largestWordCount(
		(messages = [ 'Hello', 'Hi', 'Wonderful', 'Nice' ]),
		(senders = [ 'Alice', 'alice', 'blice', 'Blice' ])
	)
);
console.log(
	largestWordCount(
		[
			'Ux i E XMm',
			'G Mo f q Qa q',
			'v qZ J m R',
			'z pt T yG W xq Xq G',
			'GS F Ug',
			'QDv',
			'I iY k pd M',
			'aOi',
			'f xV xa',
			'c Zu Fa ofO',
			'x c E R H',
			'pw sfU',
			'i aE G Aqw',
			'Yu S di sV sx mc AlB',
			'D lx g cF k',
			'U fw rh Ne',
			'I aN o Sv aE s',
			'ZF c Jo IA',
			'Y S f Ld D M fbb',
			'OI Mn e Q A gT',
			'xV f Li v h vy I S',
			'Q gI G vj Qd c y r W',
			'Q R BK VI',
			'K Am NZ',
			'wk CT',
			'p sQ b Se l BI We fv',
			'x WF fW l n px WY rz',
			'S rW mh',
			'a T og TA b Gg h',
			't v WO',
			'Ai bO mY',
			'e AMh',
			't nfH',
			'q F G ch N',
			'sf W iH yx M Pf YjA',
			'uE D',
			'hA F q NX',
			'Fm',
			'lI C Vl Em md d L',
			'az kz i bx g v dD',
			'Fq UR qf hh',
			'C r Nq u Ve i',
			'x tT BR Bj d a yu G',
			'Nm M DM h Wu',
			'IZ y Lo ZN Yv',
			'l Kh ia Rt',
			'VR cg C fM mL MH',
			'a P e Gb',
			'Xq UO',
			'U qM',
			'h bM mn e a',
			'WD w VT Tf dK G YPE',
			'cT T wc O VLT',
			'e q K e Ao V kw',
			'Ie dt JB a C y O rq',
			'ih Wu',
			'QP T G Zl Yx Q pSz',
			'Rs',
			'xA y D e e g',
			'Gik',
			'D o Y wyD',
			'mG z N a j fz P',
			'U q W',
			'Ei xr Zf',
			'wT X EI vz BI',
			'nj Fr g J P qH h gZa',
			'e wB XX s',
			'wL Md wt',
			'RE yd U rY J qx',
			'DO Q a U N',
			'p F gh fv',
			'xn LT vg rZ pF z xrf',
			'k',
			'DD r sh B',
			'Z Eg iJ Hq r VX h',
			'Xy N k Hd Lk ea',
			'teU',
			'n kp U k KZ aw',
			'UG uO ax S y',
			'q D SD',
			'r ns E Wv XR wv tP g'
		],
		[
			'K',
			'kFIbpoFxn',
			'yErgn',
			'N',
			'wtJesr',
			'rusffeL',
			'KlpoodEd',
			'qGcQqIVdFr',
			'ztmCdK',
			'HFILjKln',
			'rusffeL',
			'TmmQZ',
			'R',
			'CNh',
			'YMQDBkOWy',
			'kjiSc',
			'cGMsZxxx',
			'YMQDBkOWy',
			'PPqsmNBewN',
			'gbtn',
			'nQNcL',
			'rK',
			'ppr',
			'LhSVp',
			'Ub',
			'QGRFMLY',
			'YMQDBkOWy',
			'Ub',
			'PPqsmNBewN',
			'SdDObYkD',
			'q',
			'suAakSCuHz',
			'QGRFMLY',
			'dnzhjdwrEt',
			'ubIEXAO',
			'EsBuLal',
			'kFIbpoFxn',
			'yErgn',
			'ubIEXAO',
			'TmmQZ',
			'TmmQZ',
			'xlQqQRrdTv',
			'mWxCG',
			'TmmQZ',
			'DmwIEmS',
			'gbtn',
			'nBQLLS',
			'QhF',
			'Ub',
			'ppr',
			'bmtYQKYv',
			'ppr',
			'EsBuLal',
			'PRiNk',
			'rusffeL',
			'ztmCdK',
			'PPqsmNBewN',
			'rK',
			'xlQqQRrdTv',
			'QGRFMLY',
			'EsBuLal',
			'QyYJw',
			'QIFauTN',
			'dnzhjdwrEt',
			'zJLcUq',
			'ubIEXAO',
			'HFILjKln',
			'ppr',
			'wtJesr',
			'ztmCdK',
			'suAakSCuHz',
			'zJLcUq',
			'TU',
			'HFILjKln',
			'lCkGjDY',
			'A',
			'zJLcUq',
			'SdDObYkD',
			'YMQDBkOWy',
			'R',
			'LhSVp'
		]
	)
);
console.log(
	largestWordCount(
		(messages = [ 'How is leetcode for everyone', 'Leetcode is useful for practice' ]),
		(senders = [ 'Bo', 'Ch' ])
	)
);
console.log(
	largestWordCount(
		(messages = [ 'How is leetcode for everyone', 'Leetcode is useful for practice' ]),
		(senders = [ 'Bob', 'Charlie' ])
	)
);
console.log(
	largestWordCount(
		(messages = [ 'Hello', 'Hi', 'Wonderful', 'Nice' ]),
		(senders = [ 'Alice', 'alice', 'blice', 'Blice' ])
	)
);
console.log(
	largestWordCount(
		(messages = [
			'Hello userTwooo',
			'Hi userThree',
			'Wonderful day Alice',
			'Nice day userThree'
		]),
		(senders = [ 'Alice', 'userTwo', 'userThree', 'Alice' ])
	)
);
