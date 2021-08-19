const Middleware = require('./Middleware')
const numbers = {
  num1: 3,
  num2: 4
}
class Calculator {
  add({
    num1,
    num2
  }) {
    return num1 + num2;
  };
  subtract({
    num1,
    num2
  }) {
    return num1 - num2;
  };
  multiply({
    num1,
    num2
  }) {
    return num1 * num2;
  };
};

const operate = new Calculator();
const middle = new Middleware(operate);

//
middle.use((nums, next) => {
  console.log('The result of the operate is: ' + nums.num)
  nums.num = nums.num * 2;
  next()
});

middle.use((nums, next) => {
  nums.num = nums.num * 3;
  next()
});

middle.use((nums, next) => {
  nums.num = nums.num / 2;
  next()
});

console.log(`The result of the square is: ${middle.add(numbers)}`);
console.log(`The result of the cube is: ${middle.subtract(numbers)}`);
console.log(`The result of the half is: ${middle.multiply(numbers)}`);