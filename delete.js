const head = { prev: null, next: null };
let nextHead = head;
let prevHead = head;
const headMap = {};

const addNode = function (node) {
    node.prev = nextHead;
    nextHead.next = node;
    nextHead = nextHead.next;
    console.log({ head });
    return nextHead;
};
const removeNode = function (value) {
    const reference = headMap[value];
    if (reference == undefined) {
        return -1;
    }
    reference.prev.next = reference.next;
    console.log({ head });
};

for (const element of [1, 2, 3, 4, 5, 6, 7, 8]) {
    const resp = addNode({ val: element, next: null });
    headMap[element] = resp;
}
removeNode(3);
console.log('object');
