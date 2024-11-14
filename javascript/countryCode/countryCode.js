let countryTelData = require("country-telephone-data");
let data = countryTelData.allCountries;
let countryCodeMapping = {};
data.forEach((value, index, array) => {
    console.log(value);
    countryCodeMapping[value.iso2.toUpperCase()] = `+${value.dialCode}`

})

require("fs").writeFile(
    `/home/springrole/projects/angularJs/js/countryCode/mapping.json`,
    JSON.stringify(countryCodeMapping), function (err) {
        if (err) throw err;
        console.log('output Saved!');
    });
console.log(countryCodeMapping);
console.log(data)