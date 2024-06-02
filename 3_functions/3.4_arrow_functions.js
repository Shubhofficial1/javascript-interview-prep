// Arrow function is a consise way to write fucntion expressions in javascript. they were introduced in ecmascript(ES6) & provided a more compact syntax as compared to traditional function syntax.

// Regular fn
// function double(num) {
//   return num * num;
// }

// console.log(double(3));

// Arrow Function

// const double = (num) => num * num;

// console.log(double(2));

// Advantage/Disadvantage of arrow fucntion

// 1. Consise syntax
// 2. Implicit return
// 3. Lexical "this" binding
// 4. No binding of 'arguments' object

// // Traditional function
// function traditionalFunction() {
//   console.log(arguments);
// }

// traditionalFunction(1, 2, 3); // Output: [1, 2, 3]

// // Arrow function
// const arrowFunction = () => {
//   console.log(arguments);
// };

// arrowFunction(1, 2, 3); // Output: ReferenceError: arguments is not defined

// // Using rest parameters in an arrow function
// const arrowFunctionWithRest = (...args) => {
//   console.log(args);
// };

// arrowFunctionWithRest(1, 2, 3); // Output: [1, 2, 3]

// -----------------------------

// let user = {
//   name: "Shubham Kumar",
//   getName1: function () {
//     console.log(this.name);
//   },
//   getName2: () => {
//     console.log(this.name);
//   },
// };

// user.getName1(); // traditional function has this binding => points to local context object
// user.getName2(); //arrow function does not have lexical this binding => points to global window object
