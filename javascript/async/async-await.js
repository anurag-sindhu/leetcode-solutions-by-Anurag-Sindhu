function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  return promise; // wait until the promise resolves (*)
}
function f3() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done3!"), 1000)
  });

  return promise; // wait until the promise resolves (*)
}
function f4() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done4!"), 1000)
  });

  return promise; // wait until the promise resolves (*)
}


async function f1() {
  let res2 =  f2().then(function(result) {
    return result;
  });
  let res3 = f3();
  let res4 = await f4();
  console.log(res2);
  console.log(res3);
  console.log(res4);
}
  f1();
