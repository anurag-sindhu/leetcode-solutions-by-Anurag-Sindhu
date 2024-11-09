var maxNumberOfBalloons = function(text) {
	const config = { b: 0, a: 0, l: 0, o: 0, n: 0 };
	for (let index = 0; index < text.length; index++) {
		if (config[text[index]] || config[text[index]] === 0) {
			if (!config[text[index]]) {
				config[text[index]] = 0;
			}
			config[text[index]] += 1;
		}
	}
	for (const key in config) {
		if (!config[key]) {
			return 0;
		}
	}
	config['o'] = Math.floor(config['o'] / 2);
	config['l'] = Math.floor(config['l'] / 2);
	let minQty = Infinity;
	for (const key in config) {
		if (minQty > config[key]) {
			minQty = config[key];
		}
	}
	return minQty;
};

console.log(
	maxNumberOfBalloons(
		(text =
			'mbetypbpefxvviadqaodrbjeoacfomepmzymiudltgnvnpbowwmjgpzzhtiismearuwocsgbiimiqqzaozgeizikrlxmupfzjzmlfttqqbpfblqfkecsdfbsceqjhubfxksivrfwvukapxmuciybfhzlmpeamdxziptxregymqtmgcsujmugissgnlbhxbcxxeoumcqyulvahuianbaaxgzrtmshjguqdaxvxndzoqvwmcjfhpevavnrciqbymnlylbrfkkiceienoarfrzzxtuaqapaeqeqolozadmtgjyhfqzpuaskjuawxqkdqyjqcmbxtvshzrquvegcuyuckznspmrxvqdassidcmrajedsnuuumfwqzvasljlyvfefktiqgvzvdzojtjegsyhbepdkuwvgrfscezvswywmdavpxlekbrlkfnbyvlobazmvgulxrfdranuhomkrlpbfeagfxxxuhjuqhbkhznixquxrxngwimdxdhqbdaouitsvcdmbwxbbaomkgxsqwnexbjjyhtxvkjfqkrrxjghvzqsattubphryqxxdyjkihfnzvjhohnhdlfwoqiwtmwzfgcyhyqtcketvgnbchcxvnhcsoosirfqgdgcsitegzlxdfijzmxnvhrulmgvoqfpzesootscnxenokmmozmoxpaverydbsnimwacjqhrtxkqtvghjyushoctxphxzztukgmnoeycqaeukymvwxcsyvvctflqjhtcvjtxncuvhkptkjnzaetwbzkwnseovewuhpkaxiphdicgacszzdturzgjkzwgkmzzavykancvvzaafgzjhcyicorrblmhsnnkhfkujttbkuuedhwguuaapojmnjdfytdhrepjwcddzsoeutlbbljlikghxefgbqenwamanikmynjcupqpdjnhldaixwygcvsgdkzszmsptqqnroflgozblygtiyaxudwmooiviqcosjfksnevultrf')
	)
);
console.log(maxNumberOfBalloons((text = 'nlaebolko')));
console.log(maxNumberOfBalloons((text = 'loonbalxballpoon')));
console.log(maxNumberOfBalloons((text = 'leetcode')));
