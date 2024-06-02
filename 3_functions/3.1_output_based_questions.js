// wap to print square of a given number

// function square(num) {
//   return num * num;
// }

// console.log(square(5));

// What are first class functions

// In some programming languages , some functions can be treated exactly like a variable , those funnctions are known as first class function
// For Eg :

// function cube(num) {
//   return num * num * num;
// }

// function displayCube(fn) {
//   console.log("Cube is " + fn());
// }

// displayCube(() => cube(5));

// IIFE => immediately invoked function expression

// (function sqaure(num) {
//   console.log(num * num);
// })(2);

// Find Output

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// OP: 1

// Find Output :

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// 5
// 5
// 5
// 5
// 5

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// Op:
// 0
// 1
// 2
// 3
// 4

// Hoisting

// Hoisting is the feature in javascript in which all the variable/fucntional decleration are moved to the top of current scope during excecution phase.

// for eg:

// test();

// function test() {
//   console.log("Hi");
// }

// console.log(x);
// var x = 20;

// ---------------

// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();

// OP: undefined;

// Params vs argument

// function sqaure(num) {
//   // num is params
//   return num * num;
// }

// sqaure(5); // 5 is argument

// ----------------------

// REST Paramter example :

// const fn = (a, b, ...rest) => {
//   console.log(a);
//   console.log(b);
// };

// fn(1, 2, 3, 4, 5);

// OP: A rest parameter must be last in a parameter list.
