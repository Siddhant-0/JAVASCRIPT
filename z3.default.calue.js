//?default value

// const getSum = (z, x = 2, y = 10) => {
//   //!keep default value at the end
//   let sum = x + y + z;
//   return sum;
// };

// const res = getSum(5);
// console.log(res);

// const greetUser = (userName = "User") => {
//   console.log(`Good Morning , ${userName}`);
// };

// greetUser("Shubham"); //! if no parameter passed then default value USER is passed in the function

//?alternative

const greetUser = (userName) => {
  console.log(`Good Morning , ${userName || "User"}`);
};
greetUser();
