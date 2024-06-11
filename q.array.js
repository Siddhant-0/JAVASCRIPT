// array
// collection of data
// statically typed language  => C ,Java , C++

//=> array contains only collection of data of same type
//? JS,Python => Dynamic language ---------Array is collection of data of any type

// const x = [1, "Hello", null, undefined, { name: "Pratik" }, [2, 3, 4]];
// console.log(x, `\nThe data type of x is `, typeof x);

//? in real world use case , we use array with same data type

// const temperatureList = [10, 20, 30, 40];
// console.log(temperatureList);

// const nations = ["Nepal", "Sri-Lanaka", "SouthAfrica ", "Bangladesh"];
// console.log(nations);

//? values in array can be accessed by using indexing
//? index always starts with 0

// const laptopBrand = ["Asus", "MSI", "Apple", "Acer", "Dell"];
// console.log(laptopBrand[1]); //! gives output MSI

// console.log(laptopBrand.length); //! array property to find the length

const bakeryItem = [
  "Black Forest",
  "White Forest",
  "Red-Velvet",
  "Caramel",
  "Blueberry",
];
// for (let i = 0; i < bakeryItem.length; i++) {
//   console.log(bakeryItem[i]);
// }

//! Alternativve to above code using for in loop

// for (let i in bakeryItem) {
//   console.log(bakeryItem[i]);
// }

const obj = {
  0: "Apple",
  1: "Banana",
  2: "Mango",
  3: "Orange",
}; //! if keys are numeric then same as a array ----> so array  gives object type in typeof
