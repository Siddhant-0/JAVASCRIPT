//falsy values
//false,null,undefined,0,-0,NaN,"" are equivalent values that are equals False

//? truthy values => all values except falsy values

let condition = 1;
console.log(condition ? "Truthy" : "Falsy");

if (1) {
  console.log("ttttttttruthy");
}
if ({}) {
  console.log("trrrrruthy");
}
