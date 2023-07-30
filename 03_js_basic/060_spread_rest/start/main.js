const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums);
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, 1.5, ...arr2, 10];

console.log(newArr);

const obj = {
  name: 'Tom',
  age: 22,
};
const newObj = { ...obj };
newObj.age = 100;

console.log(newObj, obj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4, 5);

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4);
