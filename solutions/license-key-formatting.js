var licenseKeyFormatting = function (s, k) {
  let removedHashes = '';
  let resp = '';
  let tempK = k;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '-') {
      continue;
    }
    removedHashes += s[index].toUpperCase();
  }
  const findReminder = removedHashes.length % k;
  for (let index = 0; index < findReminder; index++) {
    resp += removedHashes[index];
  }
  if (findReminder && resp.length === findReminder && removedHashes.length > k) {
    resp += '-';
  }
  for (let index = findReminder; index < removedHashes.length; index++) {
    resp += removedHashes[index];
    tempK -= 1;
    if (!tempK && index + 1 < removedHashes.length) {
      resp += '-';
      tempK = k;
    }
  }

  return resp;
};

console.log(licenseKeyFormatting((s = '2-5g-3-J'), (k = 2)));
//"2-5G-3J"
console.log(licenseKeyFormatting((s = '2'), (k = 2)));
//2
console.log(licenseKeyFormatting((s = '5F3Z-2e-9-w'), (k = 4)));
//"5F3Z-2E9W"
console.log(licenseKeyFormatting('--a-a-a-a--', 2));
//"AA-AA"
