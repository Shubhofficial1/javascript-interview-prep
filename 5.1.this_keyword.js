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
