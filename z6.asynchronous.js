//? ASYNCHRONOUS

//? synchronous  => existing or occurring at the same time
//? synchronous  => not existing or occurring at the same time

//? node = > single threaded
//? H => hexacore
//? H => high performance
//? k => unlocked
//? u => ultra power

// console.log("hi");

// setTimeout(() => {
//   console.log("Timeout ");
// }, 2000);

// console.log("hello");

//? example 2
// console.log("Nepal");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 2000);
// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);
// console.log("South Africa ");

//?example 3
//?  call stack  in function

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };
// const square = (n) => {
//   const squaredNumber = multiply(n, n);
//   return squaredNumber;
// };
// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };
// printNumber();

//?recursive function
//! Error : maximum call stack size exceded

const sayHi = () => {
  sayHi();
};

sayHi();
