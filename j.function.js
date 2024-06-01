//function objective=> code reusability, ro reduce code redudnacy , single point of failure
//?DRY => Do not Repeat Yourself

//?syntax
//! function functioName(){
//!     somecode
//! }

// let userID = 12345;
// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
//   console.log(`Hello ${userID}`);// userID has global scope so can be accessed inside the function
// }
// sayHello("Smriti");
//!..........................................
// let sum = 0;
// function getSum(x, y) {
//   sum = x + y;
// }
// getSum(2, 3);
// console.log(sum);

//?Arrow function

// const sayHi = (studentName = "user ") => {
//   // if no parameter is passed then default value user is passed in the function
//   console.log(`Hi ${studentName}`);
// };
// sayHi("Suyasha");
// sayHi();

// const sayHi = (studentName = "user ") => {
//   // if no parameter is passed then default value user is passed in the function
//   studentName = "Prashant";
//   console.log(`Hi ${studentName}`);
// };
// sayHi("Suyasha");
// sayHi();

//!**********************case 2****************************

//!when a parameter  variable is defined inside the function then the defaut value is set to the inner value
//!used to modify the input parameters inside the function
const doSUm = (x, y) => {
  x = Number(x); // same as +x
  y = +y;
  let sum = x + y;
  return sum;
};
let result = doSUm("2", "3");
console.log(result);

//? WAP to print the product of two numbers

const product = (num1, num2) => {
  const product = num1 * num2;
  return product;
};
let productResult = product(5, 6);
console.log(productResult);

//? WAF that checks whether the number is odd or even
const checkEvenOdd = (number) => {
  let result;
  if (number % 2 === 0) {
    result = `${number} is EVEN `;
  } else {
    result = "ODD";
  }
  return result;
};
console.log(checkEvenOdd(6));

//!alternative to above
const isOddEven = (num) => (num % 2 == 0 ? "Even" : "Odd");
console.log(isOddEven(5));

//?WAF to check the polarity of a number

const polarCheck = (num) => {
  let output;

  if (num > 0) {
    output = "Positive";
  } else if (num < 0) {
    output = "Negative";
  } else {
    output = "Zero";
  }

  return output;
};
console.log(polarCheck(-234));

//?one liner for the above code is below using conditionals
const polarityCheck = (numb) => (numb > 0 ? "+ve" : numb < 0 ? "-ve" : "0");
console.log(polarityCheck(5));
