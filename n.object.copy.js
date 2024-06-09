//object copy

const print = (values) => {
  console.log(values);
};

const student1 = {
  name: "Sandhya",
  college: "HCOE",
  isGradtuated: false,
  image: null,
  address: {
    permanent: "A",
    temporary: "B",
  },
};
print(student1.name);

//?shallow copy
// const student2 = student1;

// student2.name = "Shubham "; //!aditi hi shital aur munni hai
// print(student2);
// print(student1);

//? spread operator (...)
// //! use spread operator to make a new object with copied value of the previous object
// const student2 = { ...student1 }; //!...student1 value is copied to object student2
// student2.name = "Pratik";

//? example 2

const student2 = { ...student1 };
student2;
