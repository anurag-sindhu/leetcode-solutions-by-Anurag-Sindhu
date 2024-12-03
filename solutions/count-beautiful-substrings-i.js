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
    for (let lengthIndex = 0; lengthIndex < s.length - 1; lengthIndex++) {
        vowelCount = 0;
        consonantCount = 0;
        if (vowel[s[lengthIndex]]) {
            vowelCount += 1;
        } else {
            consonantCount += 1;
        }
        for (let index = lengthIndex + 1; index < s.length; index++) {
            if (vowel[s[index]]) {
                vowelCount += 1;
            } else {
                consonantCount += 1;
            }
            if (vowelCount === consonantCount && (vowelCount * consonantCount) % k === 0) {
                count += 1;
            }
        }
    }
    return count;
};

console.log(beautifulSubstrings((s = 'baeyh'), (k = 2)) === 2);
console.log(beautifulSubstrings('bcdaef', 2) === 2);
console.log(beautifulSubstrings((s = 'abba'), (k = 1)) === 3);
console.log(beautifulSubstrings((s = 'bcdf'), (k = 1)) === 0);
console.log(
    beautifulSubstrings(
        'leqiruaoooiaadaootedagrwnaoxinfvsnirtdtweklmalizoofivkgveayakiiebaocjkpqeieiggarbouaoqauufinevrweosiexlafoetisoozroxeiburaxgofeacodexosxhiebiilaooheukunsieybaeaanovvviojmkalsjzeiioeijeioeealuuyheaufzyiodsuaelyyiqetnikzraominiusoozuuobsxrihoieezptkaeodaiuiubefilezkjqwriyelnwekaoibaoeifbweoeiimeuhbipagoeteeiepsaigtkimvuuuunzavfypeuvebgciaiwbaaiobodvogkikuvikagwesuvmnegdgovnripugqeiekoieecjhioeyneoquegfoeenqekltarlkcqmiubqhnmisiavigoegqepgpyawyibgnpeopingteueuieskeiiunipvpoqaaodwoauoaquikaqixaikosvsimaugsgcoauoopuuiiagonfaoupacseaugoooaogjeiwxxiuarooiretckouiubnuvwrqepavoyoxaidooecliiciaulaaiipluksiuernoowdaeqbgyaipanuoajueuayocibivakadufrtokrsqeocihplefhpfbahahqyzooozeulmmgzraxgdogojuilweeanepeougjugmwtweaeuvueautaahpiacdiuebglkeuhwgixaruaaibkjpnidscsaiaqumoogwooaeriizeuumwitdkraseiptipsaaaizyetesjtjouuyzayfgjpignxiaitiifkpaozinabavoilaeyiiiiihaieoniifeeiqijqtouwtnyipluojeqpupmuf',
        46,
    ) === 237,
);
