var allPathsSourceTargetHelper = function (graph, node, path, targetNode, obj) {
  if (node === targetNode) {
    obj[`${path}_${node}`] = true;
    return;
  }
  for (const iterator of graph[node]) {
    allPathsSourceTargetHelper(graph, iterator, `${path}_${node}`, targetNode, obj);
  }
};

var findTargetNode = function (graph) {
  const obj = [];
  for (const iterator of graph) {
    for (const childIterator of iterator) {
      obj.push(childIterator);
    }
  }
  let max = -Infinity;
  for (const key of obj) {
    if (max < key) {
      max = key;
    }
  }
  return max;
};

var allPathsSourceTarget = function (graph) {
  const obj = {};
  const targetNode = findTargetNode(graph);
  for (const childIterator of graph[0]) {
    allPathsSourceTargetHelper(graph, childIterator, `0`, targetNode, obj);
  }
  const paths = [];
  for (const key in obj) {
    const tempPath = [];
    const splittedPath = key.split('_');
    for (const iterator of splittedPath) {
      tempPath.push(Number(iterator));
    }
    paths.push(tempPath);
  }
  return paths;
};

console.log(allPathsSourceTarget((graph = [[4, 3, 1], [3, 2, 4], [3], [4], []])));
console.log(allPathsSourceTarget((graph = [[1, 2], [3], [3], []]), 3));
