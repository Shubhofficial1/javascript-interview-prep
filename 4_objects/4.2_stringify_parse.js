// JSON.stringify vs JSON.parse

// JSON.stringify is used to convert JSON to string

const user = {
  name: "Shubham",
  age: 24,
};

const stringifiedUser = JSON.stringify(user);
console.log(stringifiedUser.name); // undefined
console.log(typeof stringifiedUser); // string
console.log(stringifiedUser);

// JSON.parse is used to convert stringified entity back to JSON
const parsedUser = JSON.parse(stringifiedUser);
console.log(parsedUser.name); //shubham

// ------------------------------

const settings = {
  username: "Shubham",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); // only stringify these 2 property
console.log(data);
