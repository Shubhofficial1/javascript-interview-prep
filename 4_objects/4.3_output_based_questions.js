// Find Output

console.log([..."Lydia"]); //[ 'L', 'y', 'd', 'i', 'a' ]

// FIND Output

const user = { name: "Lydia", age: 21 };
const admin = { isAdmin: true, ...user }; // Spread operator
console.log(admin);

// --------------------------------------

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; // this refers to shape object
  },
  perimeter: () => {
    return this.radius * 2 * Math.PI; //arrow fn refer to window object
  },
};

console.log(shape.diameter());
console.log(shape.perimeter());

// -----------------------------------------

let c = { greeting: "hey" };
let d;
d = c; // Here we are providing reference of the object c
c.greeting = "Hello";

console.log(d.greeting); // OP : "Hello"

// ----------------------------------------

// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false
// Bcz both have different references in memory

// --------------------------------------------

let person = { name: "Lydia" };

const members = [person];

person = null; // members is still referenced to member[0]
console.log(members); // Output: [{ name: "Lydia" }]

// person.name = null; // will trrow an error

// console.log(members); // // Output: [{ name: null }]
