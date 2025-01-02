var videoStitching = function (clips, time) {
    clips.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });
    console.log(JSON.stringify(clips));
    let index = 0;
    let count = 1;
    let startPosition = clips[index][0];
    let endPosition = clips[index][1];
    let noFurtherCostTill = 0;
    index += 1;
    let hasSecondElement = false;
    if (startPosition != 0) {
        return -1;
    }
    if (endPosition >= time) {
        return count;
    }
    while (true) {
        const start = clips[index][0];
        const end = clips[index][1];
        if (hasSecondElement == false) {
            if (start > startPosition && end > endPosition && start <= endPosition) {
                count++;
                noFurtherCostTill = endPosition;
                startPosition = Math.max(start, startPosition);
                endPosition = Math.max(end, endPosition);
                hasSecondElement = true;
            }
        } else {
            if (start > noFurtherCostTill) {
                count++;
                noFurtherCostTill = endPosition;
            }
            endPosition = Math.max(end, endPosition);
        }
        if (endPosition >= time) {
            break;
        }
        index++;
        if (index >= clips.length) {
            break;
        }
    }
    if (endPosition >= time) {
        return count;
    }
    return -1;
};

console.log(
    videoStitching(
        [
            [8, 16],
            [8, 10],
            [11, 19],
            [13, 35],
            [17, 39],
            [18, 35],
            [18, 19],
            [33, 39],
        ],
        20,
    ) == -1,
);

console.log(
    videoStitching(
        [
            [0, 9],
            [1, 11],
            [2, 7],
            [3, 12],
            [4, 14],
            [7, 14],
            [9, 14],
            [12, 15],
        ],
        10,
    ) == 2,
);

console.log(
    videoStitching(
        [
            [0, 6],
            [0, 0],
            [1, 8],
            [2, 3],
            [4, 5],
            [5, 10],
            [5, 7],
            [7, 10],
        ],
        5,
    ) == 1,
);
console.log(
    videoStitching(
        [
            [0, 2],
            [4, 8],
        ],
        5,
    ) == -1,
);

console.log(
    videoStitching(
        (clips = [
            [0, 4],
            [0, 3],
            [0, 2],
            [0, 1],
            [1, 5],
            [1, 4],
            [1, 3],
            [2, 6],
            [2, 5],
            [3, 4],
            [4, 7],
            [4, 5],
            [5, 7],
            [5, 6],
            [6, 9],
            [6, 8],
            [6, 7],
        ]),
        (time = 9),
    ) == 3,
);
console.log(
    videoStitching(
        (clips = [
            [0, 2],
            [4, 6],
            [8, 10],
            [1, 9],
            [1, 5],
            [5, 9],
        ]),
        (time = 10),
    ) == 3,
);
console.log(
    videoStitching(
        (clips = [
            [0, 1],
            [1, 2],
        ]),
        (time = 5),
    ) == -1,
);
