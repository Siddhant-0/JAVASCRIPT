// TODO : spread vs rest

// callback function

//? function which is passed as an argument to another function
//? is called call function

const getSum = (a, b, callbackfunc) => {
  let sum = a + b;
  callbackfunc(sum);
};
getSum(5, 7, (value) => {
  console.log(value);
});
