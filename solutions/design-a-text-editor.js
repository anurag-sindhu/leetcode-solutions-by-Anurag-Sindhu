var TextEditor = function () {
  this.str = '';
  this.cursorIndex = 0;
};

TextEditor.prototype.addText = function (text) {
  const strLength = this.str.length;
  if (!strLength || this.cursorIndex === strLength - 1) {
    this.str += text;
    this.cursorIndex = this.str.length - 1;
  } else {
    if (this.cursorIndex === 0) {
      this.str = text + this.str;
      this.cursorIndex += text.length;
    } else {
      const leftPart = this.str.slice(0, this.cursorIndex + 1);
      const rightPart = this.str.slice(this.cursorIndex + 1);
      this.str = leftPart + text + rightPart;
      this.cursorIndex += text.length;
    }
  }
  return null;
};

TextEditor.prototype.deleteText = function (k) {
  if (this.cursorIndex !== 0) {
    if (k - 1 >= this.cursorIndex) {
      const length = this.str.length;
      const rightPart = this.str.slice(this.cursorIndex + 1);
      this.str = rightPart;
      this.cursorIndex = 0;
      return length - rightPart.length;
    } else {
      this.cursorIndex = this.cursorIndex - k;
      this.str = this.str.slice(0, this.cursorIndex + 1);
      return k;
    }
  }
  return 0;
};

TextEditor.prototype.cursorLeft = function (k) {
  this.cursorIndex = this.cursorIndex - k;
  if (this.cursorIndex < 0) {
    this.cursorIndex = 0;
  }
  let fromIndex = this.cursorIndex - 10;
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  if (this.cursorIndex === fromIndex) {
    return ``;
  }
  const res = this.str.slice(fromIndex, this.cursorIndex + 1);
  return res;
};

TextEditor.prototype.cursorRight = function (k) {
  this.cursorIndex = this.cursorIndex + k;
  const length = this.str.length;
  if (this.cursorIndex >= length) {
    this.cursorIndex = length - 1;
  }
  let totalCharactersOnLeftSide = this.cursorIndex + 1;
  if (this.cursorIndex === 0) {
    totalCharactersOnLeftSide = 0;
  }
  let charactersToBeSelected = Math.min(totalCharactersOnLeftSide, 10);
  let fromIndex = this.cursorIndex + 1 - charactersToBeSelected;
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  if (this.cursorIndex === fromIndex) {
    return ``;
  }
  const res = this.str.slice(fromIndex, this.cursorIndex + 1);
  return res;
};

let obj;
let operations;
let values;

obj = new TextEditor();
operations = [
  'TextEditor',
  'addText',
  'deleteText',
  'addText',
  'cursorRight',
  'cursorLeft',
  'deleteText',
  'cursorLeft',
  'cursorRight'
];
values = [[], ['leetcode'], [4], ['practice'], [3], [8], [10], [2], [6]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[-1,null,null,null,null,1,null,2]
}
