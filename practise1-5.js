// --------------------------------------------

// Var let vs const

// function test() {
//   var a = 20;
//   {
//     let a = 10;
//     console.log(a); // 10
//   }
//   console.log(a); //20
// }

// test();

// function test() {
//   let a = 20;
//   {
//     let a = 10;
//     console.log(a); // 10
//   }
//   console.log(a); //20
// }

// test();

// function test() {
//   var a = 20;
//   {
//     var a = 10;
//     console.log(a); // 10
//   }
//   console.log(a); //10
// }

// test();

// function test() {
//   let a = 20;
//   {
//     var a = 10;
//     console.log(a); // 10
//   }
//   console.log(a); //10
// }

// test(); // illegal shadowing

// IN Case of Var

// console.log(a);
// var a = 10;

// IN case of let
// console.log(a); //Reference error
// let a = 10;

// In case of const
// console.log(a); // refrence error
// const a = 10;

// Functions are hoisted to the top
// console.log(test()); // Hello
// function test() {
//   return `Hello`;
// }

// Js sees above as
// function test() {
//   return `Hello`;
// }
// test();

// --------------------------------------

// Map, filter & reduce;

// const nums = [1, 2, 3, 4, 5];

// const double = nums.map((num, i, nums) => num * 2);
// console.log(double); // [2,4,6,8,10]
// console.log(nums);   // [1,2,3,4,5]

// const greatorThan2 = nums.filter((num) => num > 2);
// console.log(greatorThan2); //[ 3, 4, 5 ]
// console.log(nums); //[ 1, 2, 3, 4, 5 ]

// const sum = nums.reduce((acc, curr, i, nums) => acc + curr, 0);
// console.log(sum);
// console.log(nums);

// Map polyfill

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4, 5];

// const triple = nums.myMap((num) => num * 3);
// console.log(triple);

// Filter Polyfill

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4, 5];
// const greatorThan3 = nums.myFilter((num) => num > 3);
// console.log(greatorThan3);

// Reduce Polyfill

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// forEach Implementation
// const nums = [1, 2, 3, 4, 5];
// nums.forEach((num) => console.log(num * 4));

// forEach Implementation for mutation

// const nums = [1, 2, 3, 4, 5];
// nums.forEach((num, i, nums) => {
//   nums[i] = num * 2;
// });
// console.log(nums);

// ---------------------------------------------

// Loop through an Object

// const user = {
//   name: "Shubham",
//   age: 24,
//   details: {
//     firstName: "Shubham",
//     lastName: "kumar",
//   },
// };
// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// Destructure on different levels

// const { name: myName } = user;
// console.log(myName);
// const {
//   details: { firstName },
// } = user;
// console.log(firstName);

// const user = {
//   name: "Shubham",
//   age: 24,
//   address: "bihar",
// };

// const newUser = user; // Shallow Copy
// newUser.address = "lohia nagar chowk";
// console.log(newUser);
// console.log(user);

// user.address = "lohia nagar chowk";
// console.log(user);
// console.log(newUser);

// Ways for deep copy

// const user = {
//   name: "Shubham",
//   age: 24,
//   address: "bihar",
// };

// 1. Using object.assign

// const newObj = Object.assign({}, user);
// newObj.name = "Sh";
// console.log(newObj);
// console.log(user);

//  2. Use JSON.parse(JSON.stringify(user))

// const newObj = JSON.parse(JSON.stringify(user));
// newObj.name = "Sh";
// console.log(newObj);
// console.log(user);

// 3 Use spread operator

// const newObj = { ...user };
// newObj.name = "Sh";
// console.log(newObj);
// console.log(user)

// ----------------------------------------------
// Function

// IIFE

// (function a(x) {
//   return (function b(y) {
//     console.log(x + y);
//   })(5);
// })(3);

// ----------------------------------------------------

// Currying

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

// sum(2)(6)(1);

// function Product(a) {
//   return function (b) {
//     console.log(a * b);
//   };
// }

// Product(5)(6);

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       if (operation === "subs") return a - b;
//       if (operation === "mul") return a * b;
//       if (operation === "divide") return a / b;
//       return "Invalid operation";
//     };
//   };
// }

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("subs")(4)(2));
// console.log(evaluate("mul")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("else")(4)(2));

// Infinite currying

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)(4)(5)());

// Partial Currying

// function partial(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// console.log(partial(1)(3, 5));

// ------------------------------------
