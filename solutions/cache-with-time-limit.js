
var TimeLimitedCache = function () {

};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {

};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {

};


let obj;
let operations;
let values;
let res;
let output = [null];

operations = ["TimeLimitedCache", "set", "get", "count", "get"];

values = [[], [1, 42, 100], [1], [], [1]];

values = [0, 0, 50, 50, 150];

obj = new TimeLimitedCache(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, 'kimchi', 'ramen', null, 'sushi', null, 'ramen'], output);
console.log({ res });