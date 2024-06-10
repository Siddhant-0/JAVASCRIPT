// object destructure

const bookDetail = {
  name: "Operating System",
  author: "A. fanebaum",
  publishedDate: "1990/01/01",
  numberOfPages: 500,
  coverPhoto: null,
  price: undefined,
};

// console.log(bookDetail.author);
// console.log(bookDetail.name);

// const { name, author, publishedDate, numberOfPages, coverPhoto, price } =
//   bookDetail;

// console.log(author);
// console.log(name);

const obj1 = {
  name: "Pen",
  price: 200,
};
const obj2 = {
  name: "Paper",
  price: 10,
};
const { price } = obj1;
const { price: priceOfProduct } = obj2; //!if the value of the keys are the same in different in objects then destructure san be used only by renaming in the object definition

console.log(price);

console.log(priceOfProduct);
