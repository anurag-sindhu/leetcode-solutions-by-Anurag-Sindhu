class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueueQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        var qElement = new QElement(element, priority);
        var contain = false;

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        if (!contain) {
            this.items.push(qElement);
        }
    }

    sortAlphabeticallySamePQueue() {
        const arr = [];
        let tempArr = [];
        let lastPriority = null;
        for (let index = 0; index < this.items.length; index++) {
            if (lastPriority === null) {
                lastPriority = this.items[index].priority;
            } else {
                if (lastPriority !== this.items[index].priority) {
                    lastPriority = this.items[index].priority;
                    arr.push(...tempArr.sort());
                    tempArr = [];
                }
            }
            tempArr.push(this.items[index].element);
        }
        arr.push(...tempArr.sort());
        return arr;
    }

    printPQueue() {
        var arr = [];
        for (var i = 0; i < this.items.length; i++) {
            arr.push(...this.items[i].element);
        }
        return arr;
    }

    highestRated() {
        const temp = this.items[this.items.length - 1];
        return temp.element;
    }
}

var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    const friendOfFriend = {};
    const getFriendsForRespectiveLevel = function (currentLevel, frnds) {
        if (currentLevel === level) {
            for (const iterator of frnds) {
                if (id !== iterator) {
                    friendOfFriend[iterator] = true;
                }
            }
        }
        if (currentLevel > level) {
            return;
        }
        for (const iterator of friends[id]) {
            getFriendsForRespectiveLevel(currentLevel + 1, friends[iterator]);
        }
    };
    getFriendsForRespectiveLevel((currentLevel = 1), (frnds = friends[id]));
    const vids = {};
    for (const friend in friendOfFriend) {
        for (const iterator of watchedVideos[friend]) {
            if (!vids[iterator]) {
                vids[iterator] = 0;
            }
            vids[iterator] += 1;
        }
    }
    const reverseObject = {};
    for (const key in vids) {
        if (!reverseObject[vids[key]]) {
            reverseObject[vids[key]] = [];
        }
        reverseObject[vids[key]].push(key);
    }
    const priorityQueue = new PriorityQueueQueue();
    for (const key in reverseObject) {
        priorityQueue.enqueue(reverseObject[key].sort(), key);
    }
    const output = priorityQueue.printPQueue();
    return output;
};

console.log(
    watchedVideosByFriends(
        (watchedVideos = [['A', 'B'], ['C'], ['B', 'C'], ['D']]),
        (friends = [
            [1, 2],
            [0, 3],
            [0, 3],
            [1, 2]
        ]),
        (id = 0),
        (level = 1)
    )
);

console.log(
    watchedVideosByFriends(
        (watchedVideos = [['A', 'B'], ['C'], ['B', 'C'], ['D']]),
        (friends = [
            [1, 2],
            [0, 3],
            [0, 3],
            [1, 2]
        ]),
        (id = 0),
        (level = 2)
    )
);

console.log(
    watchedVideosByFriends(
        [
            ['xk', 'qvgjjsp', 'sbphxzm'],
            ['rwyvxl', 'ov']
        ],
        [[1], [0]],
        0,
        1
    )
);
