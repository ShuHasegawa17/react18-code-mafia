const arry = [10, 20, 30, 40];
const newArry = [];

const newArry2 = arry.map((val, i, arry) => {
  return val * 2;
});
console.log(newArry2);

const newArray3 = newArry2.filter((val) => val > 50);
console.log(newArray3);
