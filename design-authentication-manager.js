var AuthenticationManager = function (timeToLive) {};

AuthenticationManager.prototype.generate = function (tokenId, currentTime) {};

AuthenticationManager.prototype.renew = function (tokenId, currentTime) {};

AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {};

let obj;
let operations;
let values;
let res;
let output = [null];

operations = [
    'AuthenticationManager',
    'renew',
    'generate',
    'countUnexpiredTokens',
    'generate',
    'renew',
    'renew',
    'countUnexpiredTokens',
];

values = [[5], ['aaa', 1], ['aaa', 2], [6], ['bbb', 7], ['aaa', 8], ['bbb', 10], [15]];

obj = new AuthenticationManager(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, 'kimchi', 'ramen', null, 'sushi', null, 'ramen'], output);
console.log({ res });

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
