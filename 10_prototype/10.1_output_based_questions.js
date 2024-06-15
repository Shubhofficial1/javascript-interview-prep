// Note : All below code will work in browser console

// let num = 10;
// let user = "Shubham";
// let isAdmin = true;

// function sum(a, b) {
//   return a + b;
// }

// console.log(num.__proto__); // Number  => has prototype as object
// console.log(user.__proto__); // String  => has prototype as object
// console.log(isAdmin.__proto__); // Boolean  => has prototype as object
// console.log(sum.__proto__); // Function  => has prototype as object

// console.log(num.__proto__.__proto__); // Object Prototype defination
// console.log(user.__proto__.__proto__); // Object Prototype defination
// console.log(isAdmin.__proto__.__proto__); // Object Prototype defination
// console.log(sum.__proto__.__proto__); // Object Prototype defination

// sum.name = "saskask"; // it gets added as a property to the function object
// console.log(sum);

// ------------------------------------------------

// Prototype chaining

// const person = {
//   name: "Shubham",
//   age: 24,
//   toString: () => {
//     console.log("Hello");
//   },
// };

// console.log(person.isAdmin()); // Error : no such function

// person.toString(); // Hello => if we have not chained this method , it would have taken default toString & output had been [Object Object]

// -------------------------------

// Prototype Inheritance

// function Animal(name) {
//   this.name = name;
// }
// // Add a method to the prototype
// Animal.prototype.sayName = function () {
//   console.log("My Name is " + this.name);
// };

// const animal1 = new Animal("Tiger");
// animal1.sayName();

// // Extending to another animal with bark fn

// function Dog(name, breed) {
//   // Using the animal name to set name here
//   Animal.call(this, name);
//   this.breed = breed;
// }

// // Object.create(Animal.prototype) creates a new object that has Animal.prototype as its prototype.
// Dog.prototype = Object.create(Animal.prototype);
// // When you set Dog.prototype to a new object created from Animal.prototype, it overwrites the existing Dog.prototype object, including its constructor property.
// Dog.prototype.constructor = Dog;
// // This line adds a new method, bark, to Dog.prototype.
// Dog.prototype.bark = function () {
//   console.log("Woof Woof");
// };

// const animal2 = new Dog("Max", "Labrador");
// animal2.sayName();
// animal2.bark();

// ---------------------------------------

// function Vehicle() {}

// Vehicle.prototype.drive = function () {
//   console.log("Driving a vehicle");
// };

// function Car() {}

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.drive = function () {
//   console.log("Driving a car");
// };

// let vehicle = new Vehicle();
// let car = new Car();

// vehicle.drive();
// car.drive();

// ----------------------------------
// __proto__ vs prototype

// __proto__ is  an object property that points to the prototype of the object.It is used for inheritance & allows accessing the prototype chain.

// prototype is a property that exists on constructor functions & is used to set up inheritance for objects created by that constructor fn. It defines properties & methods shared by all instances created by that constructor fn.

// let obj = {
//   name: "Shubham",
//   age: 24,
// };

// console.log(obj.__proto__); //Object prototype=> used to access prototype of that particular data type

// // for Eg :
// let num = 10;
// console.log(num.__proto__); // here Number prototype

// console.log(num.__proto__.__proto__); // Object prototype

// function Vehicle() {}

// Vehicle.prototype.drive = function () {
//   console.log("Driving a Vehicle"); // add a property
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed; // here used to define a property
// }

// ------------------------------

// What is SetPrototypeOf

// setPrototypeOf is a method used to set the prototype (object internals [[prototype]]) of a specified object to another object or null. It allows changing the prototype dynamically after an object has been created.

// var AnimalPrototype = {
//   sound: function () {
//     console.log("Making a sound");
//   },
// };

// var dog = Object.create(AnimalPrototype); // dog now has a sound method in its prototype

// // Create another object with different prototype

// var cat = {
//   purr: function () {
//     console.log("Purr");
//   },
// };

// Object.setPrototypeOf(dog, cat);
// dog.purr(); // purr
// dog.sound(); // error =>dog.sound() is not a fn

//----------------------------------------

// What is InstanceOf

// instanceof is a operator that checks if an object is an instance of a specific constructor or its prototype chain.
// it returns true if object is an instance or a constructor prototype chain

// ----------------------------------------

// How can you cretae an object without a prototype in JS

// var obj1 = Object.assign(null);
// console.log(obj1); // Object {}

// -------------------------------------

// Deep clone an object in JS

// var obj2 = {
//   a: 1,
//   b: 2,
//   c: 2,
//   d: [3, 4],
// };
// var clonedObj = obj2; // shallow copy , actual array value will also get changed
// clonedObj.a = 3;
// console.log(obj2);
// console.log(clonedObj);

//---------------------------------------------

// Deep Copy Polyfill

// function deepClone(obj) {
//   // Handle null & non-object types
//   if (obj === null || typeof obj != "object") {
//     return obj; // or throw an error
//   }

//   //   Create a new object or array based on type of input object

//   var clone = Array.isArray(obj) ? [] : {};

//   //   Iterate through each key in the input object
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key]);
//     }
//   }

//   return clone;
// }

// var obj3 = {
//   a: 1,
//   b: {
//     c: 3,
//     d: [3, 4],
//   },
// };

// var clonedObj3 = deepClone(obj3);

// clonedObj3.a = 3;
// clonedObj3.b.c = 5;
// console.log(obj3);
// console.log(clonedObj3);
