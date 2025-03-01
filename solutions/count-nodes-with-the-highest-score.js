var countHighestScoreNodes = function (parents) {
    const config = {};
    for (let index = 0; index < parents.length; index++) {
        const element = parents[index];
        if (element == -1) {
            if (config[0] == undefined) {
                config[0] = [];
            }
            if (index) {
                config[0].push(index);
            }
        } else {
            if (config[element] == undefined) {
                config[element] = [];
            }
            config[element].push(index);
        }
    }
    const completed = {};
    const relation = {};
    function createRelation(num) {
        if (completed[num]) {
            return null;
        }
        completed[num] = true;
        if (config[num]) {
            for (const key of config[num]) {
                const resp = createRelation(key);
                relation[num] = resp;
            }
        }
        return null;
    }
    createRelation(0);
    return;
};

console.log(countHighestScoreNodes((parents = [-1, 2, 0, 2, 0])));
console.log(countHighestScoreNodes((parents = [-1, 2, 0])));
