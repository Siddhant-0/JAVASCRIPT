// constant
//? in JS => constant means which cannot be re-assigned

// const x = 7;
// x = 5;  //! constant can only be defined once

//? mutation =>> process fo haccing change
//? mutate => change
//? mutable  => changeable

//? primary data type {string , number , boolean , undefined, null} => cannot be reassigned , is thus immutable

//?immutable
// const isDeveloped = false;
// isDeveloped = true;

//? non-primary data type {oobject } => cannot be reassigned but is muttable

// const phoneDetails = {
//   brand: "Samsung",
// };
// phoneDetails.brand = "Apple"; //! here the data is mutable (changeable) but it cannot be reassigned as the same

// phoneDetails ={
//     brand : "apple"  //! but it cannot be reassigned a new value in it
// }

// const obj1 = Object.freeze({
//   //! when Object.freeze used key value not  changed , deleted  or updated
//   name: "Siddhant",
// });
// obj1.name = "Supreme";
// console.log(obj1.name);

const obj1 = {
  name: "A",
};

const obj2 = {
  name: "X",
};

// TODO : later in ARRAY
const obj1keys = Object.keys(obj1);
