const user = {
  name: "Shubham",
  age: 24,
};

// Print user name
console.log(user.name);

// Change user name to include title
user.name = "Shubham Kumar";
console.log(user.name);

// Delete keyword is only used to remove the property(key-value pair) from object

// use Delete propert to remove age from user object

delete user.age;

console.log(user);

// ----------------------

// Create an IIFE that delete the params & check output

(function (a) {
  delete a;
  console.log(a);
})(2);

// output: 2

// Bcz delete only is used to delete an object property

// ----------------------------
// const userData = {
//   name: "Shubham",
//   age: 24,
// };

// How can we add a key named   - like this code in userData object & print it & finally delete that property

const userData = {
  name: "Shubham",
  age: 24,
  "like this code": true,
};

console.log(userData["like this code"]);

delete userData["like this code"];
console.log(userData);

// -----------------------------

// Dynamically add key value pairs in an object

const property = "firstName";
const firstName = "Shubham";

const userNew = {
  [property]: firstName,
};

console.log(userNew);

// -------------------------

// How to loop through object

const student = {
  name: "Shubham",
  age: 24,
  marks: 99,
};

for (key in student) {
  console.log(key);
  console.log(student[key]);
}

// -------------------------

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);

// Output: {
//   a: "three";
//   b: "two";
// }

// -------------------------

// Create a fn multiplyByTwo(obj) that multiplies all numeric property value of nums by 2

const numObj = {
  name: "Object",
  first: 2,
  second: 4,
  third: false,
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

console.log(multiplyByTwo(numObj));

// Output : { name: 'Object', first: 4, second: 8, third: false }

// ---------------------------------

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// Output Explanation :
// Basically above code will be interpreted as below

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b]=123 => a[Object Object]=123
// a[c]=456=> a[Object Object]=456
// console.log(a[b]) => console.log(a[Object Object]) i.e 456
