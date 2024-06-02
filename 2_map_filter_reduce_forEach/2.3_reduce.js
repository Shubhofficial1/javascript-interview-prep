// Reduce function in javascript is used to get just one value by iterating towards the original array

const age = [12, 2, 4, 5, 51, 1];

const totalAge = age.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(totalAge);

// if there is no initial value , then reduce fucntion takes array's first element as initial value
