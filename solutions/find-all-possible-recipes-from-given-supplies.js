var findAllRecipes = function (recipes, ingredients, supplies) {
    const recipesConfig = (function () {
        const obj = {};
        for (let index = 0; index < recipes.length; index++) {
            obj[recipes[index]] = {};
            for (const iterator of ingredients[index]) {
                obj[recipes[index]][iterator] = true;
            }
        }
        return obj;
    })();

    const suppliesConfig = (function () {
        const obj = {};
        for (let index = 0; index < supplies.length; index++) {
            obj[supplies[index]] = true;
        }
        return obj;
    })();

    const outputConfig = {};

    function canPrepare(recipe, requiredRecipe = {}) {
        if (outputConfig[recipe]) {
            return outputConfig[recipe].status;
        }
        for (const key in recipesConfig[recipe]) {
            if (recipesConfig[key]) {
                if (requiredRecipe[key]) {
                    return false;
                }
                requiredRecipe[key] = true;
                const response = canPrepare(key, requiredRecipe);
                if (!response) {
                    return false;
                }
            } else {
                if (!suppliesConfig[key]) {
                    return false;
                }
            }
        }
        return true;
    }

    const output = [];

    for (let index = 0; index < recipes.length; index++) {
        const recipe = recipes[index];
        const resp = canPrepare(recipe);
        if (!outputConfig[recipe]) {
            outputConfig[recipe] = {};
        }
        outputConfig[recipe].status = resp;
        if (resp) {
            output.push(recipe);
        }
    }

    return output;
};

console.log(
    findAllRecipes(
        ['bread', 'sandwich', 'burger'],
        [
            ['yeast', 'flour'],
            ['bread', 'meat'],
            ['sandwich', 'meat', 'bread']
        ],
        ['yeast', 'flour', 'meat']
    )
); //["bread","sandwich","burger"]

console.log(
    findAllRecipes(
        (recipes = ['bread', 'sandwich']),
        (ingredients = [
            ['yeast', 'flour'],
            ['bread', 'meat']
        ]),
        (supplies = ['yeast', 'flour', 'meat'])
    )
);

console.log(
    findAllRecipes(
        ['ju', 'fzjnm', 'x', 'e', 'zpmcz', 'h', 'q'],
        [
            ['d'],
            ['hveml', 'f', 'cpivl'],
            ['cpivl', 'zpmcz', 'h', 'e', 'fzjnm', 'ju'],
            ['cpivl', 'hveml', 'zpmcz', 'ju', 'h'],
            ['h', 'fzjnm', 'e', 'q', 'x'],
            ['d', 'hveml', 'cpivl', 'q', 'zpmcz', 'ju', 'e', 'x'],
            ['f', 'hveml', 'cpivl']
        ],
        ['f', 'hveml', 'cpivl', 'd']
    )
); //["ju","fzjnm","q"]

console.log(
    findAllRecipes(
        (recipes = ['bread']),
        (ingredients = [['yeast', 'flour']]),
        (supplies = ['yeast', 'flour', 'corn'])
    )
);

console.log(
    findAllRecipes(
        (recipes = ['bread', 'sandwich', 'burger']),
        (ingredients = [
            ['yeast', 'flour'],
            ['bread', 'meat'],
            ['sandwich', 'meat', 'bread']
        ]),
        (supplies = ['yeast', 'flour', 'meat'])
    )
);
