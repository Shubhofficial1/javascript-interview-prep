// 1. Possible ways to create object in js
// a . Using object literal
const user = {
  name: "Shubham",
  age: 24,
};
console.log(user);

// b. Using function constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("Shubham", 24);
console.log(person);

// c. Using Object.assign function
const a = { name: "Shubham" };
const b = { age: 24 };
const user1 = Object.assign({}, a, b);
console.log(user1);

// ----------------------------------------

// 2.Advantage of comma operator

// Comma operator can be used to include multiple expressions in a place where only 1 expression is expected.

for (let i = 0, j = 0; i < 5; i++, j++) {
  console.log(i, j);
}
// 0 0
// 1 1
// 2 2
// 3 3
// 4 4

function test() {
  let a = 10;
  return (a += 10), a;
}
console.log(test()); // 20

// ---------------------------------------

// Q3. Difference between shallow & deep copy

// Shallow copy can be used to copy the reference of the object. While deep copy created an new object which can't be updated on updating previous object

// Shallow Copy example

let c = { name: "Shubham" };
let d = c;
c.name = "SH";
console.log(d); //{ name: 'SH' }

// Deep Copy
// a. Using Object.assign method
const user2 = { name: "Shubham" };
const new1 = Object.assign({}, user2);
user2.name = "Shubham2";
console.log(new1); // { name: 'Shubham' }
// b. Using JSON methods
const user3 = { name: "Shubham" };
const new2 = JSON.parse(JSON.stringify(user3));
user3.name = "SH";
console.log(new2); // { name: 'Shubham' }
// C. Using spread operator
const user4 = { name: "Shubham" };
const new3 = { ...user4 };
user4.name = "Sh";
console.log(new3); //{ name: 'Shubham' }

// --------------------------------------------
