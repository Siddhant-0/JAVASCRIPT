//?OBJECT
//! key value pair

// const studentDetails = {
//   firstName: "Pratik",
//   lastName: "Acharya",
//   rollNumber: "Kan077Bct060",
// };
// console.log(studentDetails, typeof studentDetails);

// const obj1 = {};
// const obj2 = {};
// console.log(obj1 === obj2);

// const student1 = {
//   firstName: "Shubham",
//   lastName: "Baidya",
//   isGraduated: false,
//   permanentAddress: "Swyambhu",
// };
// console.log(student1);
// console.log(`My name is ${student1.firstName}`);

//console.log(student1["isGraduated"]);
//console.log(student1["permanentAddress"]);

//?CRUD
//? C => create /add

// const student1 = {
//   firstName: "Shubham",
//   lastName: "Baidya",
//   isGraduated: false,
//   address: {
//     //!nested object address
//     permanent: "Swyambhu",
//     temporary: "Chabahil",
//   },
// };

// console.log(student1.address.permanent);
// console.log(student1["address"]["permanent"]); //! alternative way of the above

//? Upsert() (update od insert)

// student1.firstName = "Roshna";
// student1.age = 34;   //! insert as there is no age variable in the object in student1

// student1["address"]["permanent"] = "Dhapakhel";
// console.log(student1);

//? R => Read / Retrieve
//? U => Update / Edit
//? D => Delete / Remove

// let nationDetail = {
//   name: "Nepal",
//   population: "3 crore",
//   perCapita: 1400,
// };
// delete nationDetail.name; //! delete is used to delete a key pair in an object
// console.log(nationDetail);

const cupDetails = {
  name: "Water Cup",
  brand: "Serve  Well",
  color: "Pink",
  name: "Tea Cup",
  color: "Green",
};
//! if same field is key / field / property is of same name then the last updated value is shown in the object
console.log(cupDetails);
