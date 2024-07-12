//promise => something that happens in future

//? tri-state
//? 1.pending
//? 2. success
//? 3.failure

//? To get result , we need to resolve promise

//? 1. call back function used to solve it

const getSum = (a, b) => {
  console.log(a + b);
};
getSum(2, 3);
//? 2. .then .catch
//? 3. async await
