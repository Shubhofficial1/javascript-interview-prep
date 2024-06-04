//  "this" keyword is used to reference something (like object)
//  it depends on the context we are in

// For eg :
//
// this.a = 5; // points to the global window object of browser
// console.log(this.a);

// function getParams() {
//   console.log(this.a); // this also points to global window object of browser
// }

// getParams(); // 5 in browser

// let user = {
//   name: "Shubham Kumar",
//   age: 24,
//   getDetails: function () {
//     return this.name;
//   },
//   childObj: {
//     childName: "Rahul",
//     getChildDetails: function () {
//       console.log(this.childName); // Rahul
//       console.log(this.name); //undefined
//     },
//   },
// };

// console.log(user.getDetails());
// user.childObj.getChildDetails();

// ---------------------------------------

// In case of arrow functions

// let user = {
//   name: "Shubham Kumar",
//   age: 24,
//   getDetails: () => {
//     console.log(this.name); //undefined
//   },
// };

// user.getDetails();

// In case of class based approach

// class user {
//   constructor(name) {
//     this.name = name;
//   }
//   getDetails() {
//     console.log(this.name);
//   }
// }

// const User = new user("Shubham Kumar");

// console.log(User); //user object
// console.log(User.getDetails()); //"Shubham Kumar"
