const config = {
  '&': {
    '&a': {
      '&ap': { '&apo': { '&apos': { '&apos;': "'" } } },
      '&am': { '&amp': { '&amp;': '&' } }
    },
    '&q': { '&qu': { '&quo': { '&quot': { '&quot;': '"' } } } },
    '&f': { '&fr': { '&fra': { '&fras': { '&frasl': { '&frasl;': '/' } } } } },
    '&g': { '&gt': { '&gt;': '>' } },
    '&l': { '&lt': { '&lt;': '<' } }
  }
};
function resolveSpecialSymbols(text, fromIndex) {
  let tempString = ``;
  let otherOutput = ``;
  let index = fromIndex;
  let currentConfig = config;
  for (; index < text.length; index++) {
    tempString = `${otherOutput}${text[index]}`;
    if (currentConfig[tempString]) {
      currentConfig = currentConfig[tempString];
      otherOutput += text[index];
    } else {
      break;
    }
  }
  return {
    output: typeof currentConfig === 'string' ? currentConfig : otherOutput,
    toIndex: index
  };
}

var entityParser = function (text) {
  let str = '';
  for (let index = 0; index < text.length; ) {
    if (config[text[index]]) {
      const getResolveSpecialSymbols = resolveSpecialSymbols(text, index);
      const { output, toIndex } = getResolveSpecialSymbols;
      str += output;
      index = toIndex;
    } else {
      str += text[index];
      index++;
    }
  }
  return str;
};

console.log(entityParser((text = '&quot;')));
console.log(entityParser((text = 'and I quote: &quot;...&quot;')));
console.log(entityParser((text = '&amp; &ambassador; is not.')));
console.log(entityParser((text = '&ambassador; is not.')));
console.log(entityParser((text = '&amp; is an HTML entity but &ambassador; is not.')));
