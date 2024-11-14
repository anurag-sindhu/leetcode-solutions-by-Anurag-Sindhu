const retry = require('async-await-retry');

const func = async () => {return new Promise((resolve) => resolve('OK'))};

try {
  const res =  retry(func);
  console.log(res)

} catch (err) {
  console.log('The function execution failed !')
}
