var maximumPopulation = function (logs) {
    const yearToFrequencyMapping = {};
    const frequencyToLowestYearMapping = {};
    let maxFrequency = -Infinity;
    for (const iterator of logs) {
        const [from, to] = iterator;
        for (let index = from; index < to; index++) {
            const element = yearToFrequencyMapping[index];
            if (!yearToFrequencyMapping[index]) {
                yearToFrequencyMapping[index] = 0;
            }
            yearToFrequencyMapping[index] += 1;
        }
    }

    for (const key in yearToFrequencyMapping) {
        if (maxFrequency < yearToFrequencyMapping[key]) {
            maxFrequency = yearToFrequencyMapping[key];
        }
        if (!frequencyToLowestYearMapping[yearToFrequencyMapping[key]]) {
            frequencyToLowestYearMapping[yearToFrequencyMapping[key]] = Infinity;
        }
        let temp = Number(key);
        if (frequencyToLowestYearMapping[yearToFrequencyMapping[key]] > temp) {
            frequencyToLowestYearMapping[yearToFrequencyMapping[key]] = temp;
        }
    }

    return frequencyToLowestYearMapping[maxFrequency];
};

console.log(
    maximumPopulation(
        (logs = [
            [1950, 1961],
            [1960, 1971],
            [1970, 1981],
        ]),
    ),
);

console.log(
    maximumPopulation(
        (logs = [
            [1993, 1999],
            [2000, 2010],
        ]),
    ),
);
