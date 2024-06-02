// Spread vs Rest

// Spread helps to spread values out of an array while rest moves the values in an array

// Spread can be used anywhere in parameter decleration while rest can only be used at the last

// Spread is used within function calls & array literal while rest is used as function parameter to collect arguments

// For eg :
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); // spread operator

// ------------------------------------

function sum(a, b, ...rest) {
  console.log(rest);
}

sum(1, 2, 3, 4, 5);

// -------------------------------

function sum1(...args) {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(sum1(1, 2, 3, 4, 5));

// ------------------------------

function getItems(fruitList, favorateFruits, ...args) {
  return [...fruitList, ...favorateFruits, ...args];
}

console.log(getItems(["Apple", "Orange"], ["Peach"], "Lichi")); //[ 'Apple', 'Orange', 'Peach', 'Lichi' ]
