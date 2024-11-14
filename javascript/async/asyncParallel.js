var async = require('async');

async function run() {
  let resp = await async.parallel({
    one: function (callback) {
      callback(null, 'abc\n');
    },
    two: function (callback) {
      callback(null, 'xyz\n');
    }
  });
  return resp;
}
run().then((data) => {
  console.log({ data });
})



async.parallel([
  function (callback) {
    setTimeout(function () {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  function (callback) {
    setTimeout(function () {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
  }
],
  function (err, results) {
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });
