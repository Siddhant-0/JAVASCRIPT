//? object classworks
// why do we use object?
//!
const myHouseDetails = {
  numberOfRooms: 50,
  numberOfMembers: 10,
  colorOfHouse: "Orange",
  builtYear: 1998,
  numberOfstorey: 6,
};

// delete myHouseDetails.numberOfMembers;
myHouseDetails.numberOfRooms = 55;
myHouseDetails.estimatedPriceOfHouse = "7 crore";
console.log(
  `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living.The house is ${myHouseDetails.numberOfstorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`
);
// console.log(myHouseDetails);
