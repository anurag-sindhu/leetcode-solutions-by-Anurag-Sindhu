var discountPrices = function(sentence, discount) {
	let output = '';
	for (let index = 0; index < sentence.length; index++) {
		let element = sentence[index];
		if (element === `$` && (sentence[index - 1] === ` ` || sentence[index - 1] === undefined)) {
			let hasBroken = false;
			let num = ``;
			element = sentence[++index];
			while (element !== ` ` && element !== undefined) {
				num += element;
				if (isNaN(element)) {
					hasBroken = true;
					break;
				}
				element = sentence[++index];
			}
			if (num.length && !isNaN(num) && typeof Number(num) === `number`) {
				const discountedPrice = (Number(num) - discount * Number(num) / 100).toFixed(2);
				output += `$${discountedPrice} `;
			} else if (hasBroken) {
				output += `$${num}`;
			} else {
				output += `$${num} `;
			}
		} else {
			output += element;
		}
	}
	return output.trim();
};

console.log(
	discountPrices((sentence = '$7383692 5q $5870426'), (discount = 64)) ===
		'$2658129.12 5q $2113353.36'
);
console.log(
	discountPrices(
		(sentence =
			'7mozebb9smpwz$$yqr4mox3uae1a210prubb5zp1dykv$ffezb4jpfpcv5hldxnuob66bmu17g$aceym5vszi1$re1v4ttspua6b8yxtbfwnmyk8tudx1qj1ahxbseidrauclql3$ph$pj g5q61b01ho2k9c8fzdasxqvufyms66stvq2 $3238691891 ph3fw6mw $8130 t1 $8001261 $yrdnj9pek7yr1ccujc756i44qk5mr6h64zizbazgyx0k0$0 vmhb4r31ee2futqh76co5eff'),
		(discount = 21)
	) ===
		'7mozebb9smpwz$$yqr4mox3uae1a210prubb5zp1dykv$ffezb4jpfpcv5hldxnuob66bmu17g$aceym5vszi1$re1v4ttspua6b8yxtbfwnmyk8tudx1qj1ahxbseidrauclql3$ph$pj g5q61b01ho2k9c8fzdasxqvufyms66stvq2 $2558566593.89 ph3fw6mw $6422.70 t1 $6320996.19 $yrdnj9pek7yr1ccujc756i44qk5mr6h64zizbazgyx0k0$0 vmhb4r31ee2futqh76co5eff'
);
console.log(
	discountPrices((sentence = '5$wq 5$1e5 $200'), (discount = 50)) === '5$wq 5$1e5 $100.00'
);
console.log(
	discountPrices((sentence = 'there are $1 $2 and 5$ candies in the shop'), (discount = 50)) ===
		'there are $0.50 $1.00 and 5$ candies in the shop'
);
console.log(
	discountPrices((sentence = '1 2 $3 4 $5 $6 7 8$ $9 $10$'), (discount = 100)) ===
		'1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$'
);
