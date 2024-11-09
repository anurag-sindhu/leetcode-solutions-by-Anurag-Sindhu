function insertM(m) {
  let initialIndex = 0;
  const config = {};
  for (let index = 1; index <= m; index++) {
    config[index] = initialIndex++;
  }
  return config;
}

function increaseIndexesLessThan(mConfig, fromIndex) {
  for (const key in mConfig) {
    const existingIndex = mConfig[key];
    if (existingIndex < fromIndex) {
      mConfig[key] += 1;
    }
  }
  return mConfig;
}
/**
 * O(queries)*O(m)
 * O(queries)+o(m)~O(n)
 */
var processQueries = function (queries, m) {
  const mConfig = insertM(m);
  const output = [];
  for (const iterator of queries) {
    const existingIndex = mConfig[iterator];
    output.push(existingIndex);
    increaseIndexesLessThan(mConfig, existingIndex);
    mConfig[iterator] = 0;
  }
  return output;
};

console.log(processQueries((queries = [7, 5, 5, 8, 3]), (m = 8)));
console.log(processQueries((queries = [4, 1, 2, 2]), (m = 4)));
console.log(processQueries((queries = [3, 1, 2, 1]), (m = 5)));
