// Destructring is the  process of extarcting property from an object

const user = {
  username: "Shubham",
  age: 24,
  fullName: {
    firstName: "Shubham",
    lastName: "kumar",
  },
};

const { username } = user;
console.log(username);
const { age: myAge } = user; // used myAge as an alias
console.log(myAge);

const { fullName } = user; //getting fullname key
console.log(fullName);

const {
  fullName: { firstName }, // getting nested  key value
} = user;

console.log(firstName);
