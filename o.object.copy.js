//?why do we use object?

//? 1. structured data  => key value pair => group of primary data types
//? 2. encapsulation => hide data ,,controlled access of the data

const object1 = {};

Object.defineProperty(object1, "Name", {
  value: "Shubham",
});

//? 3.dynamic=> WE CAN ADD ,EDIT update and delete property easily

const laptopDetails = {
  name: "F15",
  brand: "Asus",
  ram: 16, //GB
  ssd: 512, //GB
};
let key = "name ";

// console.log(laptopDetails.key); //! when used
console.log(laptopDetails[key]);

//? 4.Abstraction => hide processes

//? 5. modular ,better organization of data
