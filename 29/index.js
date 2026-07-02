// import Calculator from "./src/Calculator.js";
const fetchUser = require('./src/UserApi.js');


// const calc = new Calculator();

// console.log(calc.add(3, 8));
// console.log(calc.substract(3, 8));
// console.log(calc.multiply(3, 8));
// console.log(calc.divide(3, 8));


// console.log('Hello World!');


// calc.add();
// calc.add(3, 8) => expect 11
// calc.add(3, 0) => expect 3
// calc.add(-3, 0) => expect -3

console.log(fetchUser().then(res => console.log('res >>> ', res)));
