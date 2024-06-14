// TODO : spread vs rest


//? Higher order function
//? 1. callBack function (function as an arrgument to another function )
//? 2. Closure (function returning function)
// callback function

//? function which is passed as an argument to another function
//? is called call function

// const getSum = (a, b, callbackfunc) => {
//   let sum = a + b;
//   callbackfunc(sum);
// };
// getSum(5, 7, (value) => {
//   console.log(value);
// });

//?function returning function
//! closure => funcrtion + lexical environment (surrounding environment )

//!we can say makeAdder is a function is a function factory
// const makeAdder = (x) => {
//   const doSum = (y) => {
//     let sum = x + y;
//     return sum;
//   };
//   return doSum;
// };

// const doSum5 = makeAdder(5);
// const doSum10 = makeAdder(10);

// const sum = doSum10(10);
// console.log(sum);

// const sum = makeAdder(25)(5);

// console.log(sum);

//? aesthetic format

const makeAdder = (x) => (y) => x + y;

console.log(makeAdder(100)(5));
