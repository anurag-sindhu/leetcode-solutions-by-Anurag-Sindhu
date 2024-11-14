class Graph {
  constructor(noOfVertices) {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  removeEdge(vertex, edge) {
    if (this.adjacencyList.get(vertex)) {
      this.adjacencyList.get(vertex).forEach((value, index, array) => {
        if (value === edge) {
          this.adjacencyList.set(vertex, [...array.slice(0, index), ...array.slice(index + 1)]);
        }
      });
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList.get(vertex)) {
      this.adjacencyList.delete(vertex);
    }

    this.adjacencyList.forEach((value, key, array) => {
      this.removeEdge(key, vertex);
    });
  }
  addEdge(vertex, edge) {
    if (!this.adjacencyList.get(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.adjacencyList.get(edge)) {
      this.addVertex(edge);
    }
    if (!this.adjacencyList.get(vertex).includes(edge)) {
      this.adjacencyList.get(vertex).push(edge);
    }
    if (!this.adjacencyList.get(edge).includes(vertex)) {
      this.adjacencyList.get(edge).push(vertex);
    }
  }
  printGraph() {
    console.log(this.adjacencyList);
  }

  breadthFirstSearchPossibility(startingNode) {
    // create a visited object
    var visited = {};

    // Create an object for queue
    var q = [];

    // add the starting node to the queue
    visited[startingNode] = true;
    q.push(startingNode);

    // loop until queue is empty
    while (q.length) {
      // get the element from the queue
      var getQueueElement = q.pop();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.adjacencyList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }
  breadthFirstSearchLength(fromNode) {
    // create a visited object
    var verticesDistance = {};
    var visited = {};
    console.log(this.adjacencyList);
    for (const [key] of this.adjacencyList) {
      verticesDistance[key] = Infinity;
    }
    const queue = [fromNode];
    let iteration = 0;
    while (queue.length) {
      iteration += 1;
      const poppedElement = queue.pop();
      const getList = this.adjacencyList.get(poppedElement);
      visited[poppedElement] = true;
      for (const iterator of getList) {
        if (verticesDistance[iterator] === Infinity && iterator !== fromNode) {
          verticesDistance[iterator] = iteration;
        }

        if (!visited[iterator]) {
          queue.push(iterator);
          visited[iterator] = true;
        }
      }
      console.log({ getList });
    }
    console.log({ verticesDistance });
  }
}

var g = new Graph();
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.breadthFirstSearchLength('F');
g.breadthFirstSearchPossibility('F');
g.printGraph();
g.removeVertex('C');
g.removeEdge('A', 'D');
