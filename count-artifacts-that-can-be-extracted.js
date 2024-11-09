var digArtifacts = function (n, artifacts, dig) {
  const digObject = {};
  for (const [row, column] of dig) {
    digObject[`${row}_${column}`] = true;
  }
  let count = 0;
  for (const artifact of artifacts) {
    if (digObject[`${artifact[0]}_${artifact[1]}`] && digObject[`${artifact[2]}_${artifact[3]}`]) {
      count += 1;
    }
  }
  return count;
};

console.log(
  digArtifacts(
    (n = 2),
    (artifacts = [
      [0, 0, 0, 0],
      [0, 1, 1, 1]
    ]),
    (dig = [
      [0, 0],
      [0, 1]
    ])
  )
);

console.log(
  digArtifacts(
    (n = 2),
    (artifacts = [
      [0, 0, 0, 0],
      [0, 1, 1, 1]
    ]),
    (dig = [
      [0, 0],
      [0, 1],
      [1, 1]
    ])
  )
);
