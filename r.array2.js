//?Methods in array

//? push => to add element at the end of the array

// const numList = [1, 2, 3, 4, 5];

// numList.push(10, 20, 30);
// console.log(numList);

//? pop => to remoce element from thd of the aarray
// numList.pop();
// console.log(numList);

//? shift => to remove first item from the array

// const studentName = ["Samundra", "Prashant", "Pratik", "Rajan"];
// studentName.shift();
// console.log("Before adding :", studentName);

//? unshift => to insert item at starting of the array

// studentName.unshift("Shubham");
// studentName.unshift("Suyasha", "Unik");
// console.log("After adding item to start of the array :", studentName);

//? reverse =>  reverses the order of the items in the array

const itemPrice = [15, 50, 44, 100];
// itemPrice.reverse();
// console.log(itemPrice);

// //! creates new reversed list of new array name
// const newPriceList = itemPrice.toReversed();
// console.log(newPriceList);

//? includes
//? checks whether array contains specific value or not
//? result in boolean (TRUE OR FALSE )

// const laptopBrand = ["A15", "nitro5", "tuf f15"];
// const result = laptopBrand.includes("A15");
// console.log(result);

//? string as array

// const var1 = "This is a String.";
// console.log(var1[1]);
// console.log(var1.includes("This"));

//? SLICE =>> it does not change original array
//? returns new array with portion of original array
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const newList = animals.slice();
// newList[0] = "red- ant";
// console.log(animals);
// const result = animals.slice(0, 3); //! gives output from starting index to stop index - 1
// console.log(result);

//?  splice => removes or replace existing items

// const months = ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun"];

// months.splice(1); //!removes item from this index to end
// console.log(months);

//?ex 2
// let schools = ["SXD", "AVM", "DAV", "SXC", "SXJ"];
// console.log(
//   "Deletion starts from 1 and continous for 2 indxes ",
//   schools.splice(1, 2, 102, 123)
// );

//? Sort
//? ascending or descending order

// const studentList = [
//   "Saugat",
//   "Abhishek",
//   "Yadav",
//   "Smriti",
//   "Yeshika",
//   "Lokendra",
// ];

// studentList.sort();     //! ascending order
//studentList.sort().reverse()                       //! tosorted() used to make a new array as sort() changes the original array
// console.log(studentList);


let numList = [1, 100, 11, 111, 2, 23, 20, 50, 51, 505];

numList.sort();
console.log(numList); //! watch out for numeric sort as it checks the first number
numList.sort((a, b) => a - b); //ascending numeric sort
// numList.sort((a, b) => b - a); //descending numeric sort
console.log(numList);
