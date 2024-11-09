var deleteDuplicateFolder = function (paths) {
    const folderMapping = {};
    for (const iterator of paths) {
        function insertIntoFolderMapping(iterator, index = 0, mapping) {
            if (iterator[index] == undefined) {
                return true;
            }
            if (mapping[iterator[index]] === undefined) {
                mapping[iterator[index]] = {};
            }
            insertIntoFolderMapping(iterator, index + 1, mapping[iterator[index]]);
            return mapping;
        }

        insertIntoFolderMapping(iterator, 0, folderMapping);
    }
    console.log(JSON.stringify(folderMapping));
    const endingWithChars = {};
    const subfoldersToBeRemoved = {};
    function explore(mapping, lastExploringChar) {
        if (!Object.keys(mapping).length) {
            if (!endingWithChars[lastExploringChar]) {
                endingWithChars[lastExploringChar] = 0;
            }
            endingWithChars[lastExploringChar] += 1;
        }
        for (const key in mapping) {
            explore(mapping[key], key);
        }
    }

    explore(folderMapping);
    for (const key in endingWithChars) {
        if (endingWithChars[key] > 1) {
            subfoldersToBeRemoved[key] = true;
        }
    }
    const removedFolders = {};
    const pathToHold = {};
    for (const iterator of paths) {
        let path = ``;
        for (let index = 0; index < iterator.length; index++) {
            path += iterator[index];
            if (subfoldersToBeRemoved[iterator[index]]) {
                removedFolders[path] = true;
            }
        }
        pathToHold[path] = true;
    }
    return folderMapping;
};
console.log(
    deleteDuplicateFolder([
        ['z'],
        ['z', 't'],
        ['b'],
        ['g'],
        ['g', 'h'],
        ['g', 'h', 'i'],
        ['b', 's'],
        ['b', 's', 't'],
        ['b', 's', 'q'],
        ['a'],
        ['c'],
        ['a', 'b'],
        ['c', 'b'],
        ['a', 'b', 'x'],
        ['a', 'b', 'x', 'y'],
        ['w'],
        ['w', 'y'],
        ['c', 'b', 'y'],
    ]),
);
/**
 * [["z"],["b"],["g"],["a"],["c"],["z","t"],["g","h"],["b","s"],["a","b"],["g","h","i"],["b","s","t"],["b","s","q"]]
 */
console.log(
    deleteDuplicateFolder([
        ['z'],
        ['z', 't'],
        ['b'],
        ['b', 's'],
        ['b', 's', 't'],
        ['a'],
        ['c'],
        ['a', 'b'],
        ['c', 'b'],
        ['a', 'b', 'x'],
        ['a', 'b', 'x', 'y'],
        ['w'],
        ['w', 'y'],
        ['c', 'b', 'y'],
    ]),
);
/**
 * [["a"],["c"],["a","b"]]
 */
console.log(
    deleteDuplicateFolder([
        ['a'],
        ['c'],
        ['a', 'b'],
        ['c', 'b'],
        ['a', 'b', 'x'],
        ['a', 'b', 'x', 'y'],
        ['w'],
        ['w', 'y'],
    ]),
);
console.log(deleteDuplicateFolder((paths = paths = [['a', 'b'], ['c', 'd'], ['c'], ['a']])));
console.log(
    deleteDuplicateFolder((paths = [['a'], ['c'], ['d'], ['a', 'b'], ['c', 'b'], ['d', 'a']])),
);
console.log(
    deleteDuplicateFolder(
        (paths = [
            ['a', 'b', 'c'],
            ['a', 'b', 'd'],
        ]),
    ),
);
