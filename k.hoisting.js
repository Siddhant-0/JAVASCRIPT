sayHello(); //JS pulls the function definition to the top of the

function sayHello() {
  console.log("Hello");
}

//! Arrow functions are not hoisted to the top

const sayHi = () => {
  console.log("Hohoho");
};
sayHi();
