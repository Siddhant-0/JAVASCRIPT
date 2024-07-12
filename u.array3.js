//? map, filter, find , findIndex , reduce

let studentList = ["Shubham", "Saugat", "Suyasha", "Smriti", "Unik"];
//? map
//? it returns new array
//? to alter values of array
//? original array length ===returned array length

// const newStudentList = studentList.map((item, index, array) => {
//   console.log(item, index, array);
//   return "a";
// }); //! item ,index and array are parameters of map function
// console.log(newStudentList);

//?returns upper case names
// const newStudentList = studentList.map((item, index, array) => {
//   let upperCaseName = item.toUpperCase();

//   return upperCaseName;
// });
// console.log(newStudentList);

//?updating each array item
// const priceList = [25, 35, 45, 50, 90];
// const newPriceList = priceList.map((item) => {
//   item += 3;
//   return item;
// });
// console.log(newPriceList);

//? alternative one liner

// const priceList = [25, 35, 45, 50, 90];
// const newPriceList = priceList.map((item) => item + 3);
// console.log(newPriceList);

//? array of objects
const productList = [
  {
    id: 1,
    name: "Night Vision Glass",
    price: 5,
  },
  {
    id: 2,
    name: "Gloves",
    price: 7,
  },
  {
    id: 3,
    name: "Helmet",
    price: 25,
  },
];

//? increase the price of the each item by 10% due to inflation

const newProductList = productList.map((item, index, array) => {
  const newPrice = item.price + (1 / 10) * item.price;
  return {
    ...item,
    price: newPrice,
  };
});
console.log(newProductList);
