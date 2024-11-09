var maximumDifference = function (nums) {
    let finalMax = -1;
    let min = Infinity;
    let max = -Infinity;
    for (let index = 0; index < nums.length; index++) {
        if (min > nums[index]) {
            min = nums[index];
            max = -Infinity;
        } else if (max < nums[index]) {
            max = nums[index];
        }
        if (finalMax < max - min && max - min > 0) {
            finalMax = max - min;
        }
    }
    return finalMax;
};

console.log(maximumDifference([1, 5, 2, 10]) === 9);
console.log(
    maximumDifference([
        999, 997, 980, 976, 948, 940, 938, 928, 924, 917, 907, 907, 881, 878, 864, 862, 859, 857,
        848, 840, 824, 824, 824, 805, 802, 798, 788, 777, 775, 766, 755, 748, 735, 732, 727, 705,
        700, 697, 693, 679, 676, 644, 634, 624, 599, 596, 588, 583, 562, 558, 553, 539, 537, 536,
        509, 491, 485, 483, 454, 449, 438, 425, 403, 368, 345, 327, 287, 285, 270, 263, 255, 248,
        235, 234, 224, 221, 201, 189, 187, 183, 179, 168, 155, 153, 150, 144, 107, 102, 102, 87, 80,
        57, 55, 49, 48, 45, 26, 26, 23, 15,
    ]) === -1,
);
console.log(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40]) === 55);
console.log(
    maximumDifference([
        166, 140, 78, 413, 174, 266, 166, 280, 89, 103, 87, 236, 365, 312, 413, 396, 292, 339, 67,
        16, 247, 232, 426, 203, 104, 435, 205, 395, 322, 70, 436, 451, 184, 102, 419, 519, 271, 41,
        44, 256, 488, 16, 393, 302, 434, 238, 229, 148, 189, 364, 237, 7,
    ]) === 503,
);
console.log(maximumDifference([1, 5, 2, 10]));
console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([9, 4, 3, 2]));
