var removeSubfolders = function(folder) {
	const config = {};
	for (const iterator of folder) {
		const splittedIterator = iterator.substring(1).split('/');
		function injectWord(splitted, index = 0, config) {
			if (splitted.length <= index) {
				return;
			}
			const curPath = splitted[index];
			if (!config[curPath]) {
				config[curPath] = {};
			}
			if (index === splitted.length - 1) {
				config[curPath].isAvailable = true;
			}
			if (!config[curPath].further) {
				config[curPath].further = {};
			}
			return injectWord(splitted, index + 1, config[curPath].further);
		}
		injectWord(splittedIterator, 0, config);
	}
	const output = [];
	for (const key in config) {
		function explore(conf, str) {
			if (conf.isAvailable) {
				output.push(str);
				return;
			}
			for (const childKey in conf.further) {
				explore(conf.further[childKey], `${str}/${childKey}`);
			}
		}
		explore(config[key], `/${key}`);
	}
	return output;
};

console.log(removeSubfolders((folder = [ '/a/b/c', '/a/b/ca', '/a/b/d' ])));
console.log(removeSubfolders([ '/a', '/a/b/c', '/a/b/d' ]));
console.log(removeSubfolders([ '/a', '/a/b', '/c/d', '/c/d/e', '/c/f' ]));
console.log(removeSubfolders([ '/a/b', '/c/d', '/c/d/e', '/c/f' ]));
