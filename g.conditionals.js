//? sequential flow

// console.log("hi");
// console.log(2 + 3);
// console.log("hello world");

//? if
// if (true) {
//   console.log("Hello World");
// }

//? if ... else
// let number = 20;
// if (number % 2 === 0) {
//   console.log(`${number} is even `);
// } else {
//   console.log("odd");
// }

//? if.... else if ..... else
//!find polarity of the number
// let input = prompt("Enter a number :");
// if (input < 0) {
//   console.log(`${input}is negative.`);
// } else if (input > 0) {
//   console.log(`${input} is positive .`);
// } else {
//   console.log(`${input} is zero .`);
// }

//? find the greatest numbers among the 3 entered numbers
// let num1 = 23;
// let num2 = 45;

// let num3 = 7;

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is the greatest number.`);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(`${num2} is the greatest number.`);
// } else {
//   console.log(`${num3} is the greatest number.`);
// }

//? switch
// let dayNumber = 5;
// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednasday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Input ");
// }

//? ternary
let number = 45;
remainder = number % 2;
remainder === 0 ? console.log("ever") : console.log("odd"); //! alternative of if statement

age = 25;
let result = age > 18 ? "Adult" : "Not Adult";
console.log(result);

//? conditional ternary chaining
const x = 7;
x > 0
  ? console.log("positive")
  : x < 0
  ? console.log("Negative")
  : console.log("Neutral");
