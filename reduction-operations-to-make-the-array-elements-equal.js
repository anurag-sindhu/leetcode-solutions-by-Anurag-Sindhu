class MaxHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(index) {
        return parseInt(index / 2);
    }
    swap(from, to) {
        const store = this.heap[from];
        this.heap[from] = this.heap[to];
        this.heap[to] = store;
    }
    getChildIndexes(index) {
        return {
            left: index * 2 + 1,
            right: index * 2 + 2,
        };
    }
    add(element) {
        this.heap.push(element);
        let currentWorkingIndex = this.heap.length - 1;
        while (this.heap.length > 1) {
            const parentIndex = this.getParentIndex(currentWorkingIndex);
            if (this.heap[parentIndex] < this.heap[currentWorkingIndex]) {
                this.swap(parentIndex, currentWorkingIndex);
                currentWorkingIndex = parentIndex;
                if (parentIndex === 0) {
                    break;
                }
            } else {
                break;
            }
        }
        return;
    }
    remove() {
        const biggestElement = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return biggestElement;
        }
        const lastElement = this.heap.pop();
        this.heap[0] = lastElement;
        let currentWorkingIndex = 0;
        while (this.heap.length > 1) {
            const childIndexes = this.getChildIndexes(currentWorkingIndex);
            if (
                this.heap[childIndexes.left] !== undefined &&
                this.heap[childIndexes.right] !== undefined
            ) {
            }
            const biggestIndex =
                this.heap[childIndexes.left] < this.heap[childIndexes.right]
                    ? childIndexes.right
                    : childIndexes.left;
            if (this.heap[biggestIndex] > this.heap[currentWorkingIndex]) {
                this.swap(biggestIndex, currentWorkingIndex);
                currentWorkingIndex = biggestIndex;
                if (currentWorkingIndex === this.heap.length - 1) {
                    break;
                }
            } else {
                break;
            }
        }
        return biggestElement;
    }
}

var reductionOperations = function (nums) {
    let output = 0;
    let minElement = Infinity;
    const frequencyMapping = {};
    for (const iterator of nums) {
        if (!frequencyMapping[iterator]) {
            frequencyMapping[iterator] = 0;
        }
        frequencyMapping[iterator] += 1;
        minElement = Math.min(minElement, iterator);
    }
    const maxHeap = new MaxHeap();
    for (const key in frequencyMapping) {
        maxHeap.add(Number(key));
    }
    let removedElement = maxHeap.remove();
    let frequencyOfLastElement = 0;
    while (removedElement !== minElement) {
        frequencyOfLastElement += frequencyMapping[removedElement];
        output += frequencyOfLastElement;
        removedElement = maxHeap.remove();
    }
    return output;
};

console.log(
    reductionOperations(
        (nums = [
            20803, 2597, 1787, 689, 19370, 47611, 39097, 20988, 29482, 25643, 20532, 26120, 4127,
            4207, 20798, 39417, 29876, 7299, 16389, 14103, 40489, 35581, 45102, 30732, 43374, 23320,
            16980, 12008, 35495, 13621, 20141, 13056, 16147, 23624, 5333, 18402, 5860, 49368, 29354,
            5931, 42731, 37642, 42171, 22210, 14905, 25591, 20106, 2691, 21447, 12243, 20758, 37946,
            19845, 16112, 21911, 6616, 35667, 40069, 37945, 39058, 6033, 16063, 14429, 1336, 15976,
            26331, 4741, 17568, 36124, 4648, 47787, 4924, 1410, 41641, 650, 19060, 49200, 23540,
            32327, 30726, 10105, 6615, 32862, 21502, 5054, 33376, 43598, 11354, 11769, 9802, 9276,
            20958, 20030, 7005, 46487, 33709, 39446, 19235, 8278, 13549, 9286, 35750, 47359, 2082,
            20714, 40864, 44054, 36239, 48902, 45194, 13464, 11676, 19591, 28354, 35226, 10348,
            3183, 46847, 43764, 16207, 16554, 4222, 44701, 29275, 28192, 35997, 16399, 35480, 28797,
            35263, 29709, 713, 25934, 22196, 11241, 16907, 31837, 1600, 42366, 27308, 37396, 1240,
            4085, 45332, 23262, 38016, 9063, 38899, 8201, 9077, 16982, 18148, 26071, 36968, 26286,
            11284, 40138, 5849, 15305, 31851, 491, 11638, 34649, 20791, 32827, 42523, 28726, 44992,
            41885, 47935, 14794, 15623, 20512, 32446, 45020, 31381, 14750, 46718, 27017, 22083,
            36727, 40062, 47725, 42822, 18038, 42364, 14384, 3159, 4690, 33535, 42290, 24163, 10451,
            33531, 13360, 20435, 19577, 45388, 19633, 36197, 24355, 10826, 45960, 45959, 48262,
            30460, 38967, 5569, 8077, 39722, 33683, 37437, 24721, 11553, 10210, 16424, 27968, 14262,
            37324, 47160, 49660, 3417, 32443, 44672, 25796, 47000, 41745, 22806, 25165, 33755,
            10801, 35667, 47835, 2668, 34353, 5925, 16724, 41187, 6623, 17533, 48294, 5487, 9118,
            40430, 43236, 44999, 45902, 5375, 29168, 15794, 25058, 28372, 26034, 10798, 21330,
            28714, 8280, 40790, 31980, 13895, 7812, 28264, 39367, 35000, 26754, 7740, 43288, 19365,
            18198, 16268, 24829, 49125, 36660, 263, 12442, 34627, 28756, 37951, 1379, 2020, 41126,
            39691, 15876, 17066, 13541, 11329, 18664, 9727, 35543, 13137, 17907, 20391, 38387,
            49639, 16442, 44796, 29256, 11009, 35742, 23394, 32166, 27523, 7983, 13694, 37392,
            25118, 13424, 18616, 7088, 1583, 7738, 37311, 48973, 867, 35736, 19426, 44166, 49878,
            47469, 42559, 8952, 4928, 32793, 24493, 37525, 20399, 28651, 32967, 44386, 23385, 49717,
            34629, 21214, 56, 8120, 28988, 47053, 29462, 22952, 19976, 35344, 26176, 22241, 47916,
        ]),
    ),
);
console.log(reductionOperations((nums = [1, 1, 2, 2, 3])));
console.log(reductionOperations((nums = [5, 1, 3])));
console.log(reductionOperations((nums = [1, 1, 1])));
console.log(reductionOperations((nums = [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3])));
