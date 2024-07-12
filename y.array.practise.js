const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

//? 1.give 6% on june6 on each laptop
const discountedLaptops = laptopList.map((item, index, array) => {
  const discount = laptop.price * 0.06;
  const discountedPrice = laptop.price - discount;
  return {
    ...laptop,
    discountedPrice: discountedPrice.toFixed(2), // rounded to 2 decimal places
  };
});

console.log(discountedLaptops);

//? 2.increase price of Sell laptops by 10%

//? 3.find all lenovo laptops

const lenovoLaptops = laptopList.filter((laptop) => laptop.brand === "Lenovo");
console.log(lenovoLaptops);

//? 4.update name of "Idea pad to Idea Pad Ultra"

//? 5.get all laptops whose price is below $1050

//? 6.find "Zenbook 15" laptop details

// const zenbook15 = laptopList.find(laptop => laptop.name === "Zenbook 15");
// console.log(zenbook15);

//? 7.find sum of prices of all laptops
