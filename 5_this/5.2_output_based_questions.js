// const user = {
//   name: "Shubham Kumar",
//   getName() {
//     const name = "S";
//     return this.name;
//   },
// };

// console.log(user.getName());

// ----------------------------------

// const user = {
//   name: "Sh",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.logMessage, 1000); // Here user.logMessage is a window obj
// setTimeout(function () {
//   user.logMessage();
// }, 1000); // Sh

// -------------------------------------

// const user = {
//   name: "Sh",
//   greet() {
//     return `Hello ${this.name}`;
//   },
//   goodBye: () => {
//     return `Goodbye ${this.name}`;
//   },
// };

// console.log(user.greet());
// console.log(user.goodBye());
// // Hello Sh
// // Goodbye undefined

// ---------------------------------------------

// Create an Object calculator

// let calculator = {
//   read() {
//     this.a = prompt("a = ", 0);
//     this.b = prompt("b = ", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// ----------------------------------------

// Implement Calc

// const result = calc.add(10).multiply(5).substract(30).add(10);
// console.log(result.total);

// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   multiply(a) {
//     this.total *= a;
//     return this;
//   },
//   substract(a) {
//     this.total -= a;
//     return this;
//   },
// };

// const result = calc.add(10).multiply(5).substract(30).add(10);
// console.log(result.total); //30
