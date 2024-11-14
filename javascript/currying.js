function volume(l, w, h) {
    return l * w * h;
}

const curried = _.curry(volume);

volume(2, 3, 4); // 24
curried(2)(3)(4); // 24