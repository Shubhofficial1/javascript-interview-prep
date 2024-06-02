// Shallow copy : When we copy an object to another object , but that particular object still have reference to the original object

// Deep copy : When we completely clone an object into another variable

// 3 ways to deep copy an object =>

//1. Using Object.assign method

let user = {
  name: "Shubham",
  age: 24,
};

const objClone = Object.assign({}, user);

objClone.name = "Shubham Kumar";
console.log(user, objClone); //{ name: 'Shubham', age: 24 } { name: 'Shubham Kumar', age: 24 }

// 2. Using stringify & parse methods

const objClone2 = JSON.parse(JSON.stringify(user));
objClone2.name = "Shubham Kumar";
console.log(user, objClone2); //{ name: 'Shubham', age: 24 } { name: 'Shubham Kumar', age: 24 }

// 3. Using Spread Operator

const objClone3 = { ...user };
objClone3.name = "Shubham Kumar";
console.log(user, objClone3); //{ name: 'Shubham', age: 24 } { name: 'Shubham Kumar', age: 24 }
