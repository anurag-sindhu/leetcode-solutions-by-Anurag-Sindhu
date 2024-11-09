var simplifyPath = function (path) {
    const splittedPath = path.split('/');
    let prevIndex = 0;
    for (let index = 1; index < splittedPath.length; index++) {
        if (splittedPath[index] === '.') {
            splittedPath[index] = '';
        } else if (splittedPath[index] === '..') {
            splittedPath[index] = '';
            splittedPath[prevIndex] = '';
            while (!splittedPath[prevIndex - 1] && prevIndex > 0) {
                prevIndex--;
            }
            prevIndex--;
        } else {
            if (splittedPath[index]) {
                prevIndex = index;
            }
        }
    }//
    let outputPath = '';
    for (const element of splittedPath) {
        if (element) outputPath += `/${element}`;
    }
    if (!outputPath) {
        return '/';
    }
    return outputPath;
};

console.log(simplifyPath((path = '/home//foo/')) === '/home/foo');
console.log(simplifyPath((path = '/../../')) === '/'); //=== '/'
console.log(simplifyPath((path = '/../')) === '/');
console.log(simplifyPath((path = '/a/./b/../../c/')) === '/c'); //
console.log(simplifyPath((path = '/a//b////c/d//././/..')) === '/a/b/c'); //
console.log(simplifyPath((path = '/home/user/Documents/../Pictures')) === '/home/user/Pictures'); //=== '/home/user/Pictures'
console.log(simplifyPath((path = '/home/')) === '/home');
console.log(simplifyPath((path = '/.../a/../b/c/../d/./')) === '/.../b/d'); //=== '/.../b/d'
console.log(simplifyPath((path = '/.../a/../../b/c/../d/./'))); //=== '/.../b/d'
