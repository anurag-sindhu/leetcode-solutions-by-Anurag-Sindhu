var canVisitAllRooms = function (rooms) {
    const totalRooms = rooms.length;
    const unlockedConfigIndexExplored = {};
    const unlockedConfig = {};
    function visitRoom(roomNumber) {
        if (rooms[roomNumber] && rooms[roomNumber].length) {
            for (const iterator of rooms[roomNumber]) {
                unlockedConfig[iterator] = true;
                if (!unlockedConfigIndexExplored[iterator]) {
                    unlockedConfigIndexExplored[iterator] = true;
                    visitRoom(iterator);
                }
            }
        }
    }

    visitRoom(0);
    unlockedConfig[0] = true;
    if (Object.keys(unlockedConfig).length < totalRooms) {
        return false;
    }
    return true;
};

console.log(canVisitAllRooms((rooms = [[1, 3], [3, 0, 1], [2], [0]])));
console.log(canVisitAllRooms((rooms = [[1], [2], [3], []])));
