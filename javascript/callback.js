function func(data, next) {
  next("1");
  console.log(data);
  console.log(data);
  console.log(data);
}

function func(data, next) {
  return next("1");
  console.log(data);
  console.log(data);
  console.log(data);
}

func("asd", function (data) {
  console.log(data);
});
