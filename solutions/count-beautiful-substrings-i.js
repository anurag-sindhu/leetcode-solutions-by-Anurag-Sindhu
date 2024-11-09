var beautifulSubstrings = function (s, k) {
    let count = 0;
    const vowel = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
    };
    let vowelCount = 0;
    let consonantCount = 0;
    for (let lengthIndex = 2; lengthIndex <= s.length; lengthIndex += 2) {
        vowelCount = 0;
        consonantCount = 0;
        for (let index = 0; index < lengthIndex - 2; index++) {
            if (vowel[[s[index]]]) {
                vowelCount += 1;
            } else {
                consonantCount += 1;
            }
        }
        console.log('object');
        for (let secondaryIndex = lengthIndex - 2; secondaryIndex < s.length; secondaryIndex += 1) {
            if (s[secondaryIndex + 1] === undefined) {
                break;
            }
            if (vowel[[s[secondaryIndex]]]) {
                vowelCount += 1;
            }
            if (!vowel[[s[secondaryIndex]]]) {
                consonantCount += 1;
            }
            if (vowel[[s[secondaryIndex + 1]]]) {
                vowelCount += 1;
            }
            if (!vowel[[s[secondaryIndex + 1]]]) {
                consonantCount += 1;
            }
            if (vowelCount === consonantCount && (vowelCount * consonantCount) % k == 0) {
                count += 1;
            }
            if (vowel[[s[secondaryIndex]]]) {
                vowelCount -= 1;
            }
            if (!vowel[[s[secondaryIndex]]]) {
                consonantCount -= 1;
            }
            if (vowel[[s[secondaryIndex + 1]]]) {
                vowelCount -= 1;
            }
            if (!vowel[[s[secondaryIndex + 1]]]) {
                consonantCount -= 1;
            }
        }
    }
    return count;
};

console.log(beautifulSubstrings((s = 'baeyh'), (k = 2)) === 2);
/**
 * 2
 * [0,1,2,2,2]
 * [1,1,1,2,3]
 *
 * [2,2,1,0,0]
 */
console.log(beautifulSubstrings((s = 'abba'), (k = 1)) === 3);
console.log(beautifulSubstrings((s = 'bcdf'), (k = 1)) === 0);
console.log(
    beautifulSubstrings(
        'leqiruaoooiaadaootedagrwnaoxinfvsnirtdtweklmalizoofivkgveayakiiebaocjkpqeieiggarbouaoqauufinevrweosiexlafoetisoozroxeiburaxgofeacodexosxhiebiilaooheukunsieybaeaanovvviojmkalsjzeiioeijeioeealuuyheaufzyiodsuaelyyiqetnikzraominiusoozuuobsxrihoieezptkaeodaiuiubefilezkjqwriyelnwekaoibaoeifbweoeiimeuhbipagoeteeiepsaigtkimvuuuunzavfypeuvebgciaiwbaaiobodvogkikuvikagwesuvmnegdgovnripugqeiekoieecjhioeyneoquegfoeenqekltarlkcqmiubqhnmisiavigoegqepgpyawyibgnpeopingteueuieskeiiunipvpoqaaodwoauoaquikaqixaikosvsimaugsgcoauoopuuiiagonfaoupacseaugoooaogjeiwxxiuarooiretckouiubnuvwrqepavoyoxaidooecliiciaulaaiipluksiuernoowdaeqbgyaipanuoajueuayocibivakadufrtokrsqeocihplefhpfbahahqyzooozeulmmgzraxgdogojuilweeanepeougjugmwtweaeuvueautaahpiacdiuebglkeuhwgixaruaaibkjpnidscsaiaqumoogwooaeriizeuumwitdkraseiptipsaaaizyetesjtjouuyzayfgjpignxiaitiifkpaozinabavoilaeyiiiiihaieoniifeeiqijqtouwtnyipluojeqpupmuf',
        46,
    ) === 2,
);
