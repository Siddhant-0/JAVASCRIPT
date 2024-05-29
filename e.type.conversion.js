//? string to number conversion
const x = "45.2"; //numberic string
const y = Number(x);
//!shortcut for number is writing '+'
const z = +x;

console.log(y, typeof y);
console.log(z, typeof z);

//? parseInt  ,parseFloat
const m = "11asdf";
const n = parseInt(m); //!parse exclude all the data types except for the number inside the quot
console.log(n, typeof n);

//? to string conversion
const isMarried = String(true);
console.log(isMarried, typeof isMarried);

//? template literal
const userName = "Supreme";

console.log("Hi I am ", userName);

//?string concatenation

console.log("2" + "3");
console.log(`Hi my name iswhat  ${userName}`);
//!template liiterals uses `` and ${} inside that is to be printed inside a printable string

const num = 12345;
const num2 = `${num}`;
console.log(num2, typeof num2);
