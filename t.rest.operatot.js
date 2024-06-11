//rest operator => acts as collector
// (...)

const getSum = (a, b, ...othervlues) => {
  console.log(othervlues);
  let sum = a + b;
  return sum;
};

const result = getSum(1, 2, 3, 4, 5);
console.log(result);
